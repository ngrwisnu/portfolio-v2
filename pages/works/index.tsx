import React from "react";
import Contact from "../../components/contact/Contact";
import ProjectCard from "../../components/project-card";
import data from "../../data/works";

const Works = () => {
  return (
    <section id="works-page" className="w-screen">
      <div className="container-content py-24 max-lg:px-4">
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
      <Contact />
    </section>
  );
};

export default Works;
