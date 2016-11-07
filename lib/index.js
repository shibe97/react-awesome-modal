'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style.js');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
    _inherits(Modal, _Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

        var effect = props.effect || 'fadeInDown';
        _this.setSize(effect);
        _this.state = {
            visible: props.visible,
            style: _style2.default[effect]
        };
        return _this;
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
        key: 'setSize',
        value: function setSize(effect) {
            if (this.props && this.props.width) {
                _style2.default[effect].panel.width = this.props.width + 'px';
                _style2.default[effect].panel.marginLeft = '-' + this.props.width / 2 + 'px';
            }
            if (this.props && this.props.height) {
                _style2.default[effect].panel.height = this.props.height + 'px';
                _style2.default[effect].panel.marginTop = '-' + this.props.height / 2 + 'px';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('div', { onClick: this.props.onClickAway ? this.props.onClickAway : false, style: this.state.visible ? this.state.style.mask : this.state.style.maskHidden }),
                _react2.default.createElement(
                    'div',
                    { style: this.state.visible ? this.state.style.panel : this.state.style.panelHidden },
                    this.props.children
                )
            );
        }
    }]);

    return Modal;
}(_react.Component);

exports.default = Modal;