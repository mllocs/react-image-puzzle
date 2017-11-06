# React Component Example

A minimal setup to develop and publish a React Component.

## Steps

1. Clone this repo:

```bash
git clone git@github.com:mllocs/react-component-example.git
```

2. Edit the `package.json` (update the component name, author, ...).

3. Install the npm packages, link the library and run the build watch if you want to work on the component while testing it from another project:

```bash
npm install
npm link
npm run build:watch
```

4. Use the component from another project. From the root of the other project run:

```bash
npm link react-component-example # Update accordingly
```

and use it as you would use any other component:

```js
import Example from 'react-component-example'; // Update accordingly
```
