import React, { Component } from 'react';
import './style/App.css';
import Form from './components/Form';
import Header from './components/Header';
import ChildForm from './components/Form_Child';
import DoctorForm from './components/Doctors';
import Medication from './components/Medication';
import Pharmacy from './components/Pharmacy';

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
