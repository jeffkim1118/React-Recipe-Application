import React from "react";
import "../App.css";

const Alert = ({ alert }) => {
    return(
        <div className="alert">
            <h3 className="alertText">{alert}</h3>
        </div>
    );
};

export default Alert;