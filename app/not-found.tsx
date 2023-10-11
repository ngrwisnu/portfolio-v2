import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="col-center flex h-screen w-full ">
      <div className="col-center mb-8 flex">
        <h2 className="font-['Josefin_Sans'] text-6xl font-light text-neutral-800">
          404
        </h2>
        <p className="mt-4 text-neutral-400">This page is never exist</p>
      </div>
      <Link href={"/"} className="text-slate-900 hover:no-underline">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
