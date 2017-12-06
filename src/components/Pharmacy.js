import React, { Component } from 'react';
import axios from 'axios';
import Profile from './Profile_Data';
import Input from './Input';
import PharmacyInput from './PharmacyInput';

class Pharmacy extends Component {      
    constructor( props ) {
      super( props );
      this.state = {
        profile: Profile,
        // pharmacy:[{
        //     name: "",
        //     addresses: [{
        //         line1: "", 
        //         line2: "", 
        //         city: "", 
        //         state: "", 
        //         zip: ""
        //     }],
        //     phone: "",
        // }]
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
            <form id="form2">
            <p className = "sectionTitle2">
              <input className = "openItInput" id="togglePharm" type="checkbox"></input><label className = "openIt" for="togglePharm"></label>
              <h2>Pharmacies</h2>
                <div id="expandPharm"><br/>
                <PharmacyInput pharmacy={pharmacy} setPharmacy={(value) => {this.setPharmacy(value, 0)}} />
                </div>
            </p>
            </form>  
    )
}
}
export default Pharmacy;