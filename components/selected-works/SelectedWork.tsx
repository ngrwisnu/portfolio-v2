import Image from "next/image";
import React from "react";

const SelectedWork = () => {
  return (
    <div className="work-content">
      <div className="work-content__header mb-6 flex flex-col max-md:mx-4 md:flex-row">
        <h2 className="justify-self-start pr-0 max-md:pb-2 md:self-center md:pr-3">
          TopStore
        </h2>
        <div className="line h-[1px] flex-grow self-center bg-slate-300 max-md:w-full"></div>
        <p className="pl-0 pt-0 text-left text-base font-normal max-md:pt-2 md:basis-2/3 md:pl-3 md:pt-6 md:text-right lg:basis-1/3">
          Building a website where you can top up your game. Build with the MERN
          tech stack and you could also set up the database’s content from the
          Back-end server.
        </p>
      </div>
      <div className="work-content__image bg-topstore-gradient flex max-h-[656px] w-full justify-end">
        <Image
          src="/assets/images/topstore-preview.png"
          width={1050}
          height={706}
          alt="Preview"
        />
      </div>
    </div>
  );
};

export default SelectedWork;
