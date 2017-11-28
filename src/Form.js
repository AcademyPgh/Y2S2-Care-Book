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
        <div><br/>
          <Form onSubmit={submittedValues => this.setState( { submittedValues } )}>
            { formApi => (
              <form onSubmit={formApi.submitForm} id="form2">
              <h2>Caregiver Information</h2><br/>
                
                <label htmlFor="pFirstName"></label>
                <Text class = "text" field="pFirstName" id="pFirstName" placeholder = "First Name"/>
                <label htmlFor="pLastName"></label>
                <Text class = "text" field="pLastName" id="pLastName" placeholder = "Last Name"/><br/>
                
                <label htmlFor="addressLine1" ></label>
                <Text class = "text" field="addressLine1" id="addressLine1" placeholder="Address Line 1"/>
                <label htmlFor="addressLine2" ></label>
                <Text class = "text" field="addressLine2" id="addressLine2" placeholder="Address Line 2"/>
                <label htmlFor="addressCity" ></label>
                <Text class = "text" field="addressCity" id="addressCity" placeholder="City"/><br/>
                <label htmlFor="addressState" ></label>
                <Text class = "text" field="addressState" id="addressState" placeholder="State"/>
                <label htmlFor="addressZip" ></label>
                <Text class = "text" field="addressZip" id="addressZip" placeholder="Zip Code"/><br/>
                <label htmlFor="phone"></label>
                <Text class = "text" field="phone" id="phone" placeholder="Phone Number"/>
                <label htmlFor="email"></label>
                <Text class = "text" field="email" id="email" placeholder="Email"/><br/>
                <label class = "text" htmlFor="relationship" className="d-block">Relationship to Child</label>
                <Select  field="relationship" id="relationship" options={statusOptions} /><br/><br/>
                <button type="submit" className="mb-4 btn btn-primary">Save</button>
                <br/><br/>
      
              </form>
            )}
          </Form>
          
        </div>

      );
    }
  }

  export default BasicForm;