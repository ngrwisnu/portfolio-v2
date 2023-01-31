import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../../../components/footer";
import { ButtonLink } from "../../../components/ui/button";
import data from "../../../data/works";

const ProjectDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  function clickHandler() {
    alert("Not Found");
  }

  return (
    <section id="project-detail" className="w-screen max-md:px-4">
      <div className="container-content py-24">
        {data.map((item) => {
          if (item.slug === slug) {
            return (
              <div className="flex flex-col gap-24" key={item.slug}>
                {/* Hero section */}
                <div className="flex flex-col items-center gap-12">
                  <h2>{item.title}</h2>
                  <ButtonLink
                    link="#"
                    clickHandler={clickHandler}
                    newClassName="btn-outline"
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
                <div className="w-full lg:w-1/2">
                  <div className="detail__description mb-8">
                    <h5>
                      <strong>Description</strong>
                    </h5>
                    <p>{item.description}</p>
                  </div>
                  <div className="detail__more-info flex">
                    <div className="more-info__designed-by basis-1/2 md:basis-1/3">
                      <h5>
                        <strong>Designed By</strong>
                      </h5>
                      <p>{item.designedBy}</p>
                    </div>
                    <div className="more-info__role basis-1/2 md:basis-1/3">
                      <h5>
                        <strong>Role</strong>
                      </h5>
                      <p>{item.myRole}</p>
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
  );
};

export default ProjectDetail;
