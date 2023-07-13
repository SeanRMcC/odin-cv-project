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
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" />
                <button>Enter</button>
            </div>
        );
    }
}

export default GeneralInfo;