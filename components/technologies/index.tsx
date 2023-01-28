import React from "react";
import TechItem from "./TechItem";

const Technologies = () => {
  return (
    <section id="technologies" className="w-screen">
      <div className="container-content py-24">
        <div className="logo-content flex justify-center gap-12 max-md:flex-wrap">
          <TechItem imageUrl="figma" width={45} />
          <TechItem imageUrl="javascript" />
          <TechItem imageUrl="react" />
          <TechItem imageUrl="nextjs" />
          <TechItem imageUrl="typescript" />
          <TechItem imageUrl="tailwindcss" />
          <TechItem imageUrl="bootstrap" />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
