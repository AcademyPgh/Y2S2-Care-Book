import React, { Component } from 'react';
import Profile from './Profile_Data';
class Medication extends Component {      
    constructor( props ) {
        super( props );
        this.state = {
            profile: Profile,
            label: "", 
            dose: "",
            frequency: "",
            pharmacy:[{
                name: "",
                addresses: [{
                    line1: "", 
                    line2: "", 
                    city: "", 
                    state: "", 
                    zip: ""
                }],
                phone: "",
            }]
        };
    }
   
    render() {
        const medication= this.state.profile.medication;
        return (
                <form id="form2">
                <p className = "sectionTitle">
            <input className = "openItInput" id="toggleMedication" type="checkbox"></input><label className = "openIt" for="toggleMedication"></label>
            <h2>Medications</h2>
                <div id="expandMedication">
                    <label htmlFor="label"></label>
                    <input className = "text" field="label" id="label" value ={medication[0].label} onChange={(e) => {
                        const tempProfile = this.state.profile; tempProfile.medication[0].label = e.target.value; this.setState({profile: tempProfile});
                    }} placeholder = "Name of Medication"/>
                    <label htmlFor="dose"></label>
                    <input className = "text" field="dose" id="dose" value={medication[0].dose} onChange={(e) => {
                        const tempProfile = this.state.profile; tempProfile.medication[0].dose = e.target.value; this.setState({profile: tempProfile});
                    }} placeholder = "Dose"/>
                    <label htmlFor="frequency"></label>
                    <input className = "text" field="frequency" id="frequency" value ={medication[0].frequency} onChange={(e) => {
                        const tempProfile = this.state.profile; tempProfile.medication[0].frequency = e.target.value; this.setState({profile: tempProfile});
                    }} placeholder = "Frequency"/><br/>
                    <label htmlFor="name"></label>
                </div>
                </p>
                </form>
        );
    }
}
export default Medication;