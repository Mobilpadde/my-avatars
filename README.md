# [my-avatars](https://www.npmjs.com/package/my-avatars)

Generate unique avatars of off your own image files!

## Usage

### Installing

First install `my-avatars` by running `npm i my-avatars`

### Import

Now you'll need to import `{ Generator, Layer, Item }` from `my-avatars` in your `js`-file.

### Building

To build the generator, you'll have to have some images at hand. These should be made into `Item`'s, by `new Item('./images/face.png')`.

Next, we'll need a `Layer`: `new Layer('faces', 0)`, this layer should have a name - for your own convenience - and an id, which can correspond to the z-index in css.

> NB: No two layers can have the same index.

Next-up, we'll need to pass in all of the `Item`'s, like so: `faceLayer.addItem(item)`.

### Generator

Now for the magical part, the `Generator`. Start by creating a new `Generator`, by `new Generator(400, 400, app)`. Whereas the first `400` is the width of the avatar, next is the height and last argument is the parent element of, to which the avatar-canvas should be injected.

If all of this doesn't make sense. Check out the [example](#example)

## Example

Check [main.js](./main.js), to run the example use `npm run dev`. Or read this [article](https://madco.me/generate-8-unique-avatar-faces-from-40-lines-of-easy-code)
