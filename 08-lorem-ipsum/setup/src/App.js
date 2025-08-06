import React, { useState } from "react";
import paragraphs from "./data";

export default function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = paragraphs.length;
    let amount = Math.max(1, Math.min(count, total));
    setText(paragraphs.slice(0, amount));
  };

  return (
    <main style={{ maxWidth: "600px", margin: "50px auto", padding: "1rem" }}>
      <h3 style={{ textAlign: "center" }}>Gjenerator Paragrafesh</h3>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        <label htmlFor="amount">Numer paragrafesh  </label>
        <input
          type="number"
          id="amount"
          min="1"
          max={paragraphs.length}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          style={{ width: "60px", margin: "0 10px" }}
        />
        <button type="submit">Gjenero</button>
      </form>
      <section>
        {text.map((para, index) => (
          <p key={index} style={{ marginBottom: "1rem", lineHeight: "1.6" }}>
            {para}
          </p>
        ))}
      </section>
    </main>
  );
}