import React, { useState } from "react";

const Input = ({ input, setInput }) => {
  return (
    <input
      className="text-base text-center border-2 border-green-300 radius-sm p-1 font-bold"
      placeholder="Enter Text Here"
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      required
    />
  );
};

export default Input;
