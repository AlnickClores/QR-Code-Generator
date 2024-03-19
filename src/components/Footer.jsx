import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-200 rounded-lg w-full absolute bottom-0 left-0 p-4">
      <span className="text-base text-gray-500 sm:text-center">
        © 2024{" "}
        <a
          href="https://alnickclores.github.io/alnickcloresdev/src/index.html"
          className="hover:underline"
        >
          Alnick
        </a>
      </span>
    </footer>
  );
};

export default Footer;
