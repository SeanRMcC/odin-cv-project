import React, {Component} from "react";
import GeneralInfo from "./GeneralInfo.js";

class InputArea extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <GeneralInfo />
            </div>
        );
    }
}

export default InputArea;