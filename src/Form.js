import React, { Component } from 'react';
import axios from 'axios';
import Profile from './Profile_Data';
  class BasicForm extends Component {      
          constructor( props ) {
            super( props );
            this.state = {
              profile: Profile,
              firstName: '',
              lastName: '',
              addressLine1: '',
              addressLine2: '',
              addressCity: '',
              addressState: '',
              addressZip: '',
              phone: '',
              email: '',
              relationship: ''
            };
          }
      
          submitHandler(){
            axios.post('Where we will post the thing', {
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              addressLine1: this.state.addressLine1,
              addressLine2: this.state.addressLine2,
              addressCity: this.state.addressCity,
              addressState: this.state.addressState,
              addressZip: this.state.addressZip,
              phone: this.state.phone,
              email: this.state.email,
              relationship: this.state.relationship,
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          }


    render() {
      const caregiver = this.state.profile.caregiver;
      return (
        <div><br/>
              <form id="form2">
              <br/><h2>Caregiver Information - {caregiver.firstName}</h2><br/>
                <label htmlFor="firstName"></label>
                <input className = "text" field="firstName" id="firstName" value ={caregiver.firstName} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.firstName = e; this.setState({profile: tempProfile})}} placeholder = "First Name"/>
                <label htmlFor="lastName"></label>
                <input className = "text" field="lastName" id="lastName" value={caregiver.lastName} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.lastName = e; this.setState({profile: tempProfile})}}  placeholder = "Last Name"/><br/>
                <label htmlFor="addressLine1"></label>
                <input className = "text" field="line1" id="line1" value={caregiver.addresses[0].line1} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.addresses[0].line1 = e; this.setState({profile: tempProfile})}}  placeholder="Address Line 1"/>
                <label htmlFor="addressLine2" ></label>
                <input className = "text" field="line2" id="line2" value={caregiver.addresses[0].line2} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.addresses[0].line2 = e; this.setState({profile: tempProfile})}} placeholder="Address Line 2"/>
                <label htmlFor="addressCity" ></label>
                <input className = "text" field="city" id="city" value={caregiver.addresses[0].city} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.addresses[0].city = e; this.setState({profile: tempProfile})}} placeholder="City"/><br/>
                <label htmlFor="addressState" ></label>
                <input className = "text" field="state" id="state" value={caregiver.addresses[0].state} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.addresses[0].state = e; this.setState({profile: tempProfile})}} placeholder="State"/>
                <label htmlFor="addressZip" ></label>
                <input className = "text" field="zip" id="zip" value={caregiver.addresses[0].zip} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.addresses[0].zip = e; this.setState({profile: tempProfile})}} placeholder="Zip Code"/><br/>
                <label htmlFor="phone"></label>
                <input className = "text" field="phone" id="phone" value={caregiver.phone.number} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.phone = e; this.setState({profile: tempProfile})}} placeholder="Phone Number"/>
                <label htmlFor="email"></label>
                <input className = "text" field="email" id="email" value={caregiver.email} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.email = e; this.setState({profile: tempProfile})}} placeholder="Email"/><br/><br/>
                <label htmlFor="relationship" className="d-block">Relationship to Child</label>

                <label>
                <select value={caregiver.relationship} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.relationship = e.target.value; this.setState({profile: tempProfile})}}>
                  <option value="parent">Parent</option>
                  <option value="legalGuardian">Legal Guardian</option>
                  <option value="family">Family</option>
                  <option value="other">Other</option>
                </select>
                </label>
                <br/>
                <button type="submit" onClick={this.submitHandler} className="mb-4 btn btn-primary">Save</button><br/><br/>
              </form>
             
          
          
        </div>

      );
    }
  }

  export default BasicForm;