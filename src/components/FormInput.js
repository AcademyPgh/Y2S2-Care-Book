import React, { Component } from 'react';
import Input from './Input';
import DropDown from './DropDown';

class BasicFormInput extends Component {
    constructor(props) {
        super(props);
    
        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.setAddressLine1 = this.setAddressLine1.bind(this);
        this.setAddressLine2 = this.setAddressLine2.bind(this);
        this.setAddressCity = this.setAddressCity.bind(this);
        this.setAddressState = this.setAddressState.bind(this);
        this.setAddressZip = this.setAddressZip.bind(this);
        this.setPhoneLabel = this.setPhoneLabel.bind(this);
        this.setPhoneNumber = this.setPhoneNumber.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setRelationship = this.setRelationship.bind(this);
        
    }

    setFirstName(firstName) {
        let tempCaregiver = this.props.caregiver; 
        tempCaregiver.firstName=firstName; 
        this.props.setCaregiver(tempCaregiver);
    }

    setLastName(lastName) {
        let tempCaregiver = this.props.caregiver; 
        tempCaregiver.lastName=lastName; 
        this.props.setCaregiver(tempCaregiver);
    }

    setAddressLine1(line1){
        let tempCaregiver = this.props.caregiver; 
        tempCaregiver.address.line1=line1; 
        this.props.setCaregiver(tempCaregiver);
    }

    setAddressLine2(line2){
        let tempCaregiver = this.props.caregiver; 
        tempCaregiver.address.line2=line2; 
        this.props.setCaregiver(tempCaregiver);
    }

    setAddressCity(city){
        let tempCaregiver = this.props.caregiver; 
        tempCaregiver.address.city=city; 
        this.props.setCaregiver(tempCaregiver);
    }

    setAddressState(state){
        let tempCaregiver = this.props.caregiver; 
        tempCaregiver.address.state=state; 
        this.props.setCaregiver(tempCaregiver);
    }

    setAddressZip(zip){
        let tempCaregiver = this.props.caregiver; 
        tempCaregiver.address.zip=zip; 
        this.props.setCaregiver(tempCaregiver);
    }

    setPhoneLabel(label){
        let tempCaregiver = this.props.caregiver; 
        tempCaregiver.phone.label=label; 
        this.props.setCaregiver(tempCaregiver);
    }

    setPhoneNumber(number){
        let tempCaregiver = this.props.caregiver; 
        tempCaregiver.phone.number=number; 
        this.props.setCaregiver(tempCaregiver);
    }

    setEmail(email){
        let tempCaregiver = this.props.caregiver; 
        tempCaregiver.email=email; 
        this.props.setCaregiver(tempCaregiver);
    }

    setRelationship(relationship){
        let tempCaregiver = this.props.caregiver; 
        tempCaregiver.relationship=relationship; 
        this.props.setCaregiver(tempCaregiver);
    }

    render() {
        const caregiver = this.props.caregiver;
        return <div>
            <Input name="firstName" placeholder="First Name" onChange={this.setFirstName} value={caregiver.firstName}  />
            <Input name="lastName" placeholder="Last Name" onChange={this.setLastName} value={caregiver.lastName}  />
            <Input name="line1" placeholder="Address Line 1" onChange={this.setAddressLine1} value={caregiver.address.line1}  />
            <Input name="line2" placeholder="Address Line 2" onChange={this.setAddressLine2} value={caregiver.address.line2}  />
            <Input name="city" placeholder="City" onChange={this.setAddressCity} value={caregiver.address.city} />
            <Input name="state" placeholder="State" onChange={this.setAddressState} value={caregiver.address.state} />
            <Input name="zip" placeholder="Zip Code" onChange={this.setAddressZip} value={caregiver.address.zip} />
            <Input name="phone" placeholder="Phone Number" onChange={this.setPhone} value={caregiver.phone.label}  />
            <Input name="phone" placeholder="Phone Number" onChange={this.setPhone} value={caregiver.phone.number}  />
            <Input name="email" placeholder="Email" onChange={this.setEmail} value={caregiver.email} />
            <DropDown name="relationship" onChange={this.setRelationship} value={caregiver.relationship} />
        </div>;
    }
}
export default BasicFormInput;