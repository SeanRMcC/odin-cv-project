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
                <input type="text" id="school" name="school" value={this.props.school} onChange={this.props.updateSchool}/>
                <label htmlFor="concentration">Concentration</label>
                <input type="text" id="concentration" name="concentration" value={this.props.concentration} onChange={this.props.updateConcentration}/>
                <label htmlFor="date">Date Range</label>
                <input type="text" id="date" name="date" value={this.props.educationDate} onChange={this.props.updateEducationDate}/>
                <button>Enter</button>
            </div>
        );
    }
}

export default EducationalInfo;