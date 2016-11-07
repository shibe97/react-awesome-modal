'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fadeInDown = require('./effect/fadeInDown');

var _fadeInDown2 = _interopRequireDefault(_fadeInDown);

var _fadeInUp = require('./effect/fadeInUp');

var _fadeInUp2 = _interopRequireDefault(_fadeInUp);

var _fadeInLeft = require('./effect/fadeInLeft');

var _fadeInLeft2 = _interopRequireDefault(_fadeInLeft);

var _fadeInRight = require('./effect/fadeInRight');

var _fadeInRight2 = _interopRequireDefault(_fadeInRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    fadeInDown: _fadeInDown2.default,
    fadeInUp: _fadeInUp2.default,
    fadeInLeft: _fadeInLeft2.default,
    fadeInRight: _fadeInRight2.default
};