import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SelectedWorkType {
  title: string;
  description: string;
  imgUrl: string;
  gradient?: string;
  slug: string;
}

const SelectedWork = (props: SelectedWorkType) => {
  const { title, description, imgUrl, gradient, slug } = props;

  const bgGradient = {
    background: gradient,
  };

  return (
    <div className="work-content">
      <div className="work-content__header mb-6 flex flex-col md:flex-row">
        <h2 className="justify-self-start pr-0 text-2xl font-medium max-md:pb-2 md:self-center md:pr-3 md:text-[32px]">
          {title}
        </h2>
        <div className="line h-[1px] flex-grow self-center bg-slate-300 max-md:w-full"></div>
        <p className="pl-0 pt-0 text-left text-base font-normal max-md:pt-2 md:basis-2/3 md:pl-3 md:pt-6 md:text-right lg:basis-1/3">
          {description}
        </p>
      </div>
      <Link href={`/works/${slug}`}>
        <div
          style={bgGradient}
          className="work-content__image flex max-h-[656px] w-auto justify-end"
        >
          <Image
            src={`/assets/images/${imgUrl}`}
            width={1080}
            height={702}
            alt="Preview"
          />
        </div>
      </Link>
    </div>
  );
};

export default SelectedWork;
