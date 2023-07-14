import React, {Component} from "react";
import GeneralInfo from "./GeneralInfo.js";
import EducationalInfo from "./EducationalInfo.js";
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
            </div>
        );
    }
}

export default InputArea;