import React from "react";
import SelectedWork from "./SelectedWork";
import data from "../../data/works";

const SelectedWorks = () => {
  return (
    <section id="selected-works" className="w-screen">
      <div className="container-content flex flex-col gap-24 py-24">
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
