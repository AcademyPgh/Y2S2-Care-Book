import React, { Component } from 'react';
import axios from 'axios';
import Profile from './Profile_Data';
  class BasicForm extends Component {      
          constructor( props ) {
            super( props );
            this.state = {
              profile: Profile,
              // firstName: '',
              // lastName: '',
              // addressLine1: '',
              // addressLine2: '',
              // addressCity: '',
              // addressState: '',
              // addressZip: '',
              // phones: [],
              // email: '',
              // relationship: ''
            };
            this.handleAddPhone = this.handleAddPhone.bind(this);
            this.handleDeletePhone = this.handleDeletePhone.bind(this);
          }

          handleAddPhone() { //this adds a phone number box
            var tempProfile = this.state.profile;
            tempProfile.caregiver.phones.push({label: '', number: ''}) ;
            this.setState({profile: tempProfile});
          }      

          handleDeletePhone(idx) { //this deletes a phone number box
            var hi = this.state.profile;
            if (idx > 0) {
              hi.caregiver.phones.splice(idx, 1);
              this.setState({profile: hi});
            }
            
          }   

          componentDidMount(){
            axios('http://localhost:3000/carebook')
            .then(function(response){
              this.setState(
                response.data
              )
            }
          ).catch(function (error) {
              console.log(`initial request error: ${JSON.stringify(error)}`);
            })
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
              console.log(`submit handler error: ${JSON.stringify(error)}`);
            });
          }

    render() {
      const caregiver = this.state.profile.caregiver;
      return (
        <div><br/>
              <form id="form2">
              <br/><h2>Caregiver Information</h2><br/>
                <label htmlFor="firstName"></label>
                <input className = "text" field="firstName" id="firstName" value ={caregiver.firstName} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.firstName = e.target.value; this.setState({profile: tempProfile})}} placeholder = "First Name"/>
                <label htmlFor="lastName"></label>
                <input className = "text" field="lastName" id="lastName" value={caregiver.lastName} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.lastName = e.target.value; this.setState({profile: tempProfile})}}  placeholder = "Last Name"/><br/>
                <label htmlFor="addressLine1"></label>
                <input className = "text" field="line1" id="line1" value={caregiver.addresses[0].line1} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.addresses[0].line1 = e.target.value; this.setState({profile: tempProfile})}}  placeholder="Address Line 1"/>
                <label htmlFor="addressLine2" ></label>
                <input className = "text" field="line2" id="line2" value={caregiver.addresses[0].line2} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.addresses[0].line2 = e.target.value; this.setState({profile: tempProfile})}} placeholder="Address Line 2"/>
                <label htmlFor="addressCity" ></label>
                <input className = "text" field="city" id="city" value={caregiver.addresses[0].city} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.addresses[0].city = e.target.value; this.setState({profile: tempProfile})}} placeholder="City"/><br/>
                <label htmlFor="addressState" ></label>
                <input className = "text" field="state" id="state" value={caregiver.addresses[0].state} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.addresses[0].state = e.target.value; this.setState({profile: tempProfile})}} placeholder="State"/>
                <label htmlFor="addressZip" ></label>
                <input className = "text" field="zip" id="zip" value={caregiver.addresses[0].zip} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.addresses[0].zip = e.target.value; this.setState({profile: tempProfile})}} placeholder="Zip Code"/>
                <label htmlFor="email"></label>
                <input className = "text" field="email" id="email" value={caregiver.email} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.email = e.target.value; this.setState({profile: tempProfile})}} placeholder="Email"/>
              {caregiver.phones.map((phone, idx) => {
                var btn = '';
                if(idx>0){
                  btn = <button type="button" onClick={() => {this.handleDeletePhone(idx)}} className="small">Delete</button>;
                }
                return (<div> 
                  <input className = "text" field="phone" id="phone" value={phone.number} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.phones[idx].number = e.target.value; this.setState({profile: tempProfile})}} placeholder={`Phone Number # ${idx + 1}`}/>
                  {btn}<br/>
                </div>);
              })}
              <button type="button" onClick={this.handleAddPhone} className="small">Add Phone Numbers</button><br/>
                
                
                <label htmlFor="relationship" className="d-block">Relationship to Child</label>

                <label>
                <select value={caregiver.relationship} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.relationship = e.target.value; this.setState({profile: tempProfile})}}>
                  <option value="parent">Parent</option>
                  <option value="legalGuardian">Legal Guardian</option>
                  <option value="family">Family</option>
                  <option value="other">Other</option>
                </select>
                </label>
                <br/><br/>
                <button type="submit" onClick={this.submitHandler} className="mb-4 btn btn-primary">Save</button><br/><br/>
              </form>



        </div>

      );
    }
  }

  export default BasicForm;
