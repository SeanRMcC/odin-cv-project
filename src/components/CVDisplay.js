import React from "react";
import CVGeneral from "./CVGeneral.js"
import CVEducation from "./CVEducation.js"
import CVWork from "./CVWork.js"
import "./../styles/App.css";

function CVDisplay(props){
    return (
        <div className="cv">
            <h1>Curriculum Vitae</h1>
            <div className="info-wrapper"> 
                <CVGeneral 
                    name={props.name}
                    email={props.email}
                    phone={props.phone}
                />
                <CVEducation
                    school={props.school}
                    concentration={props.concentration}
                    date={props.educationDate}
                />
                <CVWork
                    company={props.company}
                    position={props.position}
                    date={props.workDate}
                />
            </div>
        </div>
    );
}

export default CVDisplay;