import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import { ButtonLink } from "../../components/ui/button";
import data from "../../data/about";
import parse from "html-react-parser";
import Footer from "../../components/footer";

interface Contact {
  _id: string;
  name: string;
  linkTo: string;
  icon: string;
}

const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Ngr - About</title>
        <meta
          name="description"
          content="Ngr's about page where you can see Ngr's education and his short story about how he jumps into web development"
        />
      </Head>
      <section className="mt-20 w-screen px-4 py-24 pt-20 dark:text-white md:px-0">
        <div className="container-content about grid grid-rows-content sm:grid-cols-12">
          {/* Left/Top content */}
          <div
            className="flex gap-5 max-sm:order-last max-sm:pt-14 sm:col-span-4 sm:flex-col sm:justify-self-center"
            id="left-content"
          >
            <div className="about__photo relative h-32 w-32 overflow-hidden rounded-3xl">
              <Image
                src="/assets/images/cv3.jpg"
                alt="profile picture"
                width={350}
                height={400}
                className="h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 max-sm:basis-1/2">
              <div className="about__name-label text-neutral-500">
                <h5 className="font-medium text-stone-900 dark:text-white">
                  {data.name}
                </h5>
                <h6>{data.label}</h6>
              </div>
              <div className="about__button-icons">
                <ButtonLink
                  link="https://drive.google.com/file/d/1x845s17xTThwjBP46SgCzYvKLEDBVrp8/view?usp=sharing"
                  newClassName="btn-outline group normal-case hover:text-[#cbd5e1] w-full"
                  isDownload
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="mr-1 fill-[#1e293b] group-hover:fill-[#cbd5e1] dark:fill-white dark:group-hover:fill-[#1e293b]"
                  >
                    <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"></path>
                  </svg>
                  Resume
                </ButtonLink>
                <ul className="mt-3 flex gap-3 ">
                  {data.contacts.map((contact: Contact) => (
                    <li
                      key={contact._id}
                      className="tooltip tooltip-bottom rounded-sm p-1 hover:-translate-y-1 hover:shadow-md hover:duration-75 hover:ease-out"
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
          </div>

          {/* Right/Bottom content */}
          <div
            className="flex flex-col gap-14 pt-0 sm:col-span-8"
            id="right-content"
          >
            <div className="about__description flex max-w-[600px] flex-col gap-3">
              {parse(data.descriptions)}
            </div>

            {/* Skills & Technologies */}
            <div className="knowledges flex ">
              <div className="about__skills basis-1/3 max-lg:basis-1/2">
                <h6 className="skills-title">Skills:</h6>
                <ul className="flex flex-col gap-2">
                  {data.skills.map((skill: string, idx: number) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="about__technologies basis-1/3 max-lg:basis-1/2">
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
    </Fragment>
  );
};

export default AboutPage;
