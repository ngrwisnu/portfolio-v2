import Image from "next/image";
import React from "react";
import { WorksType } from "../../data/works";

interface SelectedWorkType {
  title: string;
  description: string;
  imgUrl: string;
  gradient?: string;
}

const SelectedWork = (props: SelectedWorkType) => {
  const { title, description, imgUrl, gradient } = props;

  const bgGradient = {
    background: gradient,
  };

  return (
    <div className="work-content max-md:mx-4">
      <div className="work-content__header flex flex-col md:flex-row">
        <h2 className="justify-self-start pr-0 max-md:pb-2 md:self-center md:pr-3">
          {title}
        </h2>
        <div className="line h-[1px] flex-grow self-center bg-slate-300 max-md:w-full"></div>
        <p className="pl-0 pt-0 text-left text-base font-normal max-md:pt-2 md:basis-2/3 md:pl-3 md:pt-6 md:text-right lg:basis-1/3">
          {description}
        </p>
      </div>
      <div
        style={bgGradient}
        className="work-content__image mt-6 flex max-h-[656px] w-full justify-end"
      >
        <Image
          src={`/assets/images/${imgUrl}`}
          width={1050}
          height={706}
          alt="Preview"
        />
      </div>
    </div>
  );
};

export default SelectedWork;
