import React, { Component } from 'react';
import Profile from './Profile_Data';

class Medication extends Component {      
    constructor( props ) {
      super( props );
      this.state = {
        profile: Profile,
        // medicationName: "", 
        // dose: "",
        // frequency: "",
      };
      this.handleAddMedication = this.handleAddMedication.bind(this);
      this.handleDeleteMedication = this.handleDeleteMedication.bind(this);
      
    }
   
    handleAddMedication() { //adds another medication form
        var tempProfile = this.state.profile;
        tempProfile.medication.push({medicationName: '', dose: '', frequency: ''})
        this.setState({profile: tempProfile});
    }

    handleDeleteMedication(idx) { //deletes medication form
        var tempProfile = this.state.profile;
        if (idx > 0) {
            tempProfile.medication.splice(idx, 1);
            this.setState({profile: tempProfile});
        }
    }

render() {
    const medications= this.state.profile.medication;
    return (
      
            <form id="form2">
            <p className = "sectionTitle">
            <input className = "openItInput" id="toggleMedication" type="checkbox"></input><label className = "openIt" for="toggleMedication"></label>
            <h2>Medication</h2>
                <div id="expandMedication">
                    {medications.map((medication, idx) => {
                        var btn = '';
                        if(idx > 0) {
                            btn = <button type = "button" onClick={() => {this.handleDeleteMedication(idx)}} className="small">Delete</button>;
                        }
                        return (<div>
                            <input className = "text" field="medicationName" id="medicationName" value ={medication.medicationName} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[idx].medicationName = e.target.value; this.setState({profile: tempProfile})}} placeholder = "Medication Name"/>
                            <input className = "text" field="dose" id="dose" value={medication.dose} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[idx].dose = e.target.value; this.setState({profile: tempProfile})}}  placeholder = "Dose"/>
                            <input className = "text" field="frequency" id="frequency" value ={medication.frequency} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[idx].frequency = e.target.value; this.setState({profile: tempProfile})}} placeholder = "Frequency"/><br/>
                        {btn}
                        </div>);
                    })}
                    <button type = "button" onClick = {this.handleAddMedication} className = "small">Add Another Medication</button><br/>
                </div>
                </p>
                </form>
        );
    }
}
export default Medication;