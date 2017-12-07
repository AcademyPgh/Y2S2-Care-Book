import React, { Component } from 'react';

class DropDown extends Component {
    constructor(props) {
        super(props);
    }
render () {
    return (
        <label>
            <select value={this.props.value} onChange={(e) => {this.props.onChange(e.target.value, this.props.index);}}>
                <option value="parent">Parent</option>
                <option value="legalGuardian">Legal Guardian</option>
                <option value="family">Family</option>
                <option value="other">Other</option>
            </select>
        </label>
    );
}
}
export default DropDown;