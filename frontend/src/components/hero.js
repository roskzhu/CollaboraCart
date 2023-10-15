import React from "react";
import Aos from "aos";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import team from "../assets/teams.svg";
import BusinessForm from "../pages/BusinessForm";
import Typewriter from 'typewriter-effect';


const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="relative pt-36">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <svg
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-8"
              data-aos="zoom-y-out"
            >
              Collabora
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800">
                Cart
              </span>
            </h1>
            <p
              className="text-xl text-gray-700 mb-8 "
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              <Typewriter 
            onInit={(typewriter) => {
              typewriter.typeString('Empower your business by joining forces with others.')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(10000)
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
            }}
          />
            </p>

            <div
              className="flex justify-center space-x-4"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <Link
                className="btn text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 py-3 px-6 rounded-full transition-transform transform hover:scale-105"
                to="/BusinessSignUp"
              >
                Get started
              </Link>
              <a
                className="btn text-white bg-gray-900 hover:bg-gray-800 py-3 px-6 rounded-full transition-transform transform hover:scale-105"
                href="https://github.com/roskzhu/CollaboraCart"
              >
                Learn more
              </a>
            </div>
            <div>
              <img
                src={team}
                width={500}
                className="h-auto mx-auto mt-20"
                alt="Team"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
