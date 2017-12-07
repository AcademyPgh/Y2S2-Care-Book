import React, { Component } from 'react';
import './style/App.css';
import Form from './components/Form';
import Header from './components/Header';
import ChildForm from './components/Form_Child';
import DoctorForm from './components/Doctors';
import Medication from './components/Medication';
import Pharmacy from './components/Pharmacy';
import Profile from './components/Profile_Data';

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            profile: Profile,
          };
        this.setPharmacy = this.setPharmacy.bind(this);
    }

    setPharmacy(pharmacy, id)
    {
        var tempProfile = this.state.profile;
        tempProfile.pharmacy[id] = pharmacy;
        this.setState({profile: tempProfile});
    }

    render() {
        const pharmacy= this.state.profile.pharmacy[0];
        return (
            <div className = "App">
                <Header/>
                <Form/>
                <ChildForm/>
                <DoctorForm/>
                <Pharmacy pharmacy={pharmacy} setPharmacy={(value) => {this.setPharmacy(value, 0)}} />
                <Medication/>
                {console.log(this.state)}
            </div>
        );
    }
}
export default App;
