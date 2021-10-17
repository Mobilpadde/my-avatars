export default class Layer {
  #idx = -1
  #name = ''
  #items = new Array()

  constructor(name, idx) {
    this.#idx = idx
    this.#name = name
  }

  getIdx() {
    return this.#idx
  }

  getName() {
    return this.#name
  }

  addItem(item) {
    this.#items.push(item)
  }

  roll() {
    const idx = ~~(Math.random() * this.#items.length)
    return this.#items[idx]
  }
}
