import React, { useEffect } from "react";
import Hero from "../components/hero";
import NavBar from "../components/ui/navbar";
import Aos from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1000">
        <NavBar />
        <Hero />
      </div>
    </>
  );
};

export default Landing;
