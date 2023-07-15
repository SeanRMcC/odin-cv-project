import React from "react";
import "./../styles/App.css";

function CVEducation(props){
    return (
        <div className="cv-section">
            <div>{props.school}</div>
            <div>Concentration: {props.concentration}</div>
            <div>Date of study: {props.date}</div>
        </div>
    );
}

export default CVEducation;