import React, { Component } from 'react';
import Modal from '../lib/index.js';

export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeInDown : false,
            fadeInUp : false,
            fadeInLeft : false,
            fadeInRight : false,
            effect : 'fadeInDown'
        }
    }

    openFadeInDown(e) {
        this.setState({
            fadeInDown : true,
            effect : e.target.attributes['data-effect'].value
        });
    }

    closeFadeInDown() {
        this.setState({
            fadeInDown : false
        });
    }

    openFadeInUp(e) {
        this.setState({
            fadeInUp : true,
            effect : e.target.attributes['data-effect'].value
        });
    }

    closeFadeInUp() {
        this.setState({
            fadeInUp : false
        });
    }

    openFadeInLeft(e) {
        this.setState({
            fadeInLeft : true,
            effect : e.target.attributes['data-effect'].value
        });
    }

    closeFadeInLeft() {
        this.setState({
            fadeInLeft : false
        });
    }

    openFadeInRight(e) {
        this.setState({
            fadeInRight : true,
            effect : e.target.attributes['data-effect'].value
        });
    }

    closeFadeInRight() {
        this.setState({
            fadeInRight : false
        });
    }

    render() {
        return (
            <div>
                <ul>
                    <li><a href="javascript:void(0);" onClick={this.openFadeInDown.bind(this)} data-effect="fadeInDown">fadeInDown</a></li>
                    <li><a href="javascript:void(0);" onClick={this.openFadeInUp.bind(this)} data-effect="fadeInUp">fadeInUp</a></li>
                    <li><a href="javascript:void(0);" onClick={this.openFadeInLeft.bind(this)} data-effect="fadeInLeft">fadeInLeft</a></li>
                    <li><a href="javascript:void(0);" onClick={this.openFadeInRight.bind(this)} data-effect="fadeInRight">fadeInRight</a></li>
                </ul>
                <Modal visible={this.state.fadeInDown} width="400" height="300" effect="fadeInDown">
                    <div className="Modal">
                        <h1 className="Modal__title">FadeInDown</h1>
                        <a href="javascript:void(0);" onClick={this.closeFadeInDown.bind(this)}>Close</a>
                    </div>
                </Modal>
                <Modal visible={this.state.fadeInUp} width="500" height="400" effect="fadeInUp">
                    <div className="Modal">
                        <h1 className="Modal__title">FadeInUp</h1>
                        <a href="javascript:void(0);" onClick={this.closeFadeInUp.bind(this)}>Close</a>
                    </div>
                </Modal>
                <Modal visible={this.state.fadeInLeft} width="600" height="500" effect="fadeInLeft">
                    <div className="Modal">
                        <h1 className="Modal__title">FadeInLeft</h1>
                        <a href="javascript:void(0);" onClick={this.closeFadeInLeft.bind(this)}>Close</a>
                    </div>
                </Modal>
                <Modal visible={this.state.fadeInRight} width="700" height="600" effect="fadeInRight">
                    <div className="Modal">
                        <h1 className="Modal__title">FadeInRight</h1>
                        <a href="javascript:void(0);" onClick={this.closeFadeInRight.bind(this)}>Close</a>
                    </div>
                </Modal>
            </div>
        );
    }
}
