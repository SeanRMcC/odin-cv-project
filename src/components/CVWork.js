import React from "react";
import "./../styles/App.css";

function CVWork(props){
    return (
        <div className="cv-section">
            <div>{props.company}</div>
            <div>Position: {props.position}</div>
            <div>Date of employment: {props.date}</div>
        </div>
    );
}

export default CVWork;