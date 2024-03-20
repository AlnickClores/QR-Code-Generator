import React, { useState, useEffect } from "react";
import Button from "./SubmitButton";
import Input from "./TextInput";
import Footer from "./Footer";
import { quantum } from "ldrs";

quantum.register();

function Home() {
  const [qr, setQr] = useState("");
  const [input, setInput] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    generateDefaultQr();
  }, []);

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
    setLoader(true);

    setTimeout(async () => {
      try {
        const res = await fetch(
          `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input}`
        );
        if (res.ok) {
          const data = await res.blob();
          const url = URL.createObjectURL(data);
          setQr(url);
          setInput("");
          setLoader(false);
        } else {
          console.log("Failed to generate QR code");
          setLoader(false);
        }
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }, 2500);
  };

  return (
    <>
      <form
        className="flex flex-col justify-center items-center h-screen"
        onSubmit={generateQr}
      >
        <h1 className="text-3xl py-5 font-bold sm:text-5xl">
          QR Code Generator
        </h1>
        <div className="my-20 flex flex-col justify-center items-center">
          {loader ? (
            <l-quantum size="55" speed="1.8" color="#86efac"></l-quantum>
          ) : (
            <>
              {qr && <img src={qr} alt="QR code" />}
              <h1 className="text-center mt-5 text-2xl tracking-[2px] uppercase font-bold">
                Scan Me
              </h1>
            </>
          )}
        </div>
        <Input setInput={setInput} input={input} />
        <Button />
      </form>
    </>
  );
}

export default Home;
