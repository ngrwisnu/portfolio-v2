import React from "react";
import data from "../../../data/works";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const Work = ({ params }: { params: { slug: string } }) => {
  return (
    <section id="project-detail" className="w-full dark:text-white max-md:px-4">
      <div className="container-content py-24">
        {data.map((item) => {
          if (item.slug === params.slug) {
            return (
              <div className="flex flex-col gap-24" key={item.slug}>
                {/* Hero section */}
                <div className="flex flex-col items-center gap-12">
                  <h2 className="text-3xl font-medium">{item.title}</h2>
                  <Button asChild>
                    <Link href={item.linkExternal}>Visit Site</Link>
                  </Button>
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
                      <strong>Build with</strong>
                    </h5>
                    <div className="mt-1 flex w-full flex-wrap gap-1">
                      {item.technologies.map((tech: string) => {
                        return (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
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
    </section>
  );
};

export default Work;