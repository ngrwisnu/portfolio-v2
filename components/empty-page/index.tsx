import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";

const EmptyPage = () => {
  return (
    <div className="w-screen h-screen md:max-h-[832px] flex flex-col justify-start items-center text-center ">
      <div className="w-full h-[400px] relative flex row-center">
        <Image
          src="/images/404.png"
          alt="Illustration"
          width={500}
          height={400}
        />
      </div>
      <div className="mb-8">
        <h2 className="text-4xl text-neutral-800 font-medium">
          This page is under construction
        </h2>
        <p className="text-neutral-400 font-normal mt-4">
          You could meet the designer, he is on his page right now
        </p>
      </div>
      <Button link="/about">Meet the designer</Button>
    </div>
  );
};

export default EmptyPage;
