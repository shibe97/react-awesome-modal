# React-AwesomeModal
[![Build Status](https://travis-ci.org/shibe97/react-awesome-modal.svg?branch=master)](https://travis-ci.org/shibe97/react-awesome-modal)

This is a Customizable Modal.

## Usage
```
import React from 'react';
import Modal from 'react-awesome-modal';

export default class Examples extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                <h1>React-Modal Examples</h1>
                <input type="button" value="OPEN" onClick={this.openModal.bind(this)} />
                <Modal visible={this.state.visible} closeFn={this.closeModal.bind(this)} width="400" height="300" effect="fadeInUp">
                    <div>
                        <h1>Title</h1>
                        <p>Some Contenast</p>
                        <a href="javascript:void(0);" onClick={this.closeModal.bind(this)}>閉じる</a>
                    </div>
                </Modal>
            </section>
        );
    }
}
```

## Props
- visible
    - Boolean / required
    - to show or hide the dialog
- closeFn
    - Function / required
    - is called when the visible turn to true
- effect
    - String / option
    - to set how to pop-up
    - e.g. fadeInUp
- width [option]
    - Number / option
    - to set modal width (px)
    - e.g. 500
- height [option]
    - to set modal height (px)
    - e.g. 400

## Effect
- fadeInDown [default]
- fadeInUp

## How To Develop
### Setup
```
$ npm install
```

### Build
```
$ npm run build
```

### Watch and auto build
```
$ npm run watch
```

### Test
```
$ npm test
```

### Example
```
$ gulp webpack
$ open examples/index.html
```

## License
MIT
