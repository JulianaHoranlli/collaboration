import React, { useState } from 'react';
import data from './data';
import Question from './Question';

function App() {
  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        {data.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </div>
    </main>
  );
}

export default App;