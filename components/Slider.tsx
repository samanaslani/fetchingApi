import React, { useState, useEffect, useRef } from "react";
import { SliderData } from "./SliderData";
import Image from "next/image";
import Styles from "../styles/Slider.module.scss";
type sliderType = {
  id: number;
  title: string;
  image: string;
};
function Slider() {
  const [activeSlider, setActiveSlider] = useState<number>(1);
  const [changeAnimationLeft, setChangeAnimationLeft] = useState(false);
  const [changeAnimationRight, setChangeAnimationRight] = useState(false);

  // handlePrevSlider
  const handlePrevSlider = (e: React.MouseEvent<HTMLSpanElement>) => {
    setChangeAnimationLeft(true);
    setChangeAnimationRight(false);
    if (activeSlider === 1) {
      setActiveSlider(SliderData.length);
    } else {
      setActiveSlider(activeSlider - 1);
    }
  };
  // handleNextSlider
  const handleNextSlider = (e: React.MouseEvent<HTMLSpanElement>) => {
    setChangeAnimationLeft(false);
    setChangeAnimationRight(true);
    if (activeSlider === SliderData.length) {
      setActiveSlider(1);
    } else {
      setActiveSlider(activeSlider + 1);
    }
  };
  const sliderChangeAuto = useRef<number>(activeSlider);
  useEffect(() => {
    sliderChangeAuto.current = window.setInterval(() => {
      setChangeAnimationLeft(false);
      setChangeAnimationRight(true);
      if (activeSlider === SliderData.length) {
        setActiveSlider(1);
      } else {
        setActiveSlider(activeSlider + 1);
      }
    }, 2000);
    return () => {
      window.clearInterval(sliderChangeAuto.current);
    };
  });
  // handleMouseOver
  const handleMouseOver = () => {
    let arrows = document.querySelectorAll(".arrow");
    Array.from(arrows).map((arrow) => {
      (arrow as HTMLSpanElement).style.visibility = "visible";
      (arrow as HTMLSpanElement).style.opacity = "1";
      (arrow as HTMLSpanElement).style.transition = "all 500ms";
    });
    window.clearInterval(sliderChangeAuto.current);
  };
  // handleMouseLeave
  const handleMouseLeave = () => {
    let arrows = document.querySelectorAll(".arrow");
    Array.from(arrows).map((arrow) => {
      (arrow as HTMLSpanElement).style.visibility = "hidden";
      (arrow as HTMLSpanElement).style.opacity = "0";
      (arrow as HTMLSpanElement).style.transition = "all 500ms";
    });
    sliderChangeAuto.current = window.setInterval(() => {
      setChangeAnimationLeft(false);
      setChangeAnimationRight(true);
      if (activeSlider === SliderData.length) {
        setActiveSlider(1);
      } else {
        setActiveSlider(activeSlider + 1);
      }
    }, 2000);
  };
  // handleSliderByController
  const handleSliderByController = (id: number) => {
    setActiveSlider(id);
  };
  return (
    <div className="container-fluid">
      <div
        className="row "
        style={{ height: "400px", overflow: "hidden" }}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div className="col-12 h-100" style={{ position: "relative" }}>
          {SliderData.map((slider: sliderType) => {
            const sliderStyle =
              slider.id === activeSlider
                ? `visible ${
                    changeAnimationLeft ? Styles.showActiveSliderFromLeft : ""
                  } 
                  ${
                    changeAnimationRight ? Styles.showActiveSliderFromRight : ""
                  } 
                 
                  `
                : `${
                    changeAnimationLeft
                      ? Styles.hideActiveSliderFromLeft
                      : "invisible"
                  }  
                  ${
                    changeAnimationRight
                      ? Styles.hideActiveSliderFromRight
                      : "invisible"
                  }
                     
                  
               `;
            const titleAnimation =
              slider.id === activeSlider ? Styles.sliderTitleAnimation : "";
            return (
              <div
                className={`h-100 w-100  ${sliderStyle}`}
                key={slider.id}
                style={{ position: "absolute", top: "0", left: "0" }}
              >
                <div className={`h-100 w-100`}>
                  <Image
                    src={slider.image}
                    width={100}
                    height={100}
                    alt={slider.title}
                    quality={100}
                    layout="responsive"
                    className="w-100 h-100"
                  />
                </div>
                <span
                  className={`text-danger display-4 fw-bold ${titleAnimation}`}
                  style={{
                    position: "absolute",
                    left: "41%",
                    bottom: "50%",
                    textShadow: "4px 5px 4px white",
                  }}
                >
                  {slider.title}
                </span>
              </div>
            );
          })}
          <span
            className="arrow"
            style={{
              position: "absolute",
              left: "2%",
              bottom: "50%",
              opacity: "0",
              visibility: "hidden",
            }}
            onClick={handlePrevSlider}
          >
            <i className="bi bi-arrow-left-square-fill text-danger fs-3 "></i>
          </span>
          <span
            className="arrow"
            style={{
              position: "absolute",
              right: "2%",
              bottom: "50%",
              opacity: "0",
              visibility: "hidden",
            }}
            onClick={handleNextSlider}
          >
            <i className="bi bi-arrow-right-square-fill text-danger fs-3 "></i>
          </span>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 text-center">
          {SliderData.map((slider) => {
            return (
              <span
                className={`col-12  border border-dark rounded-circle py-1 px-2 me-2 ${activeSlider===slider.id?'bg-dark text-white':'bg-white text-dark'}`}
                key={slider.id}
                onClick={() => handleSliderByController(slider.id)}
                style={{cursor:'pointer'}}
              >
                {slider.id}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Slider;
