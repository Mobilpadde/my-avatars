export default function Item(path, opts, check = true) {
  if (check) {
    const img = new Image()
    img.onerror = (e) => {
      throw new Error(`could not load ${path}`)
    }
    img.src = path
  }

  return {
    path,
    ...opts,
  }
}
