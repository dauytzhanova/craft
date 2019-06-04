import React, { Component } from "react";
import Slider from "react-slick";
import Button from "../Button";
import "./slick.css"; 
import "./slick-theme.css";
import "./carousel.css";



export default class Carousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      dots: true,
    };
    return (
      <div className="carousel-class">
        <Slider {...settings}>
          <div className="main-page pages">
                <h1 className="main-text-title "> Welcome to <span className="title-custom">Craft</span>!</h1>
                <p className="main-text-desc">Explore book recommendations, author events, gifts, and more from Craft's landmark bookstore.</p>
                <Button name="Explore"/>
        </div>
          <div className="second-page pages">
            <h2 className="second-text-title">WE HAVE OVER 60,000 BOOKS OF ANY GENRES</h2>
            <p className="second-text-desc">Find and shop any book you want with our best online services!</p>
           </div>
          <div className="third-page pages">
          <p className="third-text-desc">BUY YOUR FIRST BOOK AND 
              GET 20% OFF YOUR NEXT PURCHASE</p>
          <Button name="Get It"/>
          </div>
        </Slider>
      </div>
    );
  }
}