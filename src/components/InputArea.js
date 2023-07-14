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
                <GeneralInfo />
                <EducationalInfo />
                <WorkInfo />
            </div>
        );
    }
}

export default InputArea;