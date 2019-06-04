import React, {Component} from "react";
import Carousel from "../sections/carousel/Carousel";
import SideBar from "./SideBar";
import Quote from "./Quote";
import "./sections.css";
import BookCards from "./cards/BookCards";

class Sections extends Component{
    render() {
        return (
            <section className="section">
                <Carousel/>
                <SideBar/>
                <Quote />
                <BookCards />
              </section>
            
        )
    }
}

export default Sections;