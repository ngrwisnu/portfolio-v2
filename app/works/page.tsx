import React from "react";
import data from "../../data/works";
import ProjectCard from "@/components/works/project-card";

const Page = () => {
  return (
    <section id="works-page" className="w-full">
      <div className="container-content min-h-screen py-24 max-lg:px-4">
        <ul className="flex flex-wrap max-sm:gap-4">
          {data.map((work) => {
            if (work.isSelected === false) {
              return (
                <ProjectCard
                  key={work.slug}
                  title={work.title}
                  description={work.description}
                  linkTo={work.linkExternal}
                  imgUrl={work.imgUrls[0]}
                />
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
};

export default Page;
