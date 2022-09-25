import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import Avatar from "react-avatar";

export default class SimpleSlider extends Component {
  render = () => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div
        className="testimonialslider"
        style={{  justifyContent: "center", marginTop: 50, marginBottom:100,display: "flex", paddingBottom:50, paddingTop:20 }}
      >
        <div style={{ width: "60%"}}>
         
          <Slider {...settings}>
        
            <Cards img="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" />
            <Cards img="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(11).webp" />
            <Cards img="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(12).webp" />
          </Slider>
        </div>
      </div>
    );
  };
}

const Cards = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor:"#D3E2FF",
        borderRadius:100,
        paddingBottom:20, 
        paddingTop:30,
        paddingLeft:15,
        paddingRight:15,
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Avatar src={img} size="180" round={true} style={{ marginBottom: 30 }} />
      <p style={{ marginBottom: 15, fontSize:20 }}>
      I got the words and most of the colors for my content rating system from Rated Reads.  I will post some sort of rating for the content of the book kind of like movie ratings. After each content rating, I will add a few descriptions (like they do with movies) about why I thought it should be rated that. 
      </p>
      <p>
        <span
          style={{ fontWeight: 400, color: "darkblue"}}
        >
          Name
        </span>
        , Web Dev
      </p>
    </div>
  );
};

