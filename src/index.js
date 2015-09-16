import React from 'react';
import style from './style.js';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : props.visible
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({visible : nextProps.visible});
    }

    toggle() {
        this.setState({
            visible : !this.state.visible
        });
    }

    getPanelStyle() {
        if(this.props.width) {
            style.panel.width = this.props.width + "px";
            style.panel.marginLeft = "-" + this.props.width / 2 + "px";
        }
        if(this.props.height) {
            style.panel.height = this.props.height + "px";
            style.panel.marginTop = "-" + this.props.height / 2 + "px";
        }
        return this.state.visible ? style.panel : style.panelHidden;
    }

    render() {
        return (
            <div>
                <div style={this.state.visible ? style.mask : style.maskHidden} />
                <div style={this.getPanelStyle()}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
