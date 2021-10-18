# [my-avatars](https://www.npmjs.com/package/my-avatars)

Generate unique avatars of off your own image files!

## Docs

- `Item`
  - `new Item(path, opts)`
    - `path` is the path to the image
    - `opts`
      - `x`: `Number` - x-coord to place the image
      - `y`: `Number` - y-coord to place the image
      - `check`: `Boolean` - check if the image can be found - required to `replace`-colors
      - `replace`: `Array` of `Object`'s - filled with colors to replace from and to
        - `from`: `String` - color to replace from, in the format of `r,g,b` - e.g. `128,128,128`
        - `to`: `String` - color to replace to, in the format of `r,g,b` - e.g. `128,128,128`
- `Layer`
  - `new Layer(name, idx)`
    - `name`: `String` - a friendly name to recognise
    - `idx`: `Number` - the z-index of the layer
- `Generator`
  - `new Generator(width, height, parentElm)`
    - `width`: `Number` - width of the avatar
    - `height`: `Number` - height of the avatar
    - `parentElm`: `Element` - element to place avatar within

## Usage

### Installing

First install `my-avatars` by running `npm i my-avatars`

### Import

Now you'll need to import `{ Generator, Layer, Item }` from `my-avatars` in your `js`-file.

### Building

To build the generator, you'll have to have some images at hand. These should be made into `Item`'s, by `new Item('./images/face.png')`.

Next, we'll need a `Layer`: `new Layer('faces', 0)`, this layer should have a name - for your own convenience - and an id, which can correspond to the z-index in css.

> NB: No two layers can't have the same index.

Next-up, we'll need to pass in all of the `Item`'s, like so: `faceLayer.addItem(item)`.

### Generator

Now for the magical part, the `Generator`. Start by creating a new `Generator`, by `new Generator(400, 400, app)`. Whereas the first `400` is the width of the avatar, next is the height and last argument is the parent element of, to which the avatar-canvas should be injected.

If all of this doesn't make sense. Check out the [example](#example)

## Example

Check [main.js](./main.js), to run the example use `npm run dev`. Or read this [article](https://madco.me/generate-16-unique-avatar-faces-from-40-lines-of-easy-code)
