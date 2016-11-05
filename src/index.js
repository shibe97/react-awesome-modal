import React, { Component } from 'react';
import style from './style.js';

class Modal extends Component {
    constructor(props) {
        super(props);

        const backgroundStyle = {};

        let effect = props.effect || 'fadeInDown';
        this.setSize(props, effect, backgroundStyle);
        this.state = {
            visible : props.visible,
            style : style[effect],
            backgroundStyle,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible : nextProps.visible
        });
        this.setSize(nextProps.effect);
    }

    setSize(props, effect, backgroundStyle) {
        if(props) {
            if (props.width) {
                style[effect].panel.width = props.width + 'px';
                style[effect].panel.marginLeft = '-' + props.width / 2 + 'px';
            }
            if (props.height) {
                style[effect].panel.height = props.height + 'px';
                style[effect].panel.marginTop = '-' + props.height / 2 + 'px';
            }
            if(props.screenWidth && props.screenHeight){
                backgroundStyle.width = props.screenWidth;
                backgroundStyle.height = props.screenHeight;
                backgroundStyle.position = 'fixed';
                backgroundStyle.top = 0;
                backgroundStyle.left = 0;
            }
            if(props.calculatePosition){
                if(props.screenWidth){
                    style[effect].panel.left = props.screenWidth / 2;
                }
                if(props.screenHeight){
                    style[effect].panel.top = props.screenHeight / 2;
                }
            }
        }
    }

    render() {
        return (
            <div>
                <div onClick={this.props.onClickAway ? this.props.onClickAway : false} style={this.state.visible ? this.state.style.mask : this.state.style.maskHidden} />
                <div style={this.state.visible ? this.state.style.panel : this.state.style.panelHidden}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    effect: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    screenWidth: React.PropTypes.number,
    screenHeight: React.PropTypes.number,
    calculatePosition: React.PropTypes.bool,
};

Modal.defaultProps = {
    effect: "fadeDown",
    calculatePosition: false,
};

export default Modal;