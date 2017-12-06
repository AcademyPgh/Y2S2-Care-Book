import React, { Component } from 'react';
import Profile from './Profile_Data';

class ChildForm extends Component{
    constructor( props ){
        super( props );
        this.state = {
            profile: Profile,
        };
        this.handleAddDiagnosis = this.handleAddDiagnosis.bind(this);
        this.handleDeleteDiagnosis = this.handleDeleteDiagnosis.bind(this);
        this.handleAddAllergy = this.handleAddAllergy.bind(this);
        this.handleDeleteAllergy = this.handleDeleteAllergy.bind(this);
    }

    handleAddDiagnosis(){
        const tempProfile = this.state.profile;
        tempProfile.child.diagnoses.push({diagnosis: ''});
        this.setState({profile: tempProfile});
    }

    handleDeleteDiagnosis(idx){
        const tempProfile = this.state.profile;
        if (idx > 0){
            tempProfile.child.diagnoses.splice(idx, 1);
            this.setState({profile: tempProfile});
        }
    }

    handleAddAllergy(){
        const tempProfile = this.state.profile;
        tempProfile.child.allergies.push({allergy: ''});
        this.setState({profile: tempProfile});
    }

    handleDeleteAllergy(idx){
        const tempProfile = this.state.profile;
        if (idx > 0){
            tempProfile.child.allergies.splice(idx, 1);
            this.setState({profile: tempProfile});
        }
    }

