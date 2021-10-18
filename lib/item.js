export default class Item {
  path = null
  opts = {}
  working = false

  constructor(path, opts = {}) {
    this.path = path
    this.opts = opts

    if (this.opts.check) {
      this.working = true
      const img = new Image()

      img.onload = () => {
        if (this.opts.replace && this.opts.replace.length > 0) {
          const c = document.createElement('canvas')
          const ctx = c.getContext('2d')

          c.width = img.width
          c.height = img.height

          ctx.drawImage(img, 0, 0)
          const dat = ctx.getImageData(0, 0, c.width, c.height)
          for (let i = 0; i < dat.data.length; i += 4) {
            const r = dat.data[i + 0]
            const g = dat.data[i + 1]
            const b = dat.data[i + 2]
            const rgb = `${r},${g},${b}`

            const replacer = this.opts.replace.filter((x) => x.from === rgb)[0]
              ?.to
            if (replacer) {
              const col = replacer.split(',')
              dat.data[i + 0] = col[0]
              dat.data[i + 1] = col[1]
              dat.data[i + 2] = col[2]
            }
          }

          ctx.putImageData(dat, 0, 0)
          this.path = c.toDataURL()
        }

        this.working = false
      }
      img.onerror = () => {
        this.working = false
        throw new Error(`could not load ${path}`)
      }
      img.src = path
    }
  }
}
