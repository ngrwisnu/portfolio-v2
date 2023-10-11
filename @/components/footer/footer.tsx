import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-neutral-900 px-4">
      <div id="contact" className="flex w-full flex-col items-center py-14">
        <ul className="relative w-full max-w-[1440px] divide-y divide-neutral-100 border-y border-y-neutral-100 text-neutral-100">
          <li className="group relative flex w-full flex-col">
            <Link
              href={"https://github.com/ngrwisnu"}
              className="relative z-10 flex w-full justify-between bg-transparent px-4 py-[22px] group-hover:text-neutral-900"
            >
              GITHUB
              <ArrowUpRight size={16} />
            </Link>
            <span className="absolute h-0 w-full bg-white transition-all duration-200 group-hover:h-full"></span>
          </li>
          <li className="group relative flex w-full flex-col">
            <Link
              href={"mailto:adiprayogongrwisnu@gmail.com"}
              className="relative z-10 flex w-full justify-between bg-transparent px-4 py-[22px] group-hover:text-neutral-900"
            >
              EMAIL
              <ArrowUpRight size={16} />
            </Link>
            <span className="absolute h-0 w-full bg-white transition-all duration-200 group-hover:h-full"></span>
          </li>
          <li className="group relative flex w-full flex-col">
            <Link
              href={"https://www.linkedin.com/in/ngrwisnu"}
              className="relative z-10 flex w-full justify-between bg-transparent px-4 py-[22px] group-hover:text-neutral-900"
            >
              LINKEDIN
              <ArrowUpRight size={16} />
            </Link>
            <span className="absolute h-0 w-full bg-white transition-all duration-200 group-hover:h-full"></span>
          </li>
        </ul>
      </div>
      <div className="flex w-full justify-center">
        <div className="w-full max-w-[1440px] text-xs text-neutral-100">
          &copy; 2023. Ngr Wisnu
        </div>
      </div>
    </footer>
  );
};

export default Footer;
