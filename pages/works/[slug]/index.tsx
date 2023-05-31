import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import Footer from "../../../components/footer";
import { ButtonLink } from "../../../components/ui/button";
import data from "../../../data/works";
import Swal from "sweetalert2";
import Head from "next/head";

const ProjectDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  function clickHandler() {
    Swal.fire({
      imageUrl: "/assets/images/empty-page.png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Illustration",
      title: "Page Not Found",
      text: "This page is under construction",
      footer: '<a href="/works">Want to see other works?</a>',
      confirmButtonText: "Close",
      confirmButtonColor: "#262626",
    });
  }

  return (
    <Fragment>
      <Head>
        <title>Ngr - Project Details</title>
        <meta
          name="description"
          content="Ngr Wisnu's project details page where you can see the preview of the project, and the tech stack used in the project"
        />
      </Head>
      <section
        id="project-detail"
        className="w-screen dark:text-white max-md:px-4"
      >
        <div className="container-content py-24">
          {data.map((item) => {
            if (item.slug === slug) {
              return (
                <div className="flex flex-col gap-24" key={item.slug}>
                  {/* Hero section */}
                  <div className="flex flex-col items-center gap-12">
                    <h2>{item.title}</h2>
                    <ButtonLink
                      link={item.linkExternal}
                      // @ts-ignore
                      clickHandler={item.linkExternal === "#" && clickHandler}
                      newClassName="btn-outline text-sm capitalize"
                    >
                      Visit Site
                    </ButtonLink>
                    <figure className="flex max-h-[620px] w-full justify-center bg-[#F5F5F5]">
                      <Image
                        src={`/assets/images/${item.imgUrls[1]}`}
                        width={1184}
                        height={620}
                        alt="Jumbotron"
                      />
                    </figure>
                  </div>

                  {/* Description */}
                  <div className="flex w-full flex-wrap gap-8 md:gap-0">
                    <div className="basis-full md:basis-2/3">
                      <div className="detail__description mb-8">
                        <h5>
                          <strong>Description</strong>
                        </h5>
                        <p className="mt-1 dark:text-stone-300 md:w-2/3">
                          {item.description}
                        </p>
                      </div>
                      <div className="detail__more-info flex">
                        <div className="more-info__designed-by basis-1/2 md:basis-1/3">
                          <h5>
                            <strong>Designed By</strong>
                          </h5>
                          <p className="mt-1 dark:text-stone-300">
                            {item.designedBy}
                          </p>
                        </div>
                        <div className="more-info__role basis-1/2 md:basis-1/3">
                          <h5>
                            <strong>Role</strong>
                          </h5>
                          <p className="mt-1 dark:text-stone-300">
                            {item.myRole}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="basis-full md:basis-1/3">
                      <h5>
                        <strong>Build with ....</strong>
                      </h5>
                      <div className="mt-1 flex w-full flex-wrap gap-1">
                        {item.technologies.map((tech: string) => {
                          return (
                            <div
                              className="badge-outline badge badge-lg"
                              key={tech}
                            >
                              {tech}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Image gallery */}
                  <ul className="flex flex-col gap-24">
                    {item.imgUrls.slice(2).map((image) => {
                      return (
                        <li
                          key={image}
                          className="flex max-h-[620px] w-full min-w-[360px] justify-center bg-[#F5F5F5]"
                        >
                          <Image
                            src={`/assets/images/${image}`}
                            width={1184}
                            height={620}
                            alt="gallery"
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            }
          })}
        </div>
        <Footer />
      </section>
    </Fragment>
  );
};

export default ProjectDetail;
