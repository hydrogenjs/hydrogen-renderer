# Hydrogen Renderer

The internal templating engine of [HydrogenJS](https://hydrogenjs.org) now available as a standalone package ❤️

## Installation

### NPM

```shell
npm install --save hydrogen-renderer
```

### CDN

```
<script src="https://unpkg.com/hydrogen-renderer@0.0.2/lib/index.min.js">
```

## Usage

```javascript
import { render } from 'hydrogen-renderer'

render({
  template({ data }) {
    return `
      <p>${data.name}</p>
    `
  },
  data() {
    return {
      name: 'Hydrogen'
    }  
  }
}).then((output) => {
  console.log(output) // <p>Hydrogen</p>
})
```