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
  const statusOptions2 = [
    {
      label: 'UPMC',
      value: 'upmc'
    },
    {
      label: 'Highmark',
      value: 'highmark'
    },
    {
      label: "Cigna",
      value: 'cigna'
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
                
                <label htmlFor="pFirstName">Name</label>
                <Text class = "text" field="pFirstName" id="pFirstName" placeholder = "First"/>
                <label htmlFor="pLastName"></label>
                <Text class = "text" field="pLastName" id="pLastName" placeholder = "Last"/><br/><br/>
                <label htmlFor="address">Address</label>
                <label htmlFor="addressLine1" ></label>
                <Text class = "text" field="addressLine1" id="addressLine1" placeholder="Line 1"/>
                <label htmlFor="addressLine2" ></label>
                <Text class = "text" field="addressLine2" id="addressLine2" placeholder="Line 2"/>
                <label htmlFor="addressCity" ></label>
                <Text class = "text" field="addressCity" id="addressCity" placeholder="City"/><br/><br/>
                <label htmlFor="addressState" ></label>
                <Text class = "text" field="addressState" id="addressState" placeholder="State"/>
                <label htmlFor="addressZip" ></label>
                <Text class = "text" field="addressZip" id="addressZip" placeholder="Zip Code"/><br/><br/>
                <label htmlFor="phone">Phone Number</label>
                <Text class = "text" field="phone" id="phone" />
                <label htmlFor="email">Email</label>
                <Text class = "text" field="email" id="email" /><br/><br/>
                <label htmlFor="relationship" className="d-block">Relationship to Child</label>
                <Select field="relationship" id="relationship" options={statusOptions} /><br/><br/>
                <button type="submit" className="mb-4 btn btn-primary">Save</button>
                <br/><br/>


                <h2>Child Information</h2>
                <label htmlFor="cFirstName">Name</label>
                <Text class = "text" field="cFirstName" id="cFirstName" placeholder = "First"/>
                <label htmlFor="cLastName"></label>
                <Text class = "text" field="cLastName" id="cLastName" placeholder = "Last"/><br/><br/>
                <RadioGroup field="sex">
              { group => (
                <div>
                  <label htmlFor="male" className="mr-2">Male</label>
                  <Radio group={group} value="male" id="male" className="mr-3 d-inline-block" />
                  <label htmlFor="female" className="mr-2">Female</label>
                  <Radio group={group} value="female" id="female" className="d-inline-block" />
                </div>
              )}
            </RadioGroup><br/>
                
                <label htmlFor="birthdate">Birthdate</label>
                <Text class = "text" field="birthdate" id="birthdate" placeholder="MM/DD/YYYY"/>
                <label htmlFor="height" >Height</label>
                <Text class = "text" field="height" id="height" placeholder ="Inches"/>
                <label htmlFor="weight" >Weight</label>
                <Text class = "text" field="weight" id="weight" placeholder="Lbs."/><br/><br/>
                <label htmlFor="insurance" className="d-block">Insurance</label>
                <Select field="insurance" id="insurance" options={statusOptions2} />
      
              </form>
            )}
          </Form>
          <Form
            onSubmit={submittedValues => this.setState( { submittedValues } )}>
            { formApi => (
              <div>
                
                <form onSubmit={formApi.submitForm} id="dynamic-form"><br/>
                  <label htmlFor="dynamic-first">Diagnosis</label>
                  <Text field="diagnosis" id="dynamic-first" /><br/><br/>
                  <button
                  onClick={() => formApi.addValue('diagnoses', '')}
                  type="button"
                  className="mb-4 mr-4 btn btn-success">Add Diagnosis</button><br/><br/>
                  { formApi.values.diagnoses && formApi.values.diagnoses.map( ( diagnosis, i ) => (
                    <div key={`diagnosis${i}`}>
                      <label htmlFor={`diagnosis-name-${i}`}>Diagnosis</label>
                      <Text field={['diagnoses', i]} id={`diagnosis-name-${i}`} /><br/><br/>
                      <button
                        onClick={() => formApi.removeValue('diagnoses', i)}
                        type="button"
                        className="mb-4 btn btn-danger">Remove</button>
                        <button
                  onClick={() => formApi.addValue('diagnoses', '')}
                  type="button"
                  className="mb-4 mr-4 btn btn-success">Add Diagnosis</button><br/><br/>
                        
                    </div>
                  ))}
                </form>
              </div>
            )}
          </Form>
          <Form
            onSubmit={submittedValues => this.setState( { submittedValues } )}>
            { formApi => (
              <div>
                
                <form onSubmit={formApi.submitForm} id="dynamic-form"><br/>
                  <label htmlFor="dynamic-first">Allergy</label>
                  <Text field="allergy" id="dynamic-first" /><br/><br/>
                  <button
                  onClick={() => formApi.addValue('allergies', '')}
                  type="button"
                  className="mb-4 mr-4 btn btn-success">Add Allergy</button><br/><br/>
                  { formApi.values.allergies && formApi.values.allergies.map( ( allergy, i ) => (
                    <div key={`allergy${i}`}>
                      <label htmlFor={`allergy-name-${i}`}>Allergy</label>
                      <Text field={['allergies', i]} id={`allergy-name-${i}`} /><br/><br/>
                      <button
                        onClick={() => formApi.removeValue('allergies', i)}
                        type="button"
                        className="mb-4 btn btn-danger">Remove</button>
                        <button
                  onClick={() => formApi.addValue('allergies', '')}
                  type="button"
                  className="mb-4 mr-4 btn btn-success">Add Allergy</button><br/><br/>
                        
                    </div>
                  ))}
                  <button type="submit" className="mb-4 btn btn-primary">Save</button>
                </form>
              </div>
            )}
          </Form>
        </div>

      );
    }
  }

  export default BasicForm;