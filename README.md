# React-AwesomeModal
[![Build Status](https://travis-ci.org/shibe97/react-awesome-modal.svg?branch=master)](https://travis-ci.org/shibe97/react-awesome-modal)

This is a Customizable Modal.

## Usage
```
$ npm i -D react-awesome-modal
```

```
<Modal
  visible={bool}
  closeFn={function}
  width=600
  height=400
>
  <div>
    <h1>title</h1>
    <p>some content</p>
  </div>
</Modal>
```

- visible [required]
    - if visible is true, the modal shows up.
- closeFn [required]
    - must specify close function.
- width [option]
    - can set popup modal width except "px".
    - ex. 600
- height [option]
    - can set popup modal height except "px".
    - ex. 400

## Setup
```
$ npm install
```

## Build
```
$ npm run build
```

## Watch and auto build
```
$ npm run watch
```

## Test
```
$ npm test
```

## License
MIT
