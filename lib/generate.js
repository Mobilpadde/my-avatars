export default class Generator {
  #layers = new Array()
  #c = null
  #ctx = null

  constructor(width, height, parent) {
    this.#c = document.createElement('canvas')
    this.#ctx = this.#c.getContext('2d')

    this.#c.width = width
    this.#c.height = height

    parent.appendChild(this.#c)
  }

  addLayer(layer) {
    if (this.#layers[layer.getIdx()]) {
      const l = this.#layers[layer.getIdx()]
      throw new Error(
        `a layer at ${layer.getIdx()} (${l.getName()}) already exists, cannot put layer "${layer.getName()}" at this position`,
      )
    }

    this.#layers[layer.getIdx()] = layer
  }

  draw() {
    ;(async () => {
      const items = this.#layers.map((l) => l.roll()).filter((x) => !!x)
      while (items.filter((x) => x.working).length > 0) {
        await new Promise((resolve) => setTimeout(resolve, 500))
      }

      const promises = items.map(
        (item) =>
          new Promise(async (res, rej) => {
            const img = new Image()
            img.onload = () => res({ img, ...item })
            img.onerror = (e) => rej(e)
            img.src = item.path
          }),
      )

      try {
        const imgs = await Promise.all(promises)

        imgs.forEach((item) =>
          this.#ctx.drawImage(
            item.img,
            item.opts?.x > 0
              ? item.opts.x
              : (this.#c.width - item.img.width) / 2,
            item.opts?.y > 0
              ? item.opts.y
              : (this.#c.height - item.img.height) / 2,
          ),
        )
      } catch (e) {
        throw e
      }
    })()
  }
}
