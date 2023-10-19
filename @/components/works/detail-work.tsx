import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface ProjectJumbotronProps {
  title: string;
  image: string;
  webLink?: string;
}

interface ProjectDescriptionProps {
  description: string;
  designedBy: string;
  role: string;
  techs: string[];
  details?: React.ReactNode;
}

const ProjectJumbotron = ({ title, image, webLink }: ProjectJumbotronProps) => {
  return (
    <div className="flex flex-col items-center gap-12">
      <h2 className="text-3xl font-medium">{title}</h2>
      {webLink && (
        <Button asChild>
          <Link href={webLink}>Visit Site</Link>
        </Button>
      )}
      <figure className="flex max-h-[620px] w-full justify-center bg-[#F5F5F5]">
        <Image
          src={`/assets/images/${image}`}
          width={1184}
          height={620}
          alt="Jumbotron"
        />
      </figure>
    </div>
  );
};

const ProjectDescription = ({
  description,
  designedBy,
  role,
  techs,
  details,
}: ProjectDescriptionProps) => {
  return (
    <div className="flex w-full flex-wrap gap-8 md:gap-0">
      <div className="order-2 basis-full md:order-1 md:basis-2/3">
        <div className="detail__description mb-8">
          <h5>
            <strong>Description</strong>
          </h5>
          <p className="mt-1 dark:text-stone-300 md:w-2/3">{description}</p>
        </div>
        <div className="detail__more-info flex">
          <div className="more-info__designed-by basis-1/2 md:basis-1/3">
            <h5>
              <strong>Designed By</strong>
            </h5>
            <p className="mt-1 dark:text-stone-300">{designedBy}</p>
          </div>
          <div className="more-info__role basis-1/2 md:basis-1/3">
            <h5>
              <strong>Role</strong>
            </h5>
            <p className="mt-1 dark:text-stone-300">{role}</p>
          </div>
        </div>
        {details && <div className="mt-8 w-full lg:w-3/5">{details}</div>}
      </div>
      <div className="order-1 basis-full md:order-2 md:basis-1/3">
        <h5>
          <strong>Build with</strong>
        </h5>
        <div className="mt-1 flex w-full flex-wrap gap-1">
          {techs.map((tech: string) => {
            return (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ProjectGallery = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const ProjectDetail = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="project-detail" className="w-full px-4 dark:text-white">
      <div className="container-content py-24">
        <div className="flex flex-col gap-24">{children}</div>
      </div>
    </section>
  );
};

export { ProjectDetail, ProjectJumbotron, ProjectDescription, ProjectGallery };
