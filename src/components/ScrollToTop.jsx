import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Adjust scroll distance as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-5 p-3 bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-full shadow-lg hover:bg-red-600 transition duration-300"
          aria-label="Scroll to top"
        >
          <AiOutlineArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
