var jsdom = require('jsdom');
var assert = require('power-assert');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.parentWindow;
global.navigator = window.navigator = {};
navigator.userAgent = "NodeJS JsDom";
navigator.appVersion = '';

var Modal = require('../lib/index.js');

describe('Modal', function(){
});
