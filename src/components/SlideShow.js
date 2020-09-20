import React from "react";
// import slideImage1 from "../assets/images/slideImage1.jpg";
import slideImage2 from "../assets/images/slideImage2.jpg";
import slideImage3 from "../assets/images/slideImage3.jpg";
import slideImage4 from "../assets/images/slideImage4.jpg";
import Carousel from "react-bootstrap/Carousel";

export default function SlideShow() {
  return (
    <Carousel className="carouselStyle">
      <Carousel.Item>
        <img className="d-block w-100" src={slideImage3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slideImage2} alt="First slide" />
      </Carousel.Item>   
      <Carousel.Item>
        <img className="d-block w-100" src={slideImage4} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
