import React, {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="InputDiv">
        <label htmlFor={this.props.name}></label>
        <input className="text" field={this.props.name} id={this.props.name} value={this.props.value} onChange={(e) => {this.props.onChange(e.target.value, this.props.index)}}  placeholder ={this.props.placeholder}/>
        </div>)
    }
}

export default Input;