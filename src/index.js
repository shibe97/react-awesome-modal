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
      if(this.props && this.props.styles){
        Object.keys(this.props.styles).forEach((key)=>{
          style[effect].panel[key] = this.props.styles[key];
        });
      }
    }

    setSize(effect) {
        if(this.props && this.props.width) {
          if(this.props.width.charAt(this.props.width.length-1) === '%'){
            //Use Percentage
            const width = this.props.width.slice(0,-1);
            style[effect].panel.width = width + '%';
            style[effect].panel.marginLeft = '-' + width / 2 + '%';
          }else if(this.props.width.charAt(this.props.width.length-1) === 'x'){
            //Use Pixels
            const width = this.props.width.slice(0,-2);
            style[effect].panel.width = width + 'px';
            style[effect].panel.marginLeft = '-' + width / 2 + 'px';
          }else{
            //Default
            style[effect].panel.width = this.props.width + 'px';
            style[effect].panel.marginLeft = '-' + this.props.width / 2 + 'px';
          }
        }
        if(this.props && this.props.height) {
          if(this.props.height.charAt(this.props.height.length-1) === '%'){
            //Use Percentage
            const height = this.props.height.slice(0,-1);
            style[effect].panel.height = height + 'vh';
            style[effect].panel.marginTop = '-' + height / 2 + 'vh';
          }else if(this.props.height.charAt(this.props.height.length-1) === 'x'){
            //Use Pixels
            const height = this.props.height.slice(0,-2);
            style[effect].panel.height = height + 'px';
            style[effect].panel.marginTop = '-' + height / 2 + 'px';
          }else{
            //Default
            style[effect].panel.height = this.props.height + 'px';
            style[effect].panel.marginTop = '-' + this.props.height / 2 + 'px';
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
