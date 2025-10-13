import { useState } from "react";
import FormInput from "./Form";
import Loader from "./loader";
import qrImage from "../assets/qr-code.png";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const generateQrCode = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(async () => {
      try {
        const res = await fetch(
          `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${inputValue}`
        );

        if (res.ok) {
          const data = await res.blob();
          const imageUrl = URL.createObjectURL(data);
          setQrCode(imageUrl);
          setInputValue("");
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error generating QR code:", error);
        setIsLoading(false);
      }
    }, 500);
  };

  const downloadQrCode = () => {
    if (!qrCode) return;

    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex flex-col items-center text-center gap-2">
        <div className="m-auto bg-blue-50 p-3 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-qr-code-icon lucide-qr-code text-blue-500"
          >
            <rect width="5" height="5" x="3" y="3" rx="1" />
            <rect width="5" height="5" x="16" y="3" rx="1" />
            <rect width="5" height="5" x="3" y="16" rx="1" />
            <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
            <path d="M21 21v.01" />
            <path d="M12 7v3a2 2 0 0 1-2 2H7" />
            <path d="M3 12h.01" />
            <path d="M12 3h.01" />
            <path d="M12 16v.01" />
            <path d="M16 12h1" />
            <path d="M21 12v.01" />
            <path d="M12 21v-1" />
          </svg>
        </div>
        <h1 className="text-5xl font-bold">Qrafty</h1>
        <p className="text-sm text-slate-700 max-w-xs">
          Create custom QR codes instantly. Enter any URL, text, or data to
          generate your QR code.
        </p>
      </div>
      <div className="p-10 border bg-blue-50 border-slate-300 rounded-lg mt-10 mb-5 shadow-lg">
        {isLoading ? (
          <Loader />
        ) : (
          <img
            className="bg-white p-5 rounded-lg shadow-xl m-auto"
            src={qrCode ? qrCode : qrImage}
            alt="QR Code"
          />
        )}
      </div>

      <FormInput
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onGenerateQrCode={generateQrCode}
      />

      <button
        onClick={downloadQrCode}
        className="flex gap-2 items-center justify-center font-semibold text-slate-700 border border-slate-300 rounded-lg px-4 py-2 mt-5 w-full hover:bg-blue-50 transition-colors duration-300 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-download-icon lucide-download"
        >
          <path d="M12 15V3" />
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <path d="m7 10 5 5 5-5" />
        </svg>{" "}
        <p>Download QR Code</p>
      </button>

      <p className="text-sm text-slate-700 text-center text-pretty mt-10">
        QR codes are generated instantly and never stored on any server.
      </p>
    </>
  );
}

export default Home;
