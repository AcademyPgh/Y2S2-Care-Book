import React, { Component } from 'react';
import './App.css';
import Page from './Page';
import Form from './Form';
import Header from './Header';
import ChildForm from './Form_Child';
import DoctorForm from './Doctors';
import Medication from './Medication';
import Pharmacy from './Pharmacy';

class App extends Component {
  render() {
    return (
      <div className = "App">
      <Header/>
      <Form/>
      <ChildForm/>
      <DoctorForm/>
      <Pharmacy/>
      <Medication/>
      </div>
    );
  }
}

export default App;
