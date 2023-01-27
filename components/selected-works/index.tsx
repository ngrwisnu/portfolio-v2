import React from "react";
import SelectedWork from "./SelectedWork";

const SelectedWorks = () => {
  return (
    <section className="w-screen">
      <div className="container-content flex flex-col gap-[72px] py-10">
        <SelectedWork />
        <SelectedWork />
      </div>
    </section>
  );
};

export default SelectedWorks;
