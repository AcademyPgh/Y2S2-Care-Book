import React, { Component } from 'react';
import axios from 'axios';
import Profile from './Profile_Data';
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
    }
   
render() {
    const pharmacy= this.state.profile.pharmacy;
    return (
            <form id="form2">
            <p className = "sectionTitle2">
              <input className = "openItInput" id="togglePharm" type="checkbox"></input><label className = "openIt" for="togglePharm"></label>
              <h2>Pharmacies</h2>
                <div id="expandPharm"><br/>
            <label htmlFor="name"></label>
                <input className = "text" field="name" id="name" value={pharmacy[0].name} onChange={e => {var tempProfile = this.state.profile; tempProfile.pharmacy[0].name = e.target.value; this.setState({profile: tempProfile})}}  placeholder = "Pharmacy Name"/>
                <label htmlFor="addressLine1"></label>
                    <input className = "text" field="line1" id="line1" value={pharmacy[0].addresses[0].line1} onChange={e => {var tempProfile = this.state.profile; tempProfile.pharmacy[0].addresses[0].line1 = e.target.value; this.setState({profile: tempProfile})}}  placeholder="Address Line 1"/>
                <label htmlFor="addressLine2" ></label>
                    <input className = "text" field="line2" id="line2" value={pharmacy[0].addresses[0].line2} onChange={e => {var tempProfile = this.state.profile; tempProfile.pharmacy[0].addresses[0].line2 = e.target.value; this.setState({profile: tempProfile})}} placeholder="Address Line 2"/><br/>
                <label htmlFor="addressCity" ></label>
                    <input className = "text" field="city" id="city" value={pharmacy[0].addresses[0].city} onChange={e => {var tempProfile = this.state.profile; tempProfile.pharmacy[0].addresses[0].city = e.target.value; this.setState({profile: tempProfile})}} placeholder="City"/>
                <label htmlFor="addressState" ></label>
                    <input className = "text" field="state" id="state" value={pharmacy[0].addresses[0].state} onChange={e => {var tempProfile = this.state.profile; tempProfile.pharmacy[0].addresses[0].state = e.target.value; this.setState({profile: tempProfile})}} placeholder="State"/>
                <label htmlFor="addressZip" ></label>
                    <input className = "text" field="zip" id="zip" value={pharmacy[0].addresses[0].zip} onChange={e => {var tempProfile = this.state.profile; tempProfile.pharmacy[0].addresses[0].zip = e.target.value; this.setState({profile: tempProfile})}} placeholder="Zip Code"/><br/>
                    </div>
                    </p>
            </form>
        
    )
}
}
export default Pharmacy;