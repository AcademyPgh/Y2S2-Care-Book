import React, { Component } from 'react';
import axios from 'axios';
import Profile from './Profile_Data';
class Medication extends Component {      
    constructor( props ) {
      super( props );
      this.state = {
        profile: Profile,
        label: "", 
        dose: "",
        frequency: "",
        pharmacy:[{
            name: "",
            addresses: [{
                line1: "", 
                line2: "", 
                city: "", 
                state: "", 
                zip: ""
            }],
            phone: "",
        }]
      };
    }
   
render() {
    const medication= this.state.profile.medication;
    return (
      <div><br/>
            <form id="form2">
            <br/><h2>Medications</h2><br/>
            <label htmlFor="label"></label>
                <input className = "text" field="label" id="label" value ={medication[0].label} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[0].label = e; this.setState({profile: tempProfile})}} placeholder = "Name of Medication"/>
            <label htmlFor="dose"></label>
                <input className = "text" field="dose" id="dose" value={medication[0].dose} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[0].dose = e; this.setState({profile: tempProfile})}}  placeholder = "Dose"/>
            <label htmlFor="frequency"></label>
                <input className = "text" field="frequency" id="frequency" value ={medication[0].frequency} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[0].frequency = e; this.setState({profile: tempProfile})}} placeholder = "Frequency"/><br/>
            <label htmlFor="name"></label>
                <input className = "text" field="name" id="name" value={medication[0].pharmacy[0].name} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[0].pharmacy[0].name = e; this.setState({profile: tempProfile})}}  placeholder = "Pharmacy Name"/>
                <label htmlFor="addressLine1"></label>
                    <input className = "text" field="line1" id="line1" value={medication[0].pharmacy[0].addresses[0].line1} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[0].pharmacy[0].addresses[0].line1 = e; this.setState({profile: tempProfile})}}  placeholder="Address Line 1"/>
                <label htmlFor="addressLine2" ></label>
                    <input className = "text" field="line2" id="line2" value={medication[0].pharmacy[0].addresses[0].line2} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[0].pharmacy[0].addresses[0].line2 = e; this.setState({profile: tempProfile})}} placeholder="Address Line 2"/><br/>
                <label htmlFor="addressCity" ></label>
                    <input className = "text" field="city" id="city" value={medication[0].pharmacy[0].addresses[0].city} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[0].pharmacy[0].addresses[0].city = e; this.setState({profile: tempProfile})}} placeholder="City"/>
                <label htmlFor="addressState" ></label>
                    <input className = "text" field="state" id="state" value={medication[0].pharmacy[0].addresses[0].state} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[0].pharmacy[0].addresses[0].state = e; this.setState({profile: tempProfile})}} placeholder="State"/>
                <label htmlFor="addressZip" ></label>
                    <input className = "text" field="zip" id="zip" value={medication[0].pharmacy[0].addresses[0].zip} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[0].pharmacy[0].addresses[0].zip = e; this.setState({profile: tempProfile})}} placeholder="Zip Code"/><br/>
            </form>
        </div>
    )
}
}
export default Medication;