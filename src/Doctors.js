import React, { Component } from 'react';
import Profile from './Profile_Data';

  class DoctorForm extends Component{
    constructor(props){
      super(props);
        this.state={
          profile: Profile,
        }
    }

  render(){
    const doctors = this.state.profile.doctors;
    return(
      <div>
      <br/>
        <form id="form2">
        <br/>
        <h2>
          Physician Information
        </h2>
        <br/>
          <label htmlFor="firstName"></label>
            <input 
              className = "text" 
              field="firstName" 
              id="firstName" 
              placeholder = "First Name"
              value ={doctors[0].firstName} 
              onChange={
                e => {
                    var tempProfile = this.state.profile; 
                    tempProfile.doctors[0].firstName = e.target.value; 
                    this.setState({profile: tempProfile})
                }
              } 
            />
          <label htmlFor="lastName"></label>
            <input 
              className = "text" 
              field="lastName" 
              id="lastName" 
              placeholder = "Last Name"
              value={doctors[0].lastName} 
              onChange={
                e => {
                  var tempProfile = this.state.profile; 
                  tempProfile.doctors[0].lastName = e.target.value; 
                  this.setState({profile: tempProfile})
                }
              }  
            />
        <label>
          <select 
            value={doctors[0].label} 
            onChange={
              e => {
                var tempProfile = this.state.profile; 
                tempProfile.doctors[0].label = e.target.value; 
                this.setState({profile: tempProfile})
              }
            }
          >
            <option value="pcp">Primary Care Physician</option>
            <option value="specialist">Specialist</option>
          </select>
        </label>
        <br/>
        <label htmlFor="email"></label>
          <input 
            className = "text" 
            field="email" 
            id="email" 
            placeholder="Email"
            value={doctors[0].email} 
            onChange={
              e => {
                var tempProfile = this.state.profile; 
                tempProfile.doctors[0].email = e.target.value; 
                this.setState({profile: tempProfile})
              }
            } 
          />
        <label>
          <label htmlFor="phone"></label>
            <input 
              className = "text" 
              field="phone" 
              id="phone" 
              placeholder="Phone Number"
              value={doctors[0].phone[0].number} 
              onChange={
                e => {
                  var tempProfile = this.state.profile; 
                  tempProfile.doctors[0].phone[0].number = e.target.value; 
                  this.setState({profile: tempProfile})
                }
              } 
            />
            <label>
              <select 
                value={doctors[0].phone[0].label} 
                onChange={
                  e => {
                    var tempProfile = this.state.profile; 
                    tempProfile.doctors[0].phone[0].label = e.target.value; 
                    this.setState({profile: tempProfile})
                  }
                }
              >
                <option value="home">Home</option>
                <option value="cell">Cellular</option>
                <option value="hospital">Hospital</option>
              </select>
            </label>
            <br/>
                  {/* <select value={doctors[0].addresses[0].label} onChange={e => {var tempProfile = this.state.profile; tempProfile.doctors[0].addresses[0].label = e.target.value; this.setState({profile: tempProfile})}}>
                    <option value="hospital1">Hospital 1</option>
                    <option value="hospital2">Hospital 2</option>
                    <option value="hospital3">Hospital 3</option>
                    </select> */}
        </label>
        <label htmlFor="addressLine1"></label>
          <input 
            className = "text" 
            field="line1" 
            id="line1" 
            placeholder="Address Line 1"
            value={doctors[0].addresses[0].line1} 
            onChange={
              e => {
                var tempProfile = this.state.profile; 
                tempProfile.doctors[0].addresses[0].line1 = e.target.value; 
                this.setState({profile: tempProfile})
              }
            }  
          />
        <label htmlFor="addressLine2" ></label>
          <input 
            className = "text" 
            field="line2" 
            id="line2" 
            placeholder="Address Line 2"
            value={doctors[0].addresses[0].line2} 
            onChange={
              e => {
                var tempProfile = this.state.profile; 
                tempProfile.doctors[0].addresses[0].line2 = e.target.value; 
                this.setState({profile: tempProfile})
              }
            } 
          />
          <br/>
        <label htmlFor="addressCity" ></label>
          <input 
            className = "text" 
            field="city" 
            id="city" 
            placeholder="City"
            value={doctors[0].addresses[0].city} 
            onChange={
              e => {var tempProfile = this.state.profile; 
              tempProfile.doctors[0].addresses[0].city = e.target.value; 
              this.setState({profile: tempProfile})
            }
          } 
        />
        <label htmlFor="addressState" ></label>
          <input 
            className = "text" 
            field="state" 
            id="state" 
            placeholder="State"
            value={doctors[0].addresses[0].state} 
            onChange={
              e => {
                var tempProfile = this.state.profile; 
                tempProfile.doctors[0].addresses[0].state = e.target.value; 
                this.setState({profile: tempProfile})
              }
            } 
          />
        <label htmlFor="addressZip" ></label>
          <input 
            className = "text" 
            field="zip" 
            id="zip" 
            placeholder="Zip Code"
            value={doctors[0].addresses[0].zip} 
            onChange={
              e => {
                var tempProfile = this.state.profile; 
                tempProfile.doctors[0].addresses[0].zip = e.target.value; 
                this.setState({profile: tempProfile})
              }
            } 
          />
          <br/>
        </form>
      </div>
    )
  }
}

export default DoctorForm;