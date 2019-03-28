import React, { Component } from 'react';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from 'react-bootstrap';
import './style.css';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false,
            isPaneOpenLeft: false
        };
    }
 
    componentDidMount() {
        Modal.setAppElement(this.el);
    }
 
    render() {
        return <div ref={ref => this.el = ref}>
            <div style={{ marginTop: '2px' }}>
                <IconButton color="inherit" aria-label="Open drawer" onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
                    <MenuIcon />
                </IconButton>
            </div>
            <div>
                <SlidingPane
                    closeIcon={<div className="slider-title">Choose your Feature</div>}
                    isOpen={ this.state.isPaneOpenLeft }
                    from='left'
                    width='300px'
                    onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
                    <div><a target="_self" href="http://www.scorelab.org"><Button variant="primary" size="lg" block>About-Us</Button></a></div><br />
                    <div><a target="_self" href="http://www.scorelab.org/publications/"><Button variant="primary" size="lg" block>Publications</Button></a></div><br />
                    <div><a target="_self" href="http://www.scorelab.org/score-team/"><Button variant="primary" size="lg" block>Our Team</Button></a></div><br />
                    <div><a target="_self" href="http://www.scorelab.org/projects/"><Button variant="primary" size="lg" block>Other Projects</Button></a></div><br />
                    <div><a target="_self" href="https://github.com/rajshah9914/LabelLab-Web--Prototype"><Button variant="primary" size="lg" block>Contribute</Button></a></div>
                </SlidingPane>
            </div>
        </div>;
    }
}

export default Slider;