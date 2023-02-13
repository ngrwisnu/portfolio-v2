import Image from "next/image";
import { ButtonLink } from "../ui/button";

const EmptyPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-start text-center md:max-h-[832px] ">
      <div className="row-center relative flex h-[400px] w-full">
        <Image
          src="/assets/images/empty-page.png"
          alt="Illustration"
          width={500}
          height={400}
        />
      </div>
      <div className="mb-8">
        <h2 className="text-neutral-800 text-4xl font-medium">
          This page is under construction
        </h2>
        <p className="text-neutral-400 mt-4 font-normal">
          Meet the designer, he is on his page right now
        </p>
      </div>
      <ButtonLink link="/about" newClassName="btn-link hover:no-underline">
        Meet the designer
      </ButtonLink>
    </div>
  );
};

export default EmptyPage;
