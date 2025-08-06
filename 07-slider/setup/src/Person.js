import React from "react";

const slideWidth = 300;

export default function Person({ person }) {
  return (
    <div
      style={{
        width: slideWidth,
        flexShrink: 0,
        textAlign: "center",
        padding: 20,
        boxSizing: "border-box",
      }}
    >
      <img
        src={person.image}
        alt={person.name}
        style={{
          borderRadius: "50%",
          width: 150,
          height: 150,
          objectFit: "cover",
          marginBottom: 10,
        }}
      />
      <h2 style={{ margin: "10px 0 5px" }}>{person.name}</h2>
      <h4 style={{ margin: "0 0 10px", color: "#777" }}>{person.title}</h4>
      <p style={{ fontStyle: "italic", color: "#444" }}>
        "{person.quote}"
      </p>
    </div>
  );
}

export { slideWidth };