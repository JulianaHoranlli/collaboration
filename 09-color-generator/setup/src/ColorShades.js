import React, { useState, useEffect } from "react";
import ColorInput from "./ColorInput";

const isValidHex = (value) => /^#[0-9A-Fa-f]{6}$/.test(value);

function hexToHSL(hex) {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h *= 60;
  }

  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function hslToCSS(h, s, l) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function ColorShades() {
  const [baseColor, setBaseColor] = useState("#3498db");
  const [shades, setShades] = useState([]);
  const [error, setError] = useState("");

  // Gjeneron nuancat
  const generateShades = (hex) => {
    const hsl = hexToHSL(hex); // hsl vetëm brenda këtu
    const shadesArray = [];
    for (let i = 9; i >= 0; i--) {
      const lightness = 10 + i * 8;
      shadesArray.push(hslToCSS(hsl.h, hsl.s, lightness));
    }
    setShades(shadesArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidHex(baseColor)) {
      setError("Ngjyra nuk është në formatin e saktë (#RRGGBB)");
      return;
    }
    generateShades(baseColor);
    setError("");
  };

  const handleColorChange = (e) => {
    setBaseColor(e.target.value);
  };

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => setError(""), 5000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Color Shade Generator"),
    React.createElement(ColorInput, {
      color: baseColor,
      onColorChange: handleColorChange,
      onSubmit: handleSubmit,
      error: error,
    }),
    React.createElement(
      "div",
      { className: "shade-container" },
      shades.map((shade, i) =>
        React.createElement(
          "div",
          {
            key: i,
            className: "shade-box",
            title: shade,
            style: {
              backgroundColor: shade,
              color: ["90%", "80%", "70%"].some((l) => shade.includes(l))
                ? "#000"
                : "#fff",
            },
          },
          shade
        )
      )
    )
  );
}

export default ColorShades;