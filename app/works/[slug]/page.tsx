import React from "react";
import data from "../../../data/works";
import {
  ProjectDescription,
  ProjectDetail,
  ProjectGallery,
  ProjectJumbotron,
} from "@/components/works/detail-work";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = data.find((obj) => obj.slug === params.slug);

  return {
    title: `${project?.title} - Project Details`,
    description: `${project?.description}`,
  };
}

const Work = ({ params }: { params: { slug: string } }) => {
  const item = data.find((obj) => obj.slug === params.slug);

  return (
    <ProjectDetail>
      {item && (
        <>
          {/* Jumbotron section */}
          <ProjectJumbotron
            title={item.title}
            image={item.imgUrls[1]}
            webLink={item.linkExternal}
          />

          {/* Description */}
          <ProjectDescription
            description={item.description}
            designedBy={item.designedBy}
            role={item.myRole}
            techs={item.technologies}
          />

          {/* Image gallery */}
          <ProjectGallery images={item.imgUrls.slice(2)} />
        </>
      )}
    </ProjectDetail>
  );
};

export default Work;
