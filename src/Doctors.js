import React, { Component } from 'react';
import { Form, Text, Radio, RadioGroup, Select, Checkbox, TextArea } from 'react-form';
import Profile from './Profile_Data'

class DoctorForm extends Component{
    constructor(props){
        super(props);
        this.state={
            profile: Profile,
            doctors: [{
                label: "",
                firstName: "Andrew",
                lastName: "Yeung",
                phone: [{
                    label: "",
                    number: ""
                }],
                email: '',
                addresses: [{
                    label: "",
                    line1: "", 
                    line2: "", 
                    city: "", 
                    state: "", 
                    zip: ""
                }],
            }]
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
                <label htmlFor="firstName"></label>
                    <input className = "text" field="firstName" id="firstName" value ={doctors[0].firstName} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[0].firstName = e.target.value; this.setState({profile: tempProfile})}} placeholder = "First Name"/>
                <label htmlFor="lastName"></label>
                    <input className = "text" field="lastName" id="lastName" value={doctors[0].lastName} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[0].lastName = e.target.value; this.setState({profile: tempProfile})}}  placeholder = "Last Name"/>
                <label>
                    <select value={doctors[0].label} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[0].label = e.target.value; this.setState({profile: tempProfile})}}>
                    <option value="pcp">Primary Care Physician</option>
                    <option value="specialist">Specialist</option>
                    </select>
                </label><br/>
                <label htmlFor="email"></label>
                    <input className = "text" field="email" id="email" value={doctors[0].email} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[0].email = e.target.value; this.setState({profile: tempProfile})}} placeholder="Email"/>
                <label>
                <label htmlFor="phone"></label>
                    <input className = "text" field="phone" id="phone" value={doctors[0].phone[0].number} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[0].phone[0].number = e.target.value; this.setState({profile: tempProfile})}} placeholder="Phone Number"/>
                <label>
                    <select value={doctors[0].phone[0].label} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[0].phone[0].label = e.target.value; this.setState({profile: tempProfile})}}>
                    <option value="home">Home</option>
                    <option value="cell">Cellular</option>
                    <option value="hospital">Hospital</option>
                    </select>
                </label><br/>
                    {/* <select value={doctors[0].addresses[0].label} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[0].addresses[0].label = e.target.value; this.setState({profile: tempProfile})}}>
                    <option value="hospital1">Hospital 1</option>
                    <option value="hospital2">Hospital 2</option>
                    <option value="hospital3">Hospital 3</option>
                    </select> */}
                </label>
                <label htmlFor="addressLine1"></label>
                    <input className = "text" field="line1" id="line1" value={doctors[0].addresses[0].line1} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[0].addresses[0].line1 = e.target.value; this.setState({profile: tempProfile})}}  placeholder="Address Line 1"/>
                <label htmlFor="addressLine2" ></label>
                    <input className = "text" field="line2" id="line2" value={doctors[0].addresses[0].line2} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[0].addresses[0].line2 = e.target.value; this.setState({profile: tempProfile})}} placeholder="Address Line 2"/><br/>
                <label htmlFor="addressCity" ></label>
                    <input className = "text" field="city" id="city" value={doctors[0].addresses[0].city} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[0].addresses[0].city = e.target.value; this.setState({profile: tempProfile})}} placeholder="City"/>
                <label htmlFor="addressState" ></label>
                    <input className = "text" field="state" id="state" value={doctors[0].addresses[0].state} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[0].addresses[0].state = e.target.value; this.setState({profile: tempProfile})}} placeholder="State"/>
                <label htmlFor="addressZip" ></label>
                    <input className = "text" field="zip" id="zip" value={doctors[0].addresses[0].zip} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[0].addresses[0].zip = e.target.value; this.setState({profile: tempProfile})}} placeholder="Zip Code"/><br/>
                
            </div>
            </p>
            </form>
        )
    }
}

export default DoctorForm;