import React from "react";
import "./companyInfoCard.css";

export default function CompanyInfoCard(props) {
    return (
        <div className="company-info-card">
            <i><img className="info-icon" src={props.icon}></img></i>
            <h4 className="info-title">{props.title}</h4>
            <p className="info-desc">{props.desc}</p>
        </div>
    );
}