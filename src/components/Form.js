import React, { Component } from 'react';
import axios from 'axios';
import Profile from './Profile_Data';
import BasicFormInput from './FormInput';
class BasicForm extends Component{      
    constructor(props){
        super(props);
        this.state = {
            profile: Profile,
        };
        this.handleAddPhone = this.handleAddPhone.bind(this);
        this.handleDeletePhone = this.handleDeletePhone.bind(this);
        this.setCaregiver = this.setCaregiver.bind(this);
    }

    handleAddPhone(){ //this adds a phone box
        let tempProfile = this.state.profile;
        tempProfile.caregiver.phones.push({label: '', number: ''});
        this.setState({profile: tempProfile});
    }      

    handleDeletePhone(idx) { //this deletes a phone number box
        let hi = this.state.profile;
        if (idx > 0) {
            hi.caregiver.phones.splice(idx, 1);
            this.setState({profile: hi});
        }
            
    }   
    setCaregiver(caregiver) {
        let tempProfile = this.state.profile;
        tempProfile.caregiver = caregiver;
        this.setState({profile: tempProfile});
    }

    componentDidMount(){
        axios('http://localhost:3000/carebook')
            .then(function(response){
                this.setState(response.data);
            })
            .catch(function(error){
                console.log(`initial request error: ${JSON.stringify(error)}`);
            });
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
            .then(function(response){
                console.log(response);
            })
            .catch(function(error){
                console.log(`submit handler error: ${JSON.stringify(error)}`);
            });
    }

    render() {
        const caregiver = this.state.profile.caregiver;
        return (
            <form id="form2">
                <p className = "sectionTitle">
              
                    <input className = "openItInput" id="toggleCaregiver" type="checkbox"></input><label className = "openIt" for="toggleCaregiver"></label>
                    <h2>Caregiver Information</h2>
                    <div id="expandCaregiver">
                        <BasicFormInput caregiver={caregiver} setCaregiver={(value) => {this.setCaregiver(value, 0)}} />
                        {/* <label htmlFor="firstName"></label>
                        <Input className = "text" placeholder = "First Name" value ={caregiver.firstName} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.firstName = e.target.value; this.setState({profile: tempProfile})}} />
                        <label htmlFor="lastName"></label>
                        <Input className = "text" field="lastName" id="lastName" value={caregiver.lastName} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.lastName = e.target.value; this.setState({profile: tempProfile})}}  placeholder = "Last Name"/><br/>
                        <label htmlFor="addressLine1"></label>
                        <Input className = "text" field="line1" id="line1" value={caregiver.addresses[0].line1} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.addresses[0].line1 = e.target.value; this.setState({profile: tempProfile})}}  placeholder="Address Line 1"/>
                        <label htmlFor="addressLine2" ></label>
                        <Input className = "text" field="line2" id="line2" value={caregiver.addresses[0].line2} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.addresses[0].line2 = e.target.value; this.setState({profile: tempProfile})}} placeholder="Address Line 2"/>
                        <label htmlFor="addressCity" ></label>
                        <Input className = "text" field="city" id="city" value={caregiver.addresses[0].city} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.addresses[0].city = e.target.value; this.setState({profile: tempProfile})}} placeholder="City"/><br/>
                        <label htmlFor="addressState" ></label>
                        <Input className = "text" field="state" id="state" value={caregiver.addresses[0].state} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.addresses[0].state = e.target.value; this.setState({profile: tempProfile})}} placeholder="State"/>
                        <label htmlFor="addressZip" ></label>
                        <Input className = "text" field="zip" id="zip" value={caregiver.addresses[0].zip} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.addresses[0].zip = e.target.value; this.setState({profile: tempProfile})}} placeholder="Zip Code"/>
                        <label htmlFor="email"></label>
                        <Input className = "text" field="email" id="email" value={caregiver.email} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.email = e.target.value; this.setState({profile: tempProfile})}} placeholder="Email"/> */}
                        {/* {caregiver.phones.map((phone, idx) => {
                var btn = '';
                if(idx>0){
                  btn = <button type="button" onClick={() => {this.handleDeletePhone(idx)}} className="small">Delete</button>;
                }

                return (
                <p> 
                  <label htmlFor="phone"></label>

                  <input className = "text" field="phone" id="phone" value={phone.number} onChange={e => {var tempProfile = this.state.profile; tempProfile.caregiver.phones[idx].number = e.target.value; this.setState({profile: tempProfile})}} placeholder={`Phone Number # ${idx + 1}`}/>
                  {btn}<br/>
                </p>);
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
                <button type="submit" onClick={this.submitHandler} className="mb-4 btn btn-primary">Save</button><br/><br/> */}
                    </div>
                </p>
            </form>
        );
    }
}
export default BasicForm;
