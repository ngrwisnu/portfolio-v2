import Image from "next/image";
import data from "../../data/about";

const AboutMe = () => {
  return (
    <section className="w-screen">
      <div className="container-content about grid grid-rows-2 md:grid-cols-12">
        <div
          className="flex flex-col border border-indigo-500 md:col-span-4"
          id="left-content"
        >
          <div className="about__photo relative h-32 w-32 overflow-hidden rounded-full border border-blue-400">
            <Image
              src="/images/black&white.jpg"
              alt="profile picture"
              width={350}
              height={400}
              className="h-full object-cover"
            />
          </div>
          <div className="about__name-label">
            <h5>{data.name}</h5>
            <h6>{data.label}</h6>
          </div>
          <div className="about__button-icons">
            <button>submit</button>
          </div>
        </div>
        <div
          className="border border-cyan-500 md:col-span-8"
          id="right-content"
        >
          <div className="about__description flex flex-col gap-3">
            {data.descriptions.map((content: { [key: string]: string }) => (
              <p key={content._id}>{content.body}</p>
            ))}
          </div>
          <div className="knowledges"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
