import React, {Component} from "react";
import CompanyInfoCard from "./CompanyInfoCard";
import dollar from "./icons/dollar.png";
import book from "./icons/book.png";
import comments from "./icons/comments.png";
import "./companyInfo.css";

export default class CompanyInfo extends Component{
    render(){
        return (
            <div className="company-info">
                <CompanyInfoCard icon={dollar} title="Value" desc="Buying books can be expensive, especially if you like to read a lot! Here at Book Outlet, we know everyone loves a good bargain. That’s why we have made it our mission to offer you a huge selection of books at fantastic discounted prices of 50-90% off the original list price."/>
                <CompanyInfoCard icon={book} title="Product" desc="Wondering how we manage those discounts? Here’s our secret: our books are marked down because most of them are marked with a small line or dot on the edge by publishers who sell us their returns and excess inventory. The books we sell are new, unread, and in good condition."/>
                <CompanyInfoCard icon={comments} title="Service" desc="We believe that being the bestseller in bargain books is about much more than providing you with great selection and value. We want you to have an enjoyable shopping experience from start to finish! If you have a question or concern, give us a call during business hours. "/>
            </div>
        );
    }
}