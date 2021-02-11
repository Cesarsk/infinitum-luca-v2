import React, { Component } from 'react';
import "./navbar.css"
import { Link } from 'react-scroll'

export default class NavBar extends Component {
    state = {
        shadowScroll: '0 0 0',
    }

    listenScrollEvent = e => {
        if (window.scrollY > 120) {
            this.setState({
                height: '80px'
            })
        } else {
            this.setState({
                height: '120px'
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <div style={{ height: this.state.height }} className='NavBar'>
                <div className='logo'>LOGO</div>
                <div className='item'>Folio</div>
                <div className='item'>About</div>
                <div className='item'>Blog</div>
                <button className='buttonItem'>Contact me</button>
            </div>
        );
    }
}