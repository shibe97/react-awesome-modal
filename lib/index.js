'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleJs = require('./style.js');

var _styleJs2 = _interopRequireDefault(_styleJs);

var Modal = (function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        _get(Object.getPrototypeOf(Modal.prototype), 'constructor', this).call(this, props);
        var effect = props.effect || 'fadeInDown';
        this.setSize(effect);
        this.state = {
            visible: props.visible,
            style: _styleJs2['default'][effect]
        };
    }

    _createClass(Modal, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                visible: nextProps.visible
            });
            this.setSize(nextProps.effect);
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            this.setState({
                visible: !this.state.visible
            });
        }
    }, {
        key: 'setSize',
        value: function setSize(effect) {
            if (this.props.width) {
                _styleJs2['default'][effect].panel.width = this.props.width + 'px';
                _styleJs2['default'][effect].panel.marginLeft = '-' + this.props.width / 2 + 'px';
            }
            if (this.props.height) {
                _styleJs2['default'][effect].panel.height = this.props.height + 'px';
                _styleJs2['default'][effect].panel.marginTop = '-' + this.props.height / 2 + 'px';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement('div', { style: this.state.visible ? this.state.style.mask : this.state.style.maskHidden }),
                _react2['default'].createElement(
                    'div',
                    { style: this.state.visible ? this.state.style.panel : this.state.style.panelHidden },
                    this.props.children
                )
            );
        }
    }]);

    return Modal;
})(_react2['default'].Component);

exports['default'] = Modal;
module.exports = exports['default'];