import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="card-wrapper group relative mb-4 max-h-[288px] w-auto min-w-[200px] shrink basis-full overflow-hidden rounded px-2 sm:basis-1/2 lg:max-w-[384px] lg:basis-1/3">
      <Image
        src="/assets/images/twice-preview.jpg"
        width={384}
        height={288}
        alt=""
      />
      <span
        className="absolute inset-0 z-10 hidden bg-black opacity-80 group-hover:block"
        aria-hidden="true"
      ></span>
      <div className="body-content absolute inset-0 z-20 hidden flex-col justify-center px-6 text-white group-hover:flex">
        <h3 className="text-[28px] font-medium">Twice Album Page</h3>
        <p className="text-sm font-normal">
          This project was one of required projects from freeCodeCamp to
          complete Responsive Web Design certification.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
