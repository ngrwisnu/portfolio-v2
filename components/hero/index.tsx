import React from "react";
import SosmedLink from "../sosmed-link";

const Hero = () => {
  return (
    <section id="hero" className="w-screen">
      <div className="container-content min-h-screen px-4 py-44 md:px-0">
        <h1 className="text-3xl font-medium leading-[1.125] md:text-7xl">
          Transforming <span className="font-light italic">UI/UX</span> <br />
          <span className="pl-[2px] md:pl-2">Design</span> <br />
          <span className="pl-[3px] leading-[1.2] md:pl-2">
            into Reality <span className="font-light italic">Front-end</span>
          </span>
        </h1>
        <div className="author-info mt-44 flex">
          <div className="author-info__left w-max basis-1/3">
            <div className="left-wrapper w-max">
              <div className="author-info__name flex">
                <h5
                  aria-label="author-name"
                  className="pr-2 text-base font-normal"
                >
                  Ngr Wisnu
                </h5>
                <span className="h-[1px] flex-grow self-center bg-slate-300"></span>
              </div>
              <h6
                aria-label="author-position"
                className="text-base font-light italic"
              >
                Front-end Developer
              </h6>
            </div>
          </div>
          <div className="author-info__social hidden basis-1/3 justify-center md:flex">
            <SosmedLink bgTheme="light" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
