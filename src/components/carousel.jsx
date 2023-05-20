import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { Heading, Box, Text, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import cn from "classnames";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({
  images,
  slides,
  speed,
  w,
  h,
  accessibility,
  arrows,
  objectFit,
  fade,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const settings = {
    rows: 1,
    infinite: true,
    speed: speed,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          // dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          // dots: true,
        },
      },
    ],
  };

  function handlePrevSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  function handleNextSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  useEffect(() => {
    // Clear the timeout if the component unmounts or if the currentIndex changes
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  // Set the timeout to change the slide after 5 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, images.length]);

  return (
    <div style={{ position: "relative" }}>
      <Slider
        {...settings}
        accessibility={accessibility}
        arrows={arrows}
        fade={fade}
      >
        {images.map((item, key) => (
          <Box
            key={key}
            w={w}
            h={h}
            maxH="70rem"
            position="relative"
            zIndex="dropdown"
          >
            <Image
              src={item}
              fill
              className={objectFit}
              // className="  m"
              alt="img"
            />
          </Box>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
