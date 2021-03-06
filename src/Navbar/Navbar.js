import React, { Component } from 'react';
import "./navbar.css"

export default class NavBar extends Component {
    state = {
        shadowScroll: '0 0 0',
        message: "Welcome"
    }

    listenScrollEvent = e => {
        if (window.scrollY > 120) {
            this.setState({
                height: '80px',
                message: "Luca Cesarano"
            })
        } else {
            this.setState({
                height: '120px',
                message: "Welcome"
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <div style={{ height: this.state.height}} className='NavBar'>
                <div className='logo'>{ this.state.message }</div>
                <div className='item'><a href="https://lucacesarano.medium.com" class="link">Folio</a></div>
                <div className='item'><a href="https://lucacesarano.medium.com" class="link">About</a></div>
                <div className='blog'><a href="https://lucacesarano.medium.com" class="link">Blog</a></div>
                <button className='buttonItem'>Contact me</button>
            </div>
        );
    }
}