import React from "react";
import data from "../../../data/works";
import {
  ProjectDescription,
  ProjectDetail,
  ProjectGallery,
  ProjectJumbotron,
  FeatureHistoryPage,
} from "@/components/works/detail-work";
import { Metadata } from "next";
import detail from "@/components/works/blackhoney-detail";
import Gallery from "@/components/works/gallery";
import BlackHoneyGallery from "@/components/works/blackhoney-gallery";

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
          {item.slug === "black-honey" ? (
            <ProjectDescription
              description={item.description}
              designedBy={item.designedBy}
              role={item.myRole}
              techs={item.technologies}
              details={detail}
            />
          ) : (
            <ProjectDescription
              description={item.description}
              designedBy={item.designedBy}
              role={item.myRole}
              techs={item.technologies}
            />
          )}

          {/* Image gallery */}
          <ProjectGallery>
            {item.slug === "black-honey" ? (
              <BlackHoneyGallery images={item.imgUrls} />
            ) : (
              <Gallery images={item.imgUrls.slice(2)} />
            )}
          </ProjectGallery>

          {/* Update history */}
          {item.slug === "black-honey" && (
            <FeatureHistoryPage></FeatureHistoryPage>
          )}
        </>
      )}
    </ProjectDetail>
  );
};

export default Work;
