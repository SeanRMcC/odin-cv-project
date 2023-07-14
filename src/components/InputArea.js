import React, {Component} from "react";
import GeneralInfo from "./GeneralInfo.js";
import EducationalInfo from "./EducationalInfo.js";
import WorkInfo from "./WorkInfo.js";
import "./../styles/App.css";

class InputArea extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="forms">
                <GeneralInfo
                    name={this.props.name}
                    email={this.props.email}
                    phone={this.props.phone}
                    updateName={this.props.updateName}
                    updateEmail={this.props.updateEmail}
                    updatePhone={this.props.updatePhone}
                />
                <EducationalInfo
                    school={this.props.school}
                    concentration={this.props.concentration}
                    educationDate={this.props.educationDate}
                    updateSchool={this.props.updateSchool}
                    updateConcentration={this.props.updateConcentration}
                    updateEducationDate={this.props.updateEducationDate}
                />
                <WorkInfo 
                    company={this.props.company}
                    position={this.props.position}
                    workDate={this.props.workDate}
                    updateCompany={this.props.updateCompany}
                    updatePosition={this.props.updatePosition}
                    updateWorkDate={this.props.updateWorkDate}
                />
            </div>
        );
    }
}

export default InputArea;