import React from "react";
import './Phone.css';

const Phone = ({ number, type }) => (
    <div className="phoneNumber">
        <p><b>{type}:</b> {number}</p>
    </div>
);

export default Phone;