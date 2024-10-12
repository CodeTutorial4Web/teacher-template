import { useState } from "react";

export default function NavigateSmallMenu() {
  function scrollIntoView(className) {
    const targetSection = document.querySelector("." + className);
    targetSection.scrollIntoView({ behavior: "smooth" });
  }

  const sections = document.querySelectorAll(".section");
  const listItems = document.querySelectorAll(".navigateMenu li");
  const [activeElement, setActiveElement] = useState(null)

  // ACTIVE SECTION

    window.addEventListener("scroll", () => {


        for (let index = 0; index < listItems.length; index++) {
    
    
          const rect = sections[index].getClientRects()[0];


          if (rect.top <= 0 + 200 && rect.bottom >= 200) {
            listItems[index].classList.add("active");
          }else {
            listItems[index].classList.remove("active" );
          }
        }
    
    
      });


  return (
    <ul
      className="navigateMenu"
      onClick={(e) => {
        if (e.target.matches("li")) {
          scrollIntoView(e.target.getAttribute("data-section"));
        }

        if (e.target.matches("span")) {
          scrollIntoView(e.target.parentNode.getAttribute("data-section"));
        }
      }}
    >
      {/* <span>MENU</span> */}
      <li data-section="hero-container">
        
        <span> Intro</span>
      </li>
      <li data-section="whyUsSection">
        
        <span> Why Us</span>
      </li>
      <li data-section="latestCoursesSection">
        
        <span> Latest Courses</span>
      </li>

      <li data-section="testimonialsSection">
        
        <span> Reviews</span>
      </li>
    </ul>
  );
}
