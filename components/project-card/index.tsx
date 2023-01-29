import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardType {
  linkTo: string | undefined;
  imgUrl: string;
  title: string;
  description: string;
}

const ProjectCard = (props: ProjectCardType) => {
  const { linkTo, imgUrl, title, description } = props;
  return (
    <li className="card-wrapper group relative max-h-[288px] w-auto min-w-[200px] shrink basis-full overflow-hidden rounded px-2 sm:basis-1/2 lg:mb-4 lg:max-w-[384px] lg:basis-1/3">
      <Link href={linkTo!}>
        <Image
          src={`/assets/images/${imgUrl}`}
          width={384}
          height={288}
          alt=""
        />
        <span
          className="absolute inset-0 z-10 hidden bg-black opacity-80 group-hover:block"
          aria-hidden="true"
        ></span>
        <div className="body-content absolute inset-0 z-20 hidden flex-col justify-center px-6 text-white group-hover:flex">
          <h3 className="text-[28px] font-medium">{title}</h3>
          <p className="text-sm font-normal">{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default ProjectCard;
