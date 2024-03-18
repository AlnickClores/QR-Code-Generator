import React, { useState, useEffect } from "react";
import Button from "./SubmitButton";
import Input from "./TextInput";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  const [qr, setQr] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    generateDefaultQr();
  }, []); // Run once on component mount

  const generateDefaultQr = async () => {
    try {
      const res = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://alnickclores.github.io/alnickcloresdev/src/index.html`
      );
      if (res.ok) {
        const data = await res.blob();
        const url = URL.createObjectURL(data);
        setQr(url);
      } else {
        console.log("Failed to generate default QR code");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const generateQr = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input}`
      );
      if (res.ok) {
        const data = await res.blob();
        const url = URL.createObjectURL(data);
        setQr(url);
        setInput("");
      } else {
        console.log("Failed to generate QR code");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={generateQr}
      >
        <h1 className="text-3xl py-5 font-bold sm:text-5xl">
          QR Code Generator
        </h1>
        <div className="my-20">
          {qr && <img src={qr} alt="QR code" />}
          <h1 className="text-center mt-5 text-xl tracking-[2px] uppercase ">
            Scan Me
          </h1>
        </div>
        <Input setInput={setInput} input={input} />
        <Button />
      </form>
      <Footer />
    </>
  );
}

export default Home;
