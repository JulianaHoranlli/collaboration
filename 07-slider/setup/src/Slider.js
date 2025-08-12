import React, { useState, useEffect, useRef } from "react";
import people from "./data";
import Person, { slideWidth } from "./Person";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = () => {
  const [index, setIndex] = useState(1); 
  const [transitioning, setTransitioning] = useState(true);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);


  const extendedPeople = [
    people[people.length - 1],
    ...people,
    people[0],
  ];

  const goToPrev = () => {
    setIndex((prev) => prev - 1);
    setTransitioning(true);
    restartAutoSlide();
  };

  const goToNext = () => {
    setIndex((prev) => prev + 1);
    setTransitioning(true);
    restartAutoSlide();
  };

 
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      goToNext();
    }, 4000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  const restartAutoSlide = () => {
    stopAutoSlide();
    startAutoSlide();
  };

 
  useEffect(() => {
    if (!transitioning) return;
    const handle = setTimeout(() => {
      if (index === 0) {
        setTransitioning(false);
        setIndex(people.length);
      } else if (index === people.length + 1) {
        setTransitioning(false);
        setIndex(1);
      }
    }, 500); 

    return () => clearTimeout(handle);
  }, [index, transitioning]);

  return (
    <div style={{
      position: "relative",
      width:`${slideWidth}px`,
      margin: "50px auto",
    }}>
  
      <div style={{ overflow: "hidden" }}>
        <div
          ref={trackRef}
          style={{
            display: "flex",
            transform: `translateX(${-index * slideWidth}px)`,
            transition: transitioning ? "transform 0.5s ease" : "none",
          }}
        >
          {extendedPeople.map((person, i) => (
            <Person key={i} person={person} />
          ))}
        </div>
      </div>


      <button
        onClick={goToPrev}
        aria-label="Previous"
        style={{
          position: "absolute",
          top: "50%",
          left: "-30px",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <FaArrowLeft size={30} />
      </button>

      <button
        onClick={goToNext}
        aria-label="Next"
        style={{
          position: "absolute",
          top: "50%",
          right: "-30px",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <FaArrowRight size={30} />
      </button>
    </div>
  );
};

export default Slider;