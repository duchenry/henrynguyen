import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";
const Review = () => {
  /* index imply to id */
  const [index, setIndex] = useState(0);

  /* name, job, image and text group into obj and point to people[index] */
  const { name, job, image, text } = people[index];

  /* check function is used when index is overload */
  const checkIndex = (index) => {
    if (index > people.length - 1) {
      return 0;
    }
    if (index < 0) {
      return people.length - 1;
    }
    return index;
  };

  /* next function */
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  /* previous function */
  const prePerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  /* random function */
  const random = () => {
    let randId = Math.floor(Math.random() * people.length);
    if (randId === index) {
      randId += 1; /* avoid the same ID */
    }
    setIndex(() => {
      return checkIndex(randId); //check overload ID
    });
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="name" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-cotainer">
        <button className="prev-btn" onClick={prePerson}>
          <FaChevronLeft />
        </button>
        {/* previous button */}
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
        {/* next button */}
        <button className="random-btn" onClick={random}>
          random
        </button>
        {/* random button */}
      </div>
    </article>
  );
};

export default Review;
