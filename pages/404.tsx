import Link from "next/link";
import Button from "../components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="w-screen h-screen flex col-center ">
      <div className="flex col-center mb-8">
        <h2 className="text-6xl font-light text-neutral-800 font-['Josefin_Sans']">
          404
        </h2>
        <p className="text-neutral-400 mt-4">This page is never exist</p>
      </div>
      <Button link="/">Go to Homepage</Button>
    </div>
  );
};

export default NotFoundPage;
