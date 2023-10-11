import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="w-full px-4 dark:text-white">
      <div className="min-h-screen py-44">
        <h1 className="text-3xl font-medium leading-[1.125] sm:text-5xl md:text-7xl">
          Transforming <span className="font-light italic">UI/UX</span> <br />
          <span className="pl-[2px] md:pl-2">Design</span> <br />
          <span className="pl-[3px] leading-[1.2] md:pl-2">
            into Reality <span className="font-light italic">Front-end</span>
          </span>
        </h1>
        <div className="author-info mt-44 flex w-full justify-center">
          <div className="w-full max-w-[1440px]">
            <div className="flex w-full items-start gap-[22px] md:w-[598px]">
              <span className="flex w-[6px] shrink-0 items-start self-stretch bg-neutral-200"></span>
              <div className="flex flex-1 flex-col items-start gap-[6px]">
                <div
                  aria-label="author-name"
                  className="self-stretch text-lg font-semibold uppercase leading-[30px] tracking-[0.5px] md:text-xl"
                >
                  Ngr Wisnu
                </div>
                <p
                  aria-label="Ngr's description"
                  className="self-stretch text-lg font-normal leading-[30px] md:text-xl"
                >
                  is a web developer, skilled in both front-end and back-end
                  development, with a focus on using JavaScript and its
                  libraries to build modern web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
