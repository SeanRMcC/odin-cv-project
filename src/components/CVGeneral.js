import React from "react";
import "./../styles/App.css";

function CVGeneral(props){
    return (
        <div className="cv-section">
            <div>{props.name}</div>
            <div>Email: {props.email}</div>
            <div>Phone: {props.phone}</div>
        </div>
    );
}

export default CVGeneral;