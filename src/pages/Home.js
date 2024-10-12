import ".././assets/home.css";
import About from "../compnents/homePage/About";
import LatestCourses from "../compnents/homePage/LatestCourses";
import Testimonials from "../compnents/homePage/Testimonials";

import Hero from './../compnents/homePage/Hero';
import WhyUs from "../compnents/homePage/WhyUs";
import NavigateSmallMenu from "../compnents/homePage/NavigateSmallMenu";
import { useState } from "react";
import TopTeachers from "../compnents/homePage/TopTeachers";

export default function Home() {


  const [showBtn, setShowBtn] = useState(false);

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 200) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  });
  
  return (
    <main className="homePage">
      <Hero />
      <LatestCourses />      
      <TopTeachers />
      <WhyUs />
      <About />



    </main>
  );
}
