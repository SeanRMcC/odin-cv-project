import React, {Component} from "react";
import "./../styles/App.css";

class WorkInfo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="form">
                <h2>Work</h2>
                <label htmlFor="company-name">Company Name</label>
                <input type="text" id="company-name" name="company-name" value={this.props.company} onChange={this.props.updateCompany}/>
                <label htmlFor="position">Position</label>
                <input type="text" id="position" name="position" value={this.props.position} onChange={this.props.updatePosition}/>
                <label htmlFor="date-employed">Date</label>
                <input type="text" id="date-employed" name="date-employed" value={this.props.workDate} onChange={this.props.updateWorkDate}/>
                <button onClick={this.props.enterWork}>Enter</button>
            </div>
        );
    }
}

export default WorkInfo;