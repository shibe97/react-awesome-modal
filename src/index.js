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

    render() {
        return (
            <div>
                <div style={this.state.visible ? style.mask : style.maskHidden} />
                <div style={this.state.visible ? style.panel : style.panelHidden}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
