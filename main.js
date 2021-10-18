import { Generator, Layer, Item } from './lib'
import './style.css'

const faceItems = [
  new Item('./images/face1.png'),
  new Item('./images/face2.png'),
]

const eyeItems = [
  new Item('./images/eyes1.png', {
    y: 50,
    check: true,
    replace: [{ from: '128,128,128', to: '155,255,155' }],
  }),
  new Item('./images/eyes1.png', {
    y: 50,
    check: true,
    replace: [{ from: '128,128,128', to: '255,255,155' }],
  }),
  new Item('./images/eyes2.png', {
    y: 50,
  }),
]

const noseItems = [
  new Item('./images/nose1.png', { y: 200 }),
  new Item('./images/nose2.png', { y: 200 }),
]

const mouthItems = [
  new Item('./images/mouth1.png', { y: 270 }),
  new Item('./images/mouth2.png', { y: 270 }),
]

const faceLayer = new Layer('faces', 0)
const eyeLayer = new Layer('eyes', 1)
const noseLayer = new Layer('noses', 2)
const mouthLayer = new Layer('mouths', 3)

try {
  faceItems.forEach((x) => faceLayer.addItem(x))
  eyeItems.forEach((x) => eyeLayer.addItem(x))
  noseItems.forEach((x) => noseLayer.addItem(x))
  mouthItems.forEach((x) => mouthLayer.addItem(x))
} catch (e) {
  console.warn(e)
}

const app = document.getElementById('app')
const g = new Generator(400, 400, app)
g.addLayer(faceLayer)
g.addLayer(eyeLayer)
g.addLayer(noseLayer)
g.addLayer(mouthLayer)

g.draw()
