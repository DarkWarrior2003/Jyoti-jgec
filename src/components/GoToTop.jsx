// import React, { useEffect, useState } from "react";
import React from "react";
const GoToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const clickAndScroll = () => {
    scrollToTop();
  };

  // const [show, setShow] = useState({
  //   display: "none",
  // });

  // const listenToScroll = () => {
  //   let height = 100;
  //   const winScroll =
  //     document.body.scrollTop || document.documentElement.scrollTop;
  //   if (winScroll >= height) {
  //     setShow({ display: "block" });
  //   } else {
  //     setShow({ display: "none" });
  //   }
  // };
  function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 100) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  }
  window.addEventListener("scroll", scrollUp);
  

  return (
    <div class="scrollup" id="scroll-up" onClick={clickAndScroll}>
   
  
   <i class="fa-solid fa-arrow-up fa-beat"></i>
    </div>
    
  );
};

export default GoToTop;
