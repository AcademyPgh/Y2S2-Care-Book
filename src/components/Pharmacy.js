import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input';
import PharmacyInput from './PharmacyInput';

class Pharmacy extends Component {      
    constructor( props ) {
      super( props );
    }

render() {
    const pharmacy= this.props.pharmacy;
    return (
            <form id="form2">
            <p className = "sectionTitle2">
              <input className = "openItInput" id="togglePharm" type="checkbox"></input><label className = "openIt" for="togglePharm"></label>
              <h2>Pharmacies</h2>
                <div id="expandPharm"><br/>
                <PharmacyInput pharmacy={pharmacy} setPharmacy={this.props.setPharmacy} />
                </div>
            </p>
            </form>  
    )
}
}
export default Pharmacy;