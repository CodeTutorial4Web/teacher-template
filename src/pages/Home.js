import ".././assets/home.css";
import About from "../compnents/About";
import LatestBooks from "../compnents/LatestBooks";
import LatestCourses from "../compnents/LatestCourses";
import Testimonials from "../compnents/Testimonials";

import Hero from './../compnents/Hero';
import callToAction from './../compnents/CallToAction';
import WhyMe from "../compnents/WhyMe";

export default function Home() {
  return (
    <main className="homePage">
      <Hero />
      <About />
      <WhyMe />
      <LatestCourses />
      <LatestBooks />
      <Testimonials />
      <callToAction />
    
    </main>
  );
}