    render(){
        const child = this.state.profile.child;
        return(
                <form 
                    onSubmit={
                        (submittedValues) => this.setState({ submittedValues })
                    }
                >
                <p className="sectionTitle2" >
                <input className = "openItInput" id="toggleChild" type="checkbox"></input><label className = "openIt" for="toggleChild"></label>
              <h2>Child Information</h2>
                <div id="expandChild"><br/>
                    <h2>
              Child Information
                    </h2>
                    <br/>
                    <label htmlFor="firstName"></label>
                    <input 
                        className = "text" 
                        field="firstName" 
                        id="firstName" 
                        placeholder = "First Name"
                        value={child.firstName} 
                        onChange={
                            (e) => {
                                const tempProfile = this.state.profile; 
                                tempProfile.child.firstName = e.target.value; 
                                this.setState({profile: tempProfile});
                            }
                        }
                    />
                    <label htmlFor="lastName"></label>
                    <input 
                        className = "text" 
                        field="lastName" 
                        id="lastName" 
                        placeholder = "Last Name"
                        value={child.lastName} 
                        onChange={
                            (e) => {
                                const tempProfile = this.state.profile; 
                                tempProfile.child.lastName = e.target.value; 
                                this.setState({profile: tempProfile});
                            }} 
                    /><br/><br/>
                
                    <div className="radio">
                Sex: 
                        <label>
                            <label>
                    Male
                                <input 
                                    type="radio" 
                                    name="sex" 
                                    value="male" 
                                    onClick={
                                        (e) => {
                                            const tempProfile = this.state.profile; 
                                            tempProfile.child.sex = "male"; 
                                            this.setState({profile: tempProfile});
                                        }
                                    }
                                />
                            </label>
                            <label>
                    Female
                                <input 
                                    type="radio" 
                                    name="sex" 
                                    value="female" 
                                    onClick={
                                        (e) => {
                                            const tempProfile = this.state.profile; 
                                            tempProfile.child.sex = "female"; 
                                            this.setState({profile: tempProfile});
                                        }
                                    }
                                />
                            </label>
                            <label>
                    Other
                                <input 
                                    type="radio" 
                                    name="sex" 
                                    value="other" 
                                    onClick={
                                        (e) => {
                                            const tempProfile = this.state.profile; 
                                            tempProfile.child.sex = "other"; 
                                            this.setState({profile: tempProfile});
                                        }
                                    }
                                />
                            </label>
                        </label>
                    </div><br/>

                    <label htmlFor="birthdate"></label>
                    <input 
                        className = "text" 
                        field="birthdate" 
                        id="birthdate" 
                        placeholder="Birthdate: MM/DD/YYYY"
                        value={child.birthdate} 
                        onChange={
                            (e) => {
                                const tempProfile = this.state.profile; 
                                tempProfile.child.birthdate = e.target.value; 
                                this.setState({profile: tempProfile});
                            }
                        }
                    />
                    <label htmlFor="height" ></label>
                    <input 
                        className = "text" 
                        field="height" 
                        id="height" 
                        placeholder ="Height: Inches"
                        value={child.height} 
                        onChange={
                            (e) => {
                                const tempProfile = this.state.profile; 
                                tempProfile.child.height = e.target.value; 
                                this.setState({profile: tempProfile});
                            }
                        }
                    />
                    <label htmlFor="weight"/>
                    <input 
                        className = "text" 
                        field="weight" 
                        id="weight" 
                        placeholder="Weight: lbs."
                        value={child.weight} 
                        onChange={
                            (e) => {
                                const tempProfile = this.state.profile; 
                                tempProfile.child.weight = e.target.value; 
                                this.setState({profile: tempProfile});
                            }
                        }
                    />
                    <br/>
                    <br/>
                    <label>Insurance
                        <select 
                            value={child.insurance} 
                            onChange={
                                (e) => {
                                    const tempProfile = this.state.profile; 
                                    tempProfile.child.insurance = e.target.value; 
                                    this.setState({profile: tempProfile});
                                }
                            }
                        >
                            <option value="upmc">UPMC</option>
                            <option value="highmark">Highmark</option>
                            <option value="cigna">Cigna</option>
                            <option value="other">Other</option>
                        </select>
                    </label><br/>

                    <div>  
                        {child.diagnoses.map((diagnosis, idx) => {
                            let btn = '';
                            if(idx>0){
                                btn= <button 
                                    type="button"  
                                    className="small"
                                    onClick={
                                        () => {
                                            this.handleDeleteDiagnosis(idx);
                                        }
                                    } 
                                >
                      Delete
                                </button>;
                            }
                            return (
                                <div key="text">
                                    <label htmlFor="dynamic-first"></label>
                                    <input 
                                        className="text" 
                                        field="diagnosis" 
                                        id="dynamic-first" 
                                        placeholder = {'Diagnosis #' + (idx+1)}
                                        value={diagnosis.diagnosis} 
                                        onChange={
                                            (e) => {
                                                const tempProfile = this.state.profile; 
                                                tempProfile.child.diagnoses[idx].diagnosis = e.target.value; 
                                                this.setState({profile: tempProfile});
                                            }
                                        } 
                                    />
                                    {btn}
                                    <br/>
                                </div>);
                        })}
                        <button type="button" onClick={this.handleAddDiagnosis} className="small">Add Diagnosis</button><br/>
                
                        {child.allergies.map((allergy, idx) => {
                            let btn = '';
                            if(idx>0){
                                btn=<button type="button" onClick={() => {
                                    this.handleDeleteAllergy(idx);
                                }} className="small">Delete</button>;
                            }
                            return(
                                <div key="text">
                                    <label htmlFor="dynamic-first"></label> 
                                    <input 
                                        className= "text" 
                                        field="allergy" 
                                        id="dynamic-first" 
                                        placeholder = {'Allergy #' + (idx+1)}
                                        value={allergy.allergy} 
                                        onChange={
                                            (e) => {
                                                const tempProfile = this.state.profile; 
                                                tempProfile.child.allergies[idx].allergy = e.target.value; 
                                                this.setState({profile: tempProfile});
                                            } 
                                        }/>
                                    {btn}
                                    <br/>
                                </div>
                            );
                        })}
                        <button 
                            type="button" 
                            className="small"
                            onClick={this.handleAddAllergy} 
                        >Add Allergy</button><br/>  
                        <label htmlFor="history"></label>
                        <input 
                            className = "history" 
                            field="history" 
                            id="history" 
                            placeholder = "History"
                            value={child.history} 
                            onChange={
                                (e) => {
                                    const tempProfile = this.state.profile; 
                                    tempProfile.child.history = e.target.value; 
                                    this.setState({profile: tempProfile});
                                }
                            }
                        />
                        <br/>
                        <button 
                            type="submit" 
                            className="mb-4 btn btn-primary"
                        >
                Save
                        </button>   
                    </div>
                    </div>
                    </p>
                </form>

        );
    }
}
export default ChildForm;