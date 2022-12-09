import Image from "next/image";
import Button from "../../components/ui/button";
import data from "../../data/about";

interface Contact {
  _id: string;
  name: string;
  linkTo: string;
  icon: string;
}

const AboutPage = () => {
  return (
    <section className="w-screen px-4 pt-20 md:px-0">
      <div className="container-content about grid grid-rows-content md:grid-cols-12">
        {/* Left/Top content */}
        <div
          className="flex flex-col gap-5 md:col-span-4 md:justify-self-center"
          id="left-content"
        >
          <div className="about__photo relative h-32 w-32 overflow-hidden rounded-3xl">
            <Image
              src="/images/black&white.jpg"
              alt="profile picture"
              width={350}
              height={400}
              className="h-full object-cover"
            />
          </div>
          <div className="about__name-label text-neutral-500">
            <h5 className="font-medium text-stone-900">{data.name}</h5>
            <h6>{data.label}</h6>
          </div>
          <div className="about__button-icons">
            <Button isSubmit isDisabled>
              <Image
                src="/images/icons/download.svg"
                alt=""
                width={24}
                height={24}
                className="mr-1 h-[18px] w-[18px]"
              />
              Resume
            </Button>
            <ul className="mt-3 flex gap-3">
              {data.contacts.map((contact: Contact) => (
                <li
                  key={contact._id}
                  className="tooltip tooltip-bottom"
                  data-tip={contact.name}
                >
                  <a href={contact.linkTo}>
                    <Image
                      src={contact.icon}
                      alt={contact.name}
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right/Bottom content */}
        <div
          className="flex flex-col gap-14 pt-14 md:col-span-8 md:pt-0"
          id="right-content"
        >
          <div className="about__description flex flex-col gap-3">
            {data.descriptions.map((content: { [key: string]: string }) => (
              <p key={content._id}>{content.body}</p>
            ))}
          </div>

          {/* Skills & Technologies */}
          <div className="knowledges flex justify-evenly gap-4 md:justify-start md:gap-[116px]">
            <div className="about__skills">
              <h6 className="skills-title">Skills:</h6>
              <ul className="flex flex-col gap-2">
                {data.skills.map((skill: string, idx: number) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="about__technologies">
              <h6 className="skills-title">Technologies:</h6>
              <ul className="flex flex-col gap-2">
                {data.technologies.map((technology: string, idx: number) => (
                  <li key={idx}>{technology}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
