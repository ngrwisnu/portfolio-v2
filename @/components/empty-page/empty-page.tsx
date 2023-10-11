import { Button } from "@/components/ui/button";
import Image from "next/image";

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
        <h2 className="text-4xl font-medium text-neutral-800">
          This page is under construction
        </h2>
        <p className="mt-4 font-normal text-neutral-400">
          Meet the designer, he is on his page right now
        </p>
      </div>
      <Button variant="link">Meet the designer</Button>
    </div>
  );
};

export default EmptyPage;
