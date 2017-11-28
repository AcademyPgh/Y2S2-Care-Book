import React, { Component } from 'react';
import { Form, Text, Radio, RadioGroup, Select, Checkbox, TextArea } from 'react-form';
import logo from './logo.png';


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
      this.state = {};
    }

    render() {
      return (
        <div>
          <Form onSubmit={submittedValues => this.setState( { submittedValues } )}>
            { formApi => (
              <form onSubmit={formApi.submitForm} id="form2">
              <h2>Caregiver Information</h2>
                
                <label htmlFor="firstName">Name</label>
                <Text class = "text" field="pFirstName" id="pFirstName" placeholder = "First"/>
                <label htmlFor="lastName"></label>
                <Text class = "text" field="pLastName" id="pLastName" placeholder = "Last"/><br/><br/>
                <label htmlFor="lastName">Address</label>
                <label htmlFor="lastName" ></label>
                <Text class = "text" field="addressLine1" id="addressLine1" placeholder="Line 1"/>
                <label htmlFor="lastName" ></label>
                <Text class = "text" field="addressLine2" id="addressLine2" placeholder="Line 2"/>
                <label htmlFor="lastName" ></label>
                <Text class = "text" field="addressCity" id="addressCity" placeholder="City"/><br/><br/>
                <label htmlFor="lastName" ></label>
                <Text class = "text" field="addressState" id="addressState" placeholder="State"/>
                <label htmlFor="lastName" ></label>
                <Text class = "text" field="addressZip" id="addressZip" placeholder="Zip Code"/><br/><br/>
                <label htmlFor="lastName">Phone Number</label>
                <Text class = "text" field="phone" id="phone" />
                <label htmlFor="lastName">Email</label>
                <Text class = "text" field="email" id="email" /><br/><br/>
                <label htmlFor="relationship" className="d-block">Relationship to Child</label>
                <Select field="relationship" id="relationship" options={statusOptions} /><br/><br/>
                <button type="submit" className="mb-4 btn btn-primary">Submit</button>
              </form>
            )}
          </Form>
        </div>
      );
    }
  }

  export default BasicForm;