import React from "react";
import SelectedWork from "./selected-work";
import data from "../../../../data/works";

const SelectedWorks = () => {
  return (
    <section id="works" className="w-full px-4 dark:text-white">
      <div className="container-content flex flex-col gap-10">
        <h6>Projects</h6>
        {data
          .map((work) => {
            if (work.isSelected === true) {
              return (
                <SelectedWork
                  key={work.slug}
                  title={work.title}
                  description={work.description}
                  imgUrl={work.imgUrls[0]}
                  gradient={work.gradient}
                  slug={work.slug}
                />
              );
            }
          })
          .reverse()}
      </div>
    </section>
  );
};

export default SelectedWorks;
