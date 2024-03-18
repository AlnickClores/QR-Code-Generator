import React from "react";

const SubmitButton = ({ generateQR }) => {
  return (
    <button
      className="bg-green-300 border-2 border-black rounded py-2 px-3 mt-3 hover:bg-green-200 font-bold"
      onClick={generateQR}
    >
      Generate QR Code
    </button>
  );
};

export default SubmitButton;
