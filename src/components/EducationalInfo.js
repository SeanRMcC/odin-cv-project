import React, {Component} from "react";
import "./../styles/App.css";

class EducationalInfo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="form">
                <h2>Education</h2>
                <label htmlFor="school">School</label>
                <input type="text" id="school" name="school"/>
                <label htmlFor="concentration">Concentration</label>
                <input type="text" id="concentration" name="concentration"/>
                <label htmlFor="date">Date Range</label>
                <input type="text" id="date" name="date"/>
                <button>Enter</button>
            </div>
        );
    }
}

export default EducationalInfo;