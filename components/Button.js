import React from "react";

const Button = ({ text, color, click }) => (
  <button
    className={`text-md font-semibold flex-grow font-mono border-2 rounded-lg py-2 hover:shadow-md shadow-sm ${
      color && "text-red-400"
    }`}
    onClick={click}
  >
    {text}
  </button>
);

export default Button;
