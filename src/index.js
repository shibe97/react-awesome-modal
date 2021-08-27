import React, { Component } from 'react';
import style from './style.js';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        let effect = props.effect || 'fadeInDown';
        this.setSize(effect);
        this.state = {
            visible : props.visible,
            style : style[effect]
        }
    }

    componentWillReceiveProps({visible, effect = 'fadeInDown'}) {
        this.setState({
            visible : visible
        });
        this.setSize(effect);
        this.setStyles(effect);
    }

    setStyles(effect){
        if (this.props && this.props.styles) {
            style[effect].panel = {
                ...style[effect].panel,
                ...this.props.styles
            };
        }
    }

    setSize(effect) {
        if (this.props.width) {
            if (!isNaN(this.props.width)) {
                // numeric values in Pixel
                style[effect].panel.width = `${this.props.width}px`
            } else {
                style[effect].panel.width = this.props.width
            }
        }
        if (this.props.height) {
            if (!isNaN(this.props.height)) {
                // numeric values in Pixel
                style[effect].panel.height = `${this.props.height}px`
            }
            else {
                style[effect].panel.height = this.props.height
            }
        }
    }

    render() {
        return (
            <div>
                <div style={this.state.visible ? this.state.style.container : this.state.style.containerHidden}>
                    <div style={this.state.visible ? {...this.state.style.panel} : this.state.style.panelHidden}>
                        {this.props.children}
                    </div>
                    <div style={this.state.visible ? this.state.style.mask : this.state.style.maskHidden} onClick={this.props.onClickAway ? this.props.onClickAway : null} />
                </div>
            </div>
        );
    }
}
