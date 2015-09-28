'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _effectFadeInDown = require('./effect/fadeInDown');

var _effectFadeInDown2 = _interopRequireDefault(_effectFadeInDown);

var _effectFadeInUp = require('./effect/fadeInUp');

var _effectFadeInUp2 = _interopRequireDefault(_effectFadeInUp);

var _effectFadeInLeft = require('./effect/fadeInLeft');

var _effectFadeInLeft2 = _interopRequireDefault(_effectFadeInLeft);

var _effectFadeInRight = require('./effect/fadeInRight');

var _effectFadeInRight2 = _interopRequireDefault(_effectFadeInRight);

exports['default'] = {
    fadeInDown: _effectFadeInDown2['default'],
    fadeInUp: _effectFadeInUp2['default'],
    fadeInLeft: _effectFadeInLeft2['default'],
    fadeInRight: _effectFadeInRight2['default']
};
module.exports = exports['default'];