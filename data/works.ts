interface WorksType {
  id: number;
  title: string;
  description: string;
  imgUrls: string[] | [];
  technologies: string[];
  isSelected: boolean;
}

const data: WorksType[] = [
  {
    id: 1,
    title: "Luxspace",
    description:
      "A website where you can find home furniture, build with react, tailwind, and mock API.",
    imgUrls: ["luxspace-preview.png"],
    technologies: ["ReactJS", "TypeScript", "Tailwind", "MockAPI"],
    isSelected: true,
  },
  {
    id: 2,
    title: "TopStore",
    description:
      "Building a website where you can top up your game. Build with the MERN tech stack and you could also set up the database’s content from the Back-end server.",
    imgUrls: ["topstore-preview.png"],
    technologies: ["NextJS", "TypeScript", "NodeJS", "ExpressJS", "MongoDB"],
    isSelected: true,
  },
];

export default data;
