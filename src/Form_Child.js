import React, { Component } from 'react';
import Profile from './Profile_Data';

  class ChildForm extends Component {

    constructor( props ) {
      super( props );
      this.state = {
        profile: Profile,
      };
      this.handleAddDiagnosis = this.handleAddDiagnosis.bind(this);
      this.handleDeleteDiagnosis = this.handleDeleteDiagnosis.bind(this);
    }

    handleAddDiagnosis(){
      var tempProfile = this.state.profile;
      tempProfile.child.diagnoses.push({diagnosis: ''});
      this.setState({profile: tempProfile});
    }

    handleDeleteDiagnosis(idx){
      var tempProfile = this.state.profile;
      if (idx > 0)
      {
      tempProfile.child.diagnoses.splice(idx, 1);
      this.setState({profile: tempProfile});
      }
    }

    render() {
      const child = this.state.profile.child;
      return (
          <form onSubmit={submittedValues => this.setState( { submittedValues } )}>
          <p className = "sectionTitle2">
              <br/><h2>Child Information</h2>
              <input className = "openItInput" id="toggleChild" type="checkbox"></input><label className = "openIt" for="toggleChild"></label>
                <div id="expandChild"><br/>
                <label htmlFor="firstName"></label>
                <input className = "text" field="firstName" id="firstName" value ={child.firstName} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.firstName = e.target.value; this.setState({profile: tempProfile})}} placeholder = "First Name"/>
                <label htmlFor="lastName"></label>
                <input className = "text" field="lastName" id="lastName" value={child.lastName} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.lastName = e.target.value; this.setState({profile: tempProfile})}}  placeholder = "Last Name"/><br/><br/>
                
                <label>
                <label>Male</label>
                <input type="radio" value={child.sex[0].male} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.sex[0].male = e.target.value; this.setState({profile: tempProfile})}}></input>
                <label>Female</label>
                <input type="radio" value={child.sex[0].female} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.sex[0].female = e.target.value; this.setState({profile: tempProfile})}}></input>
                <label>Other</label>
                <input type="radio" value={child.sex[0].other} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.sex[0].other = e.target.value; this.setState({profile: tempProfile})}}></input>
                </label><br/><br/>

                <label htmlFor="birthdate"></label>
                <input className = "text" field="birthdate" id="birthdate" placeholder="Birthdate: MM/DD/YYYY"value={child.birthdate} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.birthdate = e.target.value; this.setState({profile: tempProfile})}}/>
                <label htmlFor="height" ></label>
                <input className = "text" field="height" id="height" placeholder ="Height: Inches"value={child.height} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.height = e.target.value; this.setState({profile: tempProfile})}}/>
                <label htmlFor="weight" ></label>
                <input className = "text" field="weight" id="weight" placeholder="Weight: Lbs."value={child.weight} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.weight = e.target.value; this.setState({profile: tempProfile})}}/><br/><br/>
                <label>Insurance</label>
                <label>
                <select value={child.insurance} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.insurance = e.target.value; this.setState({profile: tempProfile})}}>
                  <option value="upmc">UPMC</option>
                  <option value="highmark">Highmark</option>
                  <option value="cigna">Cigna</option>
                  <option value="other">Other</option>
                </select>
                </label>
              <br/>
              <div>
                  
                {child.diagnoses.map((diagnosis, idx) => {
                  var btn = '';
                  if(idx>0){
                    btn= <button type="button" onClick={() => {this.handleDeleteDiagnosis(idx)}} className="small">Delete</button>;
                  }
                  return (
                  <div>
                    <label htmlFor="dynamic-first"></label>
                    <input class="text" field="diagnosis" id="dynamic-first" placeholder = {'Diagnosis #' + (idx+1)} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.diagnoses[idx].diagnosis = e.target.value; this.setState({profile: tempProfile})} }/>
                    {btn}<br/>
                  </div>);
                })}
                <button type="button" onClick={this.handleAddDiagnosis} className="small">Add Diagnosis</button><br/>

                  <label htmlFor="dynamic-first"></label> 
                  <input class= "text" field="allergy" id="dynamic-first" placeholder = "Allergy" onChange={e => {var tempProfile = this.state.profile; tempProfile.child.allergies[0] = e.target.value; this.setState({profile: tempProfile})} }/><br/><br/>
                  <label htmlFor="history"></label>
                  <input className = "history" field="history" id="history" placeholder = "History"value={child.history} onChange={e => {var tempProfile = this.state.profile; tempProfile.child.history = e.target.value; this.setState({profile: tempProfile})}}/><br/>
                  <button type="submit" className="mb-4 btn btn-primary">Save</button>   
              </div>
              </div>
              </p>
          </form>
    );
    }
  }
  export default ChildForm;