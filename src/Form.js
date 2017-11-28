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
      label: "Family/Other",
      value: 'familyOther'
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
                <br/>
                <label htmlFor="firstName">First Name</label>
                <Text class = "text" field="firstName" id="firstName" />
                <label htmlFor="lastName">Last Name</label>
                <Text class = "text" field="lastName" id="lastName" /><br/><br/>
                <label htmlFor="lastName">Address</label>
                <label htmlFor="lastName" ></label>
                <Text class = "text" field="House Number" id="House Number" placeholder="House Number"/>
                <label htmlFor="lastName" ></label>
                <Text class = "text" field="Street" id="Street" placeholder="Street"/>
                <label htmlFor="lastName" ></label>
                <Text class = "text" field="City" id="City" placeholder="City"/>
                <label htmlFor="lastName" ></label>
                <Text class = "text" field="Country" id="Country" placeholder="Country"/>
                <label htmlFor="lastName" ></label>
                <Text class = "text" field="zipCode" id="zipCode" placeholder="Zip Code"/><br/><br/>
                <label htmlFor="lastName">Phone Number</label>
                <Text class = "text" field="phoneNumber" id="phoneNumber" /><br/><br/>
                <label htmlFor="lastName">Email</label>
                <Text class = "text" field="email" id="email" /><br/><br/>
                <label htmlFor="status" className="d-block">Relationship to Child</label>
                <Select field="status" id="status" options={statusOptions} /><br/><br/>
                <button type="submit" className="mb-4 btn btn-primary">Submit</button>
              </form>
            )}
          </Form>
        </div>
      );
    }
  }

  export default BasicForm;