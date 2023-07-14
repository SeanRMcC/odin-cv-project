import React, {Component} from "react";
import "./../styles/App.css";

class GeneralInfo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="form">
                <h2>General Info</h2>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={this.props.name} onChange={this.props.updateName}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={this.props.email} onChange={this.props.updateEmail}/>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={this.props.value} onChange={this.props.updatePhone}/>
                <button>Enter</button>
            </div>
        );
    }
}

export default GeneralInfo;