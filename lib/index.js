import React  from 'react';
import './assets/css/Modal.css';

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
            <section className='Modal'>
                <div className={this.state.visible ? 'Modal__mask' : 'Modal__mask Modal__hidden'} />
                <div className={this.state.visible ? 'Modal__panel' : 'Modal__panel Modal__invisible'}>
                    {this.props.children}
                </div>
            </section>
        );
    }
}
