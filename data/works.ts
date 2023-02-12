export interface WorksType {
  id: number;
  slug: string;
  title: string;
  description: string;
  imgUrls: string[] | [];
  technologies: string[];
  isSelected: boolean;
  gradient?: string;
  linkExternal: string;
  designedBy: string;
  myRole: string;
}

const data: WorksType[] = [
  {
    id: 101,
    slug: "twice-album-page",
    title: "Twice Album Page",
    description:
      "This project was one of required projects from freeCodeCamp to complete Responsive Web Design certification.",
    imgUrls: ["twice-preview.jpg"],
    technologies: ["HTML", "CSS"],
    isSelected: false,
    linkExternal: "https://ngrwisnu.github.io/landing-page-fcc/",
    designedBy: "Ngr Wisnu",
    myRole: "UI Engineer",
  },
  {
    id: 102,
    slug: "idcamp-2022",
    title: "IDCamp 2022",
    description:
      "Web page project where we need to implement some criteria like semantic elements, CSS styling and layouting.",
    imgUrls: ["idcamp-preview.jpg"],
    technologies: ["HTML", "CSS", "JavaScript"],
    isSelected: false,
    linkExternal: "https://ngrwisnu.github.io/idcamp22-review/",
    designedBy: "Ngr Wisnu",
    myRole: "UI Engineer",
  },
  {
    id: 11,
    slug: "luxerior",
    title: "Luxerior",
    description:
      "A website where you can find home furniture, build with react, tailwind, and mock API.",
    imgUrls: [
      "luxerior-preview.png",
      "luxerior-jumbotron.jpg",
      "lx-prev1.jpg",
      "lx-prev2.jpg",
      "lx-prev3.jpg",
      "lx-prev4.jpg",
    ],
    technologies: ["ReactJS", "TypeScript", "Tailwind", "MockAPI"],
    isSelected: true,
    linkExternal: "https://luxerior.netlify.app/",
    gradient:
      "linear-gradient(63.82deg, #D9D9D9 10.51%, rgba(217, 217, 217, 0) 114.24%)",
    designedBy: "BuildWithAngga",
    myRole: "Fullstack Developer",
  },
  {
    id: 12,
    slug: "topstore",
    title: "TopStore",
    description:
      "Building a website where you can top up your game. Build with the MERN tech stack and you could also set up the database’s content from the Back-end server.",
    imgUrls: [
      "topstore-preview.png",
      "topstore-jumbotron.jpg",
      "ts-prev1.jpg",
      "ts-prev2.png",
      "ts-prev3.jpg",
      "ts-prev4.jpg",
      "ts-prev5.jpg",
    ],
    technologies: ["NextJS", "TypeScript", "NodeJS", "ExpressJS", "MongoDB"],
    isSelected: true,
    linkExternal: "#",
    gradient:
      "linear-gradient(63.82deg,#dbdbf4 10.51%,rgba(249, 250, 255, 0.1) 114.24%)",
    designedBy: "BuildWithAngga",
    myRole: "Fullstack Developer",
  },
];

export default data;
