import React, { Component } from 'react';
import './App.css';
import Page from './Page';
import Form from './Form';
import Header from './Header';
import ChildForm from './Form_Child';

class App extends Component {
  render() {
    return (
      <div className = "App">
      <Header/>
      <Form/>
      <ChildForm/>
      <Page/>
      </div>
    );
  }
}

export default App;
