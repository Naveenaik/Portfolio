import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-10">
      <footer className="w-full py-4 text-center bg-[#5a595922]  bottom-0">
        <p className="text-gray-400">
          &copy; {currentYear} Created by Naveena. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
