import React, { useState, useEffect } from "react";
import { Button, ButtonRow, SliderContainer } from "./styles.js";
import { data } from "../data/data.js";
import Card from "./Card.jsx";

const Slider = () => {
  const images = data.images;
  const [index, setIndex] = useState(0);

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  let nextImage = () => {
    const newIndex = index + 1;
    if (images.length - 1 === index) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  };

  let prevImage = () => {
    const newIndex = index - 1;
    if (newIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(newIndex);
    }
  };

  function toggle() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    if (seconds === 5) {
      clearInterval(interval);
      setSeconds(0);
      nextImage();
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <SliderContainer>
      <ButtonRow>
        <Button onClick={toggle}>
          {isActive ? "AutoPlay On" : "AutoPlay Off"}
        </Button>
      </ButtonRow>
      {images.length > 0 ? <Card image={images[index]} /> : <p>Loading...</p>}
      <ButtonRow>
        <Button onClick={prevImage}>Prev</Button>
        <Button onClick={nextImage}>Next</Button>
      </ButtonRow>
    </SliderContainer>
  );
};

export default Slider;
