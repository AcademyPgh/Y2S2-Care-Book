import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Page from './Page';
import Form from './Form';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div class = "App">
      <Header/>
      <Form/>
      <Page/>
      </div>
    );
  }
}

export default App;
