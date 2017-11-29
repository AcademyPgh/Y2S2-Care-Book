import React, { Component } from 'react';
import Profile from './Profile_Data';

  class ChildForm extends Component {

    constructor( props ) {
      super( props );
      this.state = {
        profile: Profile,
        firstName: '',
        lastName: '',
        sex: '',
        birthdate: '',
        height: '',
        weight: '',
        insurance: '',
        diagnosis: '',
        allergy: ''

      };
    }

    render() {
      const child = this.state.profile.child;
      return (
        <div>
          <form onSubmit={submittedValues => this.setState( { submittedValues } )}>

                <h2>Child Information</h2><br/>
                <label htmlFor="firstName"></label>
                <input className = "text" field="firstName" id="firstName" value ={child.firstName} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.firstName = e; this.setState({profile: tempProfile})}} placeholder = "First Name"/>
                <label htmlFor="lastName"></label>
                <input className = "text" field="lastName" id="lastName" value={child.lastName} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.lastName = e; this.setState({profile: tempProfile})}}  placeholder = "Last Name"/><br/><br/>
                
                <label>
                <label>Male</label>
                <input type="radio" value={child.sex[0].male} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.sex[0].male = e; this.setState({profile: tempProfile})}}></input>
                <label>Female</label>
                <input type="radio" value={child.sex[0].female} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.sex[0].female = e; this.setState({profile: tempProfile})}}></input>
                <label>Other</label>
                <input type="radio" value={child.sex[0].other} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.sex[0].other = e; this.setState({profile: tempProfile})}}></input>
                </label><br/><br/>
              
                
                <label htmlFor="birthdate"></label>
                <input className = "text" field="birthdate" id="birthdate" placeholder="Birthdate: MM/DD/YYYY"value={child.birthdate} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.birthdate = e; this.setState({profile: tempProfile})}}/>
                <label htmlFor="height" ></label>
                <input className = "text" field="height" id="height" placeholder ="Height: Inches"value={child.height} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.height = e; this.setState({profile: tempProfile})}}/>
                <label htmlFor="weight" ></label>
                <input className = "text" field="weight" id="weight" placeholder="Weight: Lbs."value={child.weight} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.weight = e; this.setState({profile: tempProfile})}}/><br/><br/>
                <label>Insurance</label>
                <label>
                <select value={child.insurance} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.insurance = e.target.value; this.setState({profile: tempProfile})}}>
                  <option value="upmc">UPMC</option>
                  <option value="highmark">Highmark</option>
                  <option value="cigna">Cigna</option>
                  <option value="other">Other</option>
                </select>
                </label>
              </form>
              <br/>
              <form
            onSubmit={submittedValues => this.setState( { submittedValues } )}>
              <div>
                  <label htmlFor="dynamic-first"></label>
                  <input class="text" field="diagnosis" id="dynamic-first" placeholder="Diagnosis"/>
                  <label htmlFor="dynamic-first"></label>
                  <input class= "text" field="allergy" id="dynamic-first" placeholder="Allergy"/><br/><br/>
                  
                  
                  <label htmlFor="history"></label>
                  <input className = "history" field="history" id="history" placeholder = "History"value={child.history} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.history = e; this.setState({profile: tempProfile})}}/><br/>
                  <button type="submit" className="mb-4 btn btn-primary">Save</button>
                          
              </div>
            )}
          </form>
        </div>

      );
    }
  }

  export default ChildForm;