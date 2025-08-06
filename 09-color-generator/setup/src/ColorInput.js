import React from "react";

function ColorInput({ color, onColorChange, onSubmit, error }) {
  return React.createElement(
    "form",
    {
      onSubmit,
      style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" },
    },
    React.createElement("input", {
      type: "color",
      value: color,
      onChange: onColorChange,
      className: "color-picker",
    }),
    React.createElement("input", {
      type: "text",
      value: color,
      onChange: onColorChange,
      className: "text-input",
      maxLength: 7,
      placeholder: "#RRGGBB",
    }),
    React.createElement("button", { type: "submit" }, "Generate Shades"),
    error && React.createElement("p", { className: "error-message" }, error)
  );
}

export default ColorInput;