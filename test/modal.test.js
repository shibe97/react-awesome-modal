import React from 'react';
import TestUtils from 'react-addons-test-utils';
import assert from 'power-assert';
import Modal from '../src/index';
const renderer = TestUtils.createRenderer();

describe('Modal', () => {
    it('can apply input width and height', () => {
        renderer.render(
            <Modal visible={true} width="600" height="500">
                <p>this is a modal.</p>
            </Modal>
        );
        const output = renderer.getRenderOutput();
        assert(output.props.children[1].props.style.width === "600px" && output.props.children[1].props.style.height === "500px");
    });
});

