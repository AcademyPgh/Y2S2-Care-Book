import React, { Component } from 'react';
import { Form, Text, Radio, RadioGroup, Select, Checkbox, TextArea } from 'react-form';
import logo from './logo.png';
import axios from 'axios';


  const statusOptions = [
    {
      label: 'Parent',
      value: 'parent'
    },
    {
      label: 'Legal Guardian',
      value: 'legalGuardian'
    },
    {
      label: "Family",
      value: 'family'
    },
    {
      label: "Other",
      value: 'other'
    }
  ];


    class BasicForm extends Component {
      
          constructor( props ) {
            super( props );
            this.state = {
              pFirstName: '',
              pLastName: '',
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
              pFirstName: this.state.pFirstName,
              pLastName: this.state.pLastName,
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
      return (
        <div><br/>
           <Form>
              <form id="form2">
              <br/><h2>Caregiver Information</h2><br/>
                <label htmlFor="firstName"></label>
                <Text className = "text" field="pFirstName" id="pFirstName" value={this.state.pFirstName} onChange={e => this.setState({pFirstName: e})} placeholder = "First Name"/>
                <label htmlFor="lastName"></label>
                <Text className = "text" field="pLastName" id="pLastName" value={this.state.pLastName} onChange={e => this.setState({pLastName: e})} placeholder = "Last Name"/><br/>
                <label htmlFor="addressLine1"></label>
                <Text className = "text" field="addressLine1" id="addressLine1" value={this.state.addressLine1} onChange={e => this.setState({addressLine1: e})} placeholder="Address Line 1"/>
                <label htmlFor="addressLine2" ></label>
                <Text className = "text" field="addressLine2" id="addressLine2" value={this.state.addressLine2} onChange={e => this.setState({addressLine2: e})}placeholder="Address Line 2"/>
                <label htmlFor="addressCity" ></label>
                <Text className = "text" field="addressCity" id="addressCity" value={this.state.addressCity} onChange={e => this.setState({addressCity: e})}placeholder="City"/><br/>
                <label htmlFor="addressState" ></label>
                <Text className = "text" field="addressState" id="addressState" value={this.state.addressState} onChange={e => this.setState({addressState: e})} placeholder="State"/>
                <label htmlFor="addressZip" ></label>
                <Text className = "text" field="addressZip" id="addressZip" value={this.state.addressZip} onChange={e => this.setState({addressZip: e})} placeholder="Zip Code"/><br/>
                <label htmlFor="phone"></label>
                <Text className = "text" field="phone" id="phone" value={this.state.phone} onChange={e => this.setState({phone: e})} placeholder="Phone Number"/>
                <label htmlFor="email"></label>
                <Text className = "text" field="email" id="email" value={this.state.email} onChange={e => this.setState({email: e})} placeholder="Email"/><br/><br/>
                <label htmlFor="relationship" className="d-block">Relationship to Child</label>
                <Select field="relationship" id="relationship" options={statusOptions} value={this.state.relationship} onChange={e => this.setState({relationship: e})}/><br/><br/>
                <button type="submit" onclick={this.submitHandler} className="mb-4 btn btn-primary">Save</button><br/><br/>
              </form>
          </Form>
          
        </div>

      );
    }
  }

  export default BasicForm;