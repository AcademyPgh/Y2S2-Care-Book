import React, { Component } from 'react';
import logo from '../logo.png';

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title"> </h1>
                <p className="App-intro"/>
            </div>
        );
    }
}
export default Header;