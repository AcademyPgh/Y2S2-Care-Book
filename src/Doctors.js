import React, { Component } from 'react';
import axios from 'axios';
import Profile from './Profile_Data'

class DoctorForm extends Component{
    constructor(props){
        super(props);
        this.state={
            profile: Profile,
        };
        this.handleAddPhone = this.handleAddPhone.bind(this);
        this.handleDeletePhone = this.handleDeletePhone.bind(this);
        this.handleAddAddress = this.handleAddAddress.bind(this);
        this.handleDeleteAddress = this.handleDeleteAddress.bind(this);
        this.handleAddDoctor = this.handleAddDoctor.bind(this);
        this.handleDeleteDoctor = this.handleDeleteDoctor.bind(this);
      }

    handleAddPhone(drIndex) { //this adds a phone number box
        var tempProfile = this.state.profile;
        tempProfile.doctors[drIndex].phones.push({label: '', number: ''}) ;
        this.setState({profile: tempProfile});
    }      

    handleDeletePhone(phoneIndex,drIndex) { //this deletes a phone number box
        var hi = this.state.profile;
        if (phoneIndex > 0)
        {
        hi.doctors[drIndex].phones.splice(phoneIndex, 1);
        this.setState({profile: hi});
        }
    }

    handleAddAddress(drIndex) { //this adds an address box
        var tempProfile = this.state.profile;
        tempProfile.doctors[drIndex].addresses.push({label: "",
        line1: "", 
        line2: "", 
        city: "", 
        state: "", 
        zip: ""}) ;
        this.setState({profile: tempProfile});
    }      

    handleDeleteAddress(addressIndex,drIndex) { //this deletes an address box
        var hi = this.state.profile;
        if (addressIndex > 0)
        {
        hi.doctors[drIndex].addresses.splice(addressIndex, 1);
        this.setState({profile: hi});
        }
    }

    handleAddDoctor() { //this adds a doctor
        var tempProfile = this.state.profile;
        tempProfile.doctors.push({
            label: "",
            firstName: "Andrew",
            lastName: "Yeung",
            phones: [{
                label: "",
                number: ""
            }],
            email: "",
            addresses: [{
                label: "",
                line1: "", 
                line2: "", 
                city: "", 
                state: "", 
                zip: ""
            }],
        }) ;
        this.setState({profile: tempProfile});
    }      

    handleDeleteDoctor(drIndex) { //this deletes a doctor
        var temp = this.state.profile;
        if (drIndex > 0)
        {
        temp.doctors.splice(drIndex, 1);
        this.setState({profile: temp});
        }
    }
    render() {
        const doctors = this.state.profile.doctors;
        return (
                <form id="form2">
                <p className = "sectionTitle">
                    <br/><h2>Physician Information</h2><br/>     
                    <input className = "openItInput" id="toggleDoctor" type="checkbox"></input><label className = "openIt" for="toggleDoctor"></label>           
                    <div id="expandDoctor">
                    {doctors.map((doctor, drIndex) => {
                        var btnP = '';
                        if(drIndex>0){
                        btnP = <button type="button" onClick={() => {this.handleDeleteDoctor(drIndex)}} className="small">Delete Doctor</button>;
                        }
                        return (<div> 
                            <h3>Physician {drIndex+1} </h3>
                            <label htmlFor="firstName"></label>
                                <input className = "text" field="firstName" id="firstName" value ={doctors[drIndex].firstName} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[drIndex].firstName = e.target.value; this.setState({profile: tempProfile})}} placeholder = "First Name"/>
                            <label htmlFor="lastName"></label>
                                <input className = "text" field="lastName" id="lastName" value={doctors[drIndex].lastName} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[drIndex].lastName = e.target.value; this.setState({profile: tempProfile})}}  placeholder = "Last Name"/>
                            <label>
                                <select value={doctors[drIndex].label} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[drIndex].label = e.target.value; this.setState({profile: tempProfile})}}>
                                <option value="pcp">Primary Care Physician</option>
                                <option value="specialist">Specialist</option>
                                </select>
                            </label><br/>
                            <label htmlFor="email"></label>
                            <input className = "text" field="email" id="email" value={doctors[drIndex].email} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[drIndex].email = e.target.value; this.setState({profile: tempProfile})}} placeholder="Email"/>
                            {doctors[drIndex].phones.map((phone, phoneIndex) => {
                                var btn = '';
                                if(phoneIndex>0){
                                btn = <button type="button" onClick={() => {this.handleDeletePhone(phoneIndex)}} className="small">Delete</button>;
                                }
                                return (<div> 
                                    <h4>Physician Phone Number {phoneIndex+1}</h4>
                                <label htmlFor="phone"></label>
                                <input className = "text" field="phone" id="phone" value={phone.number} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[drIndex].phones[phoneIndex].number = e.target.value; this.setState({profile: tempProfile})}} placeholder={`Phone Number # ${phoneIndex + 1}`}/>
                                {btn}<br/>
                                </div>);
                            })}
                                <button type="button" onClick={this.handleAddPhone} className="small">Add Phone Numbers</button><br/>
                            {doctors[drIndex].addresses.map((address, addressIndex) => {
                                var btnA = '';
                                if(addressIndex>0){
                                btnA = <button type="button" onClick={() => {this.handleDeleteAddress(addressIndex)}} className="small">Delete</button>;
                                }
                                return (<div> 
                                    <h4>Physician Address {addressIndex+1}</h4>
                                    <label htmlFor="addressLine1"></label>
                                        <input className = "text" field="line1" id="line1" value={doctors[drIndex].addresses[addressIndex].line1} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[drIndex].addresses[addressIndex].line1 = e.target.value; this.setState({profile: tempProfile})}}  placeholder="Address Line 1"/>
                                    <label htmlFor="addressLine2" ></label>
                                        <input className = "text" field="line2" id="line2" value={doctors[drIndex].addresses[addressIndex].line2} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[drIndex].addresses[addressIndex].line2 = e.target.value; this.setState({profile: tempProfile})}} placeholder="Address Line 2"/><br/>
                                    <label htmlFor="addressCity" ></label>
                                        <input className = "text" field="city" id="city" value={doctors[drIndex].addresses[addressIndex].city} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[drIndex].addresses[addressIndex].city = e.target.value; this.setState({profile: tempProfile})}} placeholder="City"/>
                                    <label htmlFor="addressState" ></label>
                                        <input className = "text" field="state" id="state" value={doctors[drIndex].addresses[addressIndex].state} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[drIndex].addresses[addressIndex].state = e.target.value; this.setState({profile: tempProfile})}} placeholder="State"/>
                                    <label htmlFor="addressZip" ></label>
                                        <input className = "text" field="zip" id="zip" value={doctors[drIndex].addresses[addressIndex].zip} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[drIndex].addresses[addressIndex].zip = e.target.value; this.setState({profile: tempProfile})}} placeholder="Zip Code"/><br/>
                                        {btnA}<br/>
                                </div>);
                            })}
                            <button type="button" onClick={this.handleAddAddress} className="small">Add Addresses</button><br/>
                        </div>);
                    })}
                    <button type="button" onClick={this.handleAddDoctor} className="small">Add Another Physician</button><br/>
                    </div>
                    </p>
                </form>
            
        )
    }
}

export default DoctorForm;