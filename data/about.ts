type AboutDataType = {
  name: string;
  label: string;
  contacts: {
    _id: string;
    name: string;
    linkTo: string;
    icon: string;
  }[];
  descriptions: string;
  skills: string[];
  technologies: string[];
};

const data: AboutDataType = {
  name: "Ngr Wisnu",
  label: "Front-end Developer",
  contacts: [
    {
      _id: "c1",
      name: "Email",
      linkTo: "mailto:eksternalfour@gmail.com",
      icon: "/assets/images/icons/bxs-envelope.svg",
    },
    {
      _id: "c2",
      name: "LinkedIn",
      linkTo: "https://www.linkedin.com/in/ngrwisnu/",
      icon: "/assets/images/icons/bxl-linkedin.svg",
    },
    {
      _id: "c3",
      name: "Github",
      linkTo: "https://github.com/ngrwisnu",
      icon: "/assets/images/icons/bxl-github.svg",
    },
  ],
  descriptions:
    "<p>I am a curious web developer based in Jambi City, Indonesia. I studied Electrical Engineering at Telkom University Bandung, Indonesia.</p><p>I have started learning User Interface and User Experience since early 2020. Learning about the process of design thinking, deliverables from a UX designer, and designing a good layout and visual hierarchy until I could create wireframes, low fidelity, and high fidelity mockups.</p><p>In 2021, I started taking online courses to learn the basics of web programming with HTML, CSS, and JavaScript. Since then, I have been continuing to learn front-end web development.</p>",

  skills: ["Web Design", "Frontend Development", "UI/UX"],
  technologies: [
    "JavaScript",
    "ReactJS",
    "NextJS",
    "TypeScript",
    "TailwindCSS",
    "Bootstrap",
  ],
};

export default data;
