import About from "@/components/homepage/about";
import Hero from "@/components/homepage/hero";
import Skills from "@/components/homepage/skills";
import SelectedWorks from "@/components/homepage/works/works";
import React from "react";

const Page = () => {
  return (
    <>
      <Hero />
      <Skills />
      <SelectedWorks />
      <About />
    </>
  );
};

export default Page;
