import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import Avatar from "react-avatar";
import {ArrowBackIos, ArrowForwardIos} from "@material-ui/icons";



const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };


const Testimonial = () => {
  return (
    <div className="testimonialslider" style={{display: "flex", justifyContent: "center", marginTop:20}}>
    <div style={{width:'50%'}}>
    <h1 style={{marginBottom:55}}>Testimonial Slide</h1>
      <Slider dots>
        <Card img="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" />
        <Card img="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" />
        <Card img="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" />
      </Slider>
    </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column", textAlign:"center"}}>
      <Avatar src={img} size="120" round={true} style={{marginBottom:30}}/>
      <p style={{marginBottom:7}}>
        Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
        Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
        tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
        fringilla massa. Etiam hendrerit dolor eget rutrum
      </p>
      <p>
        <span
        style={{fontWeight: 500, color: "lightgray", fontStyle:"italic"}}
        >Name</span>, Web Dev
      </p>
    </div>
  );
};

export default Testimonial;
