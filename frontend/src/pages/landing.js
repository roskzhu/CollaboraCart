import React, { useEffect } from "react";
import Hero from "../components/hero";
import NavBar from "../components/ui/navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Fade from "react-reveal/Fade";

const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      {/* gradient animations */}
      <div className="absolute z-[0] w-full h-[100%] top-1 left-0">
        <Fade clear delay={500}>
          <div
            className="absolute z-[0] w-1/6 h-3/6 animate-pulse-slow rounded-full"
            style={{
              right: "-184px",
              top: "464px",
              background:
                "linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #8707ff46 100%)",
              mixBlendMode: "multiply",
              filter: "blur(100px)",
              animation: "spin-slow 10s linear infinite",
            }}
          ></div>
          <div
            className="absolute z-[0] w-2/6 h-3/6 animate-pulse-slow rounded-full"
            style={{
              left: "-250px",
              top: "30px",
              background:
                "linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #0037ff3e 50%)",
              mixBlendMode: "multiply",
              filter: "blur(80px)",
              animation: "spin 3s linear infinite",
            }}
          ></div>
        </Fade>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <NavBar />
        <Hero />
      </div>
    </>
  );
};

export default Landing;
