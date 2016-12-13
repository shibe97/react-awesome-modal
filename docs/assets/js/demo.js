import React, { Component } from 'react';
import Modal from '../../../src/index.js';

export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeInDown : false,
            fadeInUp : false,
            fadeInLeft : false,
            fadeInRight : false,
        }
    }

    open(effect) {
      this.setState({
        [effect] : true
      });
    }

    close(effect) {
      this.setState({
        [effect] : false
      });
    }

    render() {
        return (
            <div>
                <ul>
                    <li><a href="javascript:void(0);" onClick={() => this.open('fadeInDown')}>fadeInDown</a></li>
                    <li><a href="javascript:void(0);" onClick={() => this.open('fadeInUp')}>fadeInUp</a></li>
                    <li><a href="javascript:void(0);" onClick={() => this.open('fadeInLeft')}>fadeInLeft</a></li>
                    <li><a href="javascript:void(0);" onClick={() => this.open('fadeInRight')}>fadeInRight</a></li>
                </ul>
                <Modal visible={this.state.fadeInDown} effect="fadeInDown" onClickAway={() => this.close('fadeInDown')}>
                    <div className="Modal">
                        <h1 className="Modal__title">FadeInDown</h1>
                        <a href="javascript:void(0);" onClick={() => this.close('fadeInDown')}>Close</a>
                    </div>
                </Modal>
                <Modal visible={this.state.fadeInUp} effect="fadeInUp" onClickAway={() => this.close('fadeInUp')}>
                    <div className="Modal">
                        <h1 className="Modal__title">FadeInUp</h1>
                        <a href="javascript:void(0);" onClick={() => this.close('fadeInUp')}>Close</a>
                    </div>
                </Modal>
                <Modal visible={this.state.fadeInLeft} effect="fadeInLeft" onClickAway={() => this.close('fadeInLeft')}>
                    <div className="Modal">
                        <h1 className="Modal__title">FadeInLeft</h1>
                        <a href="javascript:void(0);" onClick={() => this.close('fadeInLeft')}>Close</a>
                    </div>
                </Modal>
                <Modal visible={this.state.fadeInRight} effect="fadeInRight" onClickAway={() => this.close('fadeInRight')}>
                    <div className="Modal">
                        <h1 className="Modal__title">FadeInRight</h1>
                        <a href="javascript:void(0);" onClick={() => this.close('fadeInRight')}>Close</a>
                    </div>
                </Modal>
            </div>
        );
    }
}
