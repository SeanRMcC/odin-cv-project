import React from "react";
import "./../styles/App.css";

function CVGeneral(props){
    return (
        <div>
            <div>Applicant: {props.name}</div>
            <div>Email: {props.email}</div>
            <div>Phone: {props.phone}</div>
        </div>
    );
}

export default CVGeneral;