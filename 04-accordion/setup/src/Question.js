import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header className="question-title">
        <h4>{title}</h4>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {showInfo && <p className="question-info">{info}</p>}
    </article>
  );
};

export default Question;