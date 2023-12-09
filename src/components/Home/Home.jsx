import React from "react";
import Achievements from "./Achievements";
import Support from "./Support";

const Home = () => {
  return (
    <>
      <div class="background"></div>
      <div className="container m-auto px-5 lg:w-8/12 flex flex-col text-center pt-14">
      
        <div
          className="container home border px-5  lg:py-10 py-2 lg:px-20 rounded-lg"
          style={{ backgroundColor: "rgb(195 200 205 / 40%)" }}
        >
          <h2
            className=" font-semibold lg:text-xl italic p-5 "
            style={{ color: "#0de3df" }}
          >
            <span className=" not-italic text-2xl lg:text-4xl text-yellow-300">
              JYOTI
            </span>{" "}
            - A ray of hope
          </h2>
          <p className="text-white font-thin text-sm italic lg:text-xl text-left">
            JYOTI - A Ray of Hope is indeed a wonderful initiative that provides
            quality education to economically-challenged students from nearby
            villages, slums, and tea gardens. It is truly inspiring to see
            college students selflessly dedicate their time and effort to help
            these underprivileged children. <br />
            <br />
            The school runs entirely on the support of college alumni, which
            further demonstrates the spirit of giving and social responsibility.
            <br />
            <br />I hope that JYOTI - A Ray of Hope continues to flourish and
            make a positive impact on the lives of many deserving children.
          </p>
          <br />
          <a
            href="https://www.facebook.com/jgecjyoti/"
            target="_blank"
            rel="noreferrer"
            className=" hover:bg-transparent"
          >
            <button
              type="button"
              className="lg:mt-8 mb-5 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 "
            >
              Learn More
            </button>
          </a>
        </div>
      </div>
      <Achievements />
      <Support />
    </>
  );
};

export default Home;
