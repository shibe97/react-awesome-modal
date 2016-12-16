import React from 'react';
import TestUtils from 'react-addons-test-utils';
import assert from 'power-assert';
import Modal from '../src/index';
const renderer = TestUtils.createRenderer();

describe('Modal', () => {
    it('the default unit is px.', () => {
        renderer.render(
            <Modal visible={true} width="600" height="500">
                <p>this is a modal.</p>
            </Modal>
        );
        const output = renderer.getRenderOutput();
        console.log(output.props.children.props.children[0]);
        assert(
          output.props.children.props.children[0].props.style.width === "600px" &&
          output.props.children.props.children[0].props.style.height === "500px"
        );
    });
});

