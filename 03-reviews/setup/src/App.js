import React, { useState } from "react";
import data from "./data";
import Review from "./Review";

function App  () {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex >= data.length) {
        newIndex = 0; 
      }
      return newIndex;
    });
  };

  const prevReview = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex < 0) {
        newIndex = data.length - 1;
      }
      return newIndex;
    });
  };

  const randomReview = () => {
    let random = Math.floor(Math.random() * data.length);
    if (random === index) {
      random = (index + 1) % data.length;
    }
    setIndex(random);
  };

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review
          {...data[index]}
          nextReview={nextReview}
          prevReview={prevReview}
          randomReview={randomReview}
        />
      </section>
    </main>
  );
};

export default App;