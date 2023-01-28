export interface WorksType {
  id: number;
  slug: string;
  title: string;
  description: string;
  imgUrls: string[] | [];
  technologies: string[];
  isSelected: boolean;
  gradient?: string;
}

const data: WorksType[] = [
  {
    id: 101,
    slug: "twice-album-page",
    title: "Twice Album Page",
    description:
      "This project was one of required projects from freeCodeCamp to complete Responsive Web Design certification.",
    imgUrls: ["luxspace-preview.png"],
    technologies: ["HTML", "CSS"],
    isSelected: false,
  },
  {
    id: 102,
    slug: "idcamp-2022",
    title: "IDCamp 2022",
    description:
      "Web page project where we need to implement some criteria like semantic elements, CSS styling and layouting.",
    imgUrls: ["luxspace-preview.png"],
    technologies: ["HTML", "CSS", "JavaScript"],
    isSelected: false,
  },
  {
    id: 11,
    slug: "luxspace",
    title: "Luxspace",
    description:
      "A website where you can find home furniture, build with react, tailwind, and mock API.",
    imgUrls: ["luxspace-preview.png"],
    technologies: ["ReactJS", "TypeScript", "Tailwind", "MockAPI"],
    isSelected: true,
    gradient:
      "linear-gradient(63.82deg, #D9D9D9 10.51%, rgba(217, 217, 217, 0) 114.24%)",
  },
  {
    id: 12,
    slug: "topstore",
    title: "TopStore",
    description:
      "Building a website where you can top up your game. Build with the MERN tech stack and you could also set up the database’s content from the Back-end server.",
    imgUrls: ["topstore-preview.png"],
    technologies: ["NextJS", "TypeScript", "NodeJS", "ExpressJS", "MongoDB"],
    isSelected: true,
    gradient:
      "linear-gradient(63.82deg,#dbdbf4 10.51%,rgba(249, 250, 255, 0.1) 114.24%)",
  },
];

export default data;
