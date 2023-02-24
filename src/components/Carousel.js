import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
  const [num, setNum] = useState(0);

  const handleRightArrow = () => {
    if (num < images.length - 1) {
      setNum(num + 1);
    }
  };

  const handleLeftArrow = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  return (
    <div className="container">
      <div className="image-container">
        <div className="arrow left" onClick={handleLeftArrow}><ArrowBackIosIcon /></div>
        <h1 className="title">{images[num].title}</h1>
        <img src={images[num].img} alt=''/>
        <h3 className="subtitle">{images[num].subtitle}</h3>
        <div className="arrow right" onClick={handleRightArrow}><ArrowForwardIosIcon /></div>
      </div>
    </div>
  );
}

export default Carousel;
