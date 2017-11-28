import React, { Component } from 'react';
import { Form, Text, Radio, RadioGroup, Select, Checkbox, TextArea } from 'react-form';
import logo from './logo.png';


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

  class ChildForm extends Component {

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

                <h2>Child Information</h2><br/>
                <label htmlFor="cFirstName"></label>
                <Text class = "text" field="cFirstName" id="cFirstName" placeholder = "First Name"/>
                <label htmlFor="cLastName"></label>
                <Text class = "text" field="cLastName" id="cLastName" placeholder = "Last Name"/><br/><br/>
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
                
                <label htmlFor="birthdate"></label>
                <Text class = "text" field="birthdate" id="birthdate" placeholder="Birthdate: MM/DD/YYYY"/>
                <label htmlFor="height" ></label>
                <Text class = "text" field="height" id="height" placeholder ="Height: Inches"/>
                <label htmlFor="weight" ></label>
                <Text class = "text" field="weight" id="weight" placeholder="Weight: Lbs."/><br/>
                <label htmlFor="insurance" className="d-block"></label>
                <Select field="insurance" id="insurance" options={statusOptions2} placeholder="Insurance"/>
      
              </form>
            )}
          </Form>
          <Form
            onSubmit={submittedValues => this.setState( { submittedValues } )}>
            { formApi => (
              <div>
                
                <form onSubmit={formApi.submitForm} id="dynamic-form"><br/>
                  <label htmlFor="dynamic-first"></label>
                  <Text field="diagnosis" id="dynamic-first" placeholder="Diagnosis"/><br/><br/>
                  
                  { formApi.values.diagnoses && formApi.values.diagnoses.map( ( diagnosis, i ) => (
                    <div key={`diagnosis${i}`}>
                      <label htmlFor={`diagnosis-name-${i}`}></label>
                      <Text field={['diagnoses', i]} id={`diagnosis-name-${i}`} placeholder="Diagnosis"/><br/><br/>
                      <button
                        onClick={() => formApi.removeValue('diagnoses', i)}
                        type="button"
                        className="mb-4 btn btn-danger">Remove</button>
                       <br/><br/>
                        
                    </div>
                  ))}
                  <button
                  onClick={() => formApi.addValue('diagnoses', '')}
                  type="button" class = "text"
                  className="mb-4 mr-4 btn btn-success">Add Diagnosis</button><br/><br/>
                </form>
              </div>
            )}
          </Form>
          <Form
            onSubmit={submittedValues => this.setState( { submittedValues } )}>
            { formApi => (
              <div>
                
                <form onSubmit={formApi.submitForm} id="dynamic-form"><br/>
                  <label htmlFor="dynamic-first"></label>
                  <Text field="allergy" id="dynamic-first" placeholder="Allergy"/><br/><br/>
                  
                  { formApi.values.allergies && formApi.values.allergies.map( ( allergy, i ) => (
                    <div key={`allergy${i}`}>
                      <label htmlFor={`allergy-name-${i}`}></label>
                      <Text field={['allergies', i]} id={`allergy-name-${i}`} placeholder="Allergy"/><br/><br/>
                      <button
                        onClick={() => formApi.removeValue('allergies', i)}
                        type="button"
                        className="mb-4 btn btn-danger">Remove</button>
                        
                        
                    </div>
                  ))}
                  <button
                  onClick={() => formApi.addValue('allergies', '')}
                  type="button"
                  className="mb-4 mr-4 btn btn-success">Add Allergy</button><br/><br/>
                  <button type="submit" className="mb-4 btn btn-primary">Save</button>
                </form>
              </div>
            )}
          </Form>
        </div>

      );
    }
  }

  export default ChildForm;