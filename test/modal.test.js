var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var jsdom = require('jsdom');
var assert = require('power-assert');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.parentWindow;
global.navigator = window.navigator = {};
navigator.userAgent = "NodeJS JsDom";
navigator.appVersion = '';

var Modal = require('../lib/index.js');

describe('Modal', function(){
    before('hoge', function(){
      this.renderedComponent = TestUtils.renderIntoDocument(
        <Modal visible={true}>
          <p>this is a modal.</p>
        </Modal>
      );
      this.content = TestUtils.scryRenderedDOMComponentsWithTag(
        this.renderedComponent,
        'p'
      )[0];
    });
    it('is a React component.', function() {
        assert(TestUtils.isCompositeComponent(this.renderedComponent));
    });
    it('has a corrent content.', function() {
        assert(this.content.props.children === "this is a modal.");
    });
});
