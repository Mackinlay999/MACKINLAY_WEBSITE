import React, { useState, useEffect } from "react";

import Scroll_style from "./scroll.module.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={Scroll_style.scroll_to_top}>
      {isVisible && (
        <button onClick={scrollToTop} className={Scroll_style.scroll_button}>
          &#8679;
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
