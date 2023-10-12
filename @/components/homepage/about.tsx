import React from "react";

const About = () => {
  return (
    <section id="about" className="flex w-full justify-center px-4">
      <div className="container-content flex flex-col gap-10 text-neutral-900">
        <div className="flex w-full items-center">
          <h6>About</h6>
        </div>
        <div className="flex w-full flex-col items-start gap-4 text-lg md:w-1/2 md:text-xl">
          <p>
            I am a curious web developer based in Jambi City, Indonesia. I
            studied Electrical Engineering at Telkom University Bandung,
            Indonesia.
          </p>
          <p>
            I have started learning User Interface and User Experience since
            early 2020. Learning about the process of design thinking,
            deliverables from a UX designer, and designing a good layout and
            visual hierarchy until I could create wireframes, low fidelity, and
            high fidelity mockups.
          </p>
          <p>
            In 2021, I began my journey into web development by learning the
            basics of HTML, CSS, and JavaScript. Since then, I have been
            passionate about front-end development and exploring its libraries
            and frameworks, especially ReactJS and NextJS. I have also been
            learning how to create a modular pages and consume APIs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
