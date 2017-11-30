import React from 'react';
import TestRenderer from 'react-test-renderer';
import assert from 'power-assert';
import Modal from '../src/index';

describe('Modal', () => {
    it('the default unit is px.', () => {
        const renderer = TestRenderer.create(
            <Modal visible={true} width="600" height="500">
                <p>this is a modal.</p>
            </Modal>
        );
        const style = renderer.toJSON().children[0].children[0].props.style;
        assert(
          style.width === "600px" &&
          style.height === "500px"
        );
    });
});

