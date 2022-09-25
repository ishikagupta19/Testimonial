import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import React, { Component } from "react";
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
        style={{ display: "flex", justifyContent: "center", marginTop: 50, marginBottom:100 }}
      >
        <div style={{ width: "50%" }}>
          <h1 style={{ marginBottom: 55 }}>Testimonial Slide</h1>
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
        flexDirection: "column",

        textAlign: "center",
      }}
    >
      <Avatar src={img} size="180" round={true} style={{ marginBottom: 30 }} />
      <p style={{ marginBottom: 15, fontSize:20 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        <span
          style={{ fontWeight: 500, color: "lightgray", fontStyle: "italic" }}
        >
          Name
        </span>
        , Web Dev
      </p>
    </div>
  );
};
