import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-200 rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 absolute bottom-0 left-0">
        <span className="text-base text-gray-500 sm:text-center">
          © 2024{" "}
          <a
            href="https://alnickclores.github.io/alnickcloresdev/src/index.html"
            className="hover:underline"
          >
            Alnick
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
