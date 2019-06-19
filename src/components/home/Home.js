import React, {Component} from "react";
import Carousel from "./carousel/Carousel";
import SideBar from "./sidebar/SideBar";
import Quote from "./quote/Quote";
import "./home.css";
import BookCards from "./cards/BookCards";
import CompanyCard from "./company/CompanyCard";
import ShopBy from "./shopBy/ShopBy";

class Sections extends Component{
    render() {
        return (
            <section className="section">   
                <Carousel/>
                <SideBar/>
                <Quote />
                <BookCards />
                <ShopBy name="Category"/>
                <ShopBy name="Genre" />
                <CompanyCard/>
              </section>
            
        )
    }
}

export default Sections;