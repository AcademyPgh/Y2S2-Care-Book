import React, { Component } from 'react';
import Input from './Input';

class PharmacyInput extends Component {
  constructor(props) {
    super(props);

    this.setName = this.setName.bind(this);
    this.setPharmacist = this.setPharmacist.bind(this);
    this.setAddressLine1 = this.setAddressLine1.bind(this);
    this.setAddressLine2 = this.setAddressLine2.bind(this);
    this.setAddressCity = this.setAddressCity.bind(this);
    this.setAddressState = this.setAddressState.bind(this);
    this.setAddressZip = this.setAddressZip.bind(this);
    this.setPhone = this.setPhone.bind(this);
  }

  setName(name) {
    var tempPharmacy = this.props.pharmacy; 
    tempPharmacy.name = name; 
    this.props.setPharmacy(tempPharmacy);
}

setPharmacist(pharmacist) {
    var tempPharmacy = this.props.pharmacy; 
    tempPharmacy.pharmacist = pharmacist; 
    this.props.setPharmacy(tempPharmacy);
  }

setAddressLine1(line1){
    var tempPharmacy = this.props.pharmacy; 
    tempPharmacy.address.line1=line1; 
    this.props.setPharmacy(tempPharmacy);
  }

setAddressLine2(line2){
    var tempPharmacy = this.props.pharmacy; 
    tempPharmacy.address.line2=line2; 
    this.props.setPharmacy(tempPharmacy);
  }

setAddressCity(city){
  var tempPharmacy = this.props.pharmacy; 
  tempPharmacy.address.city=city; 
  this.props.setPharmacy(tempPharmacy);
}

setAddressState(state){
  var tempPharmacy = this.props.pharmacy; 
  tempPharmacy.address.state=state; 
  this.props.setPharmacy(tempPharmacy);
}

setAddressZip(zip){
  var tempPharmacy = this.props.pharmacy; 
  tempPharmacy.address.zip=zip; 
  this.props.setPharmacy(tempPharmacy);
}

setPhone(phone){
  var tempPharmacy = this.props.pharmacy; 
  tempPharmacy.phone=phone; 
  this.props.setPharmacy(tempPharmacy);
}

  render() {
    const pharmacy = this.props.pharmacy;
    return (<div>
      <Input name="name" placeholder="Pharmacy Name" onChange={this.setName} value={pharmacy.name}  />
      <Input name="pharmacist" placeholder="Pharmacist" onChange={this.setPharmacist} value={pharmacy.pharmacist}  />
      <Input name="line1" placeholder="Address Line 1" onChange={this.setAddressLine1} value={pharmacy.address.line1}  />
      <Input name="line2" placeholder="Address Line 2" onChange={this.setAddressLine2} value={pharmacy.address.line2}  />
      <Input name="city" placeholder="City" onChange={this.setAddressCity} value={pharmacy.address.city} />
      <Input name="state" placeholder="State" onChange={this.setAddressState} value={pharmacy.address.state} />
      <Input name="zip" placeholder="Zip Code" onChange={this.setAddressZip} value={pharmacy.address.zip} />
      <Input name="phone" placeholder="Phone Number" onChange={this.setPhone} value={pharmacy.phone}  />
    </div>);
  }
}

export default PharmacyInput;