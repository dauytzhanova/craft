import React, {Component} from "react";
import CompanyInfo from "./CompanyInfo";
import "./companyCard.css";
import bckg from "./icons/bckg-company.jpg";

export default class CompanyCard extends Component {
    render() {
        return(
            <div className="company-card">
                <img className="company-bckg" src={bckg}></img>
                <CompanyInfo/>
             </div>
        );
    }
}