import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderStyle.css";
import React from "react";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    variableWidth: true,
    adaptiveHeight: true.valueOf,
    className: "center",
    centerMode: true,
  };
  return (
    <>
     {/* <div className="feature-section"> */}
<div >
        <Slider {...settings}>
        
        <div className="slide-box" >

            <h2>ADVANCE TECHNOLOGY</h2>

            <p >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex! 
            </p>



            <div className="logo-container">

<img
  className="feature-logo"
  src="images/scientist.svg"
  alt="feature-img"
/>
</div>


          </div>


          <div >
            <img
              className="feature-logo"
              src="images/scientist.svg"
              alt="feature-img"
            />

            <h2>ADVANCE TECHNOLOGY2</h2>

            <p >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex! 
            </p>
          </div>

          <div >
            <img
              className="feature-logo"
              src="images/scientist.svg"
              alt="feature-img"
            />

            <h2>ADVANCE TECHNOLOGY3</h2>

            <p >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex! 
            </p>
          </div>


          <div >
            <img
              className="feature-logo"
              src="images/scientist.svg"
              alt="feature-img"
            />

            <h2>ADVANCE TECHNOLOGY4</h2>

            <p >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex! 
            </p>
          </div>

          <div >
            <img
              className="feature-logo"
              src="images/scientist.svg"
              alt="feature-img"
            />

            <h2>ADVANCE TECHNOLOGY5</h2>

            <p >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex! 
            </p>
          </div>




        </Slider>
     
        </div>
    </>
  );
};
export default ImageSlider;



