import React from 'react';
import style from './style.js';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        let effect = props.effect || 'fadeInDown';
        this.setSize(effect);
        this.state = {
            visible : props.visible,
            style : style[effect]
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible : nextProps.visible
        });
    }

    toggle() {
        this.setState({
            visible : !this.state.visible
        });
    }

    setSize(effect) {
        if(this.props.width) {
            style[effect].panel.width = this.props.width + 'px';
            style[effect].panel.marginLeft = '-' + this.props.width / 2 + 'px';
        }
        if(this.props.height) {
            style[effect].panel.height = this.props.height + 'px';
            style[effect].panel.marginTop = '-' + this.props.height / 2 + 'px';
        }
    }

    render() {
        return (
            <div>
                <div style={this.state.visible ? this.state.style.mask : this.state.style.maskHidden} />
                <div style={this.state.visible ? this.state.style.panel : this.state.style.panelHidden}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
