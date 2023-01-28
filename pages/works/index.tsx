import React from "react";
import Contact from "../../components/contact/Contact";
import EmptyPage from "../../components/empty-page";
import ProjectCard from "../../components/project-card";

const Works = () => {
  return (
    <section id="works-page" className="w-screen">
      <div className="container-content flex flex-wrap py-24 max-lg:px-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <Contact />
    </section>
  );
};

export default Works;
