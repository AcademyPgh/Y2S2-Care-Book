import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Header from './Header';
import ChildForm from './Form_Child';
import DoctorForm from './Doctors';
import Medication from './Medication';

class App extends Component {
  render() {
    return (
      <div className = "App">
      <Header/>
      <Form/>
      <ChildForm/>
      <DoctorForm/>
      <Medication/>
      </div>
    );
  }
}
export default App;
