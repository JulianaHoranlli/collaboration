import React from "react";
import { FaQuoteRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Review = ({ name, job, image, text, nextReview, prevReview, randomReview }) => {
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>
          <FaArrowLeft />
        </button>
        <button className="next-btn" onClick={nextReview}>
          <FaArrowRight />
        </button>
      </div>

      <button className="random-btn" onClick={randomReview}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;