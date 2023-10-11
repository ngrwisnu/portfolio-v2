import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-neutral-900 px-4">
      <div id="contact" className="flex w-full flex-col items-center py-14">
        <ul className="w-full max-w-[1440px] divide-y divide-neutral-100 border-y border-y-neutral-100 text-neutral-100">
          <li className="w-full">
            <Link
              href={"https://github.com/ngrwisnu"}
              className="flex justify-between px-4 py-[22px]"
            >
              GITHUB
              <ArrowUpRight size={16} />
            </Link>
          </li>
          <li className="w-full">
            <Link
              href={"mailto:adiprayogongrwisnu@gmail.com"}
              className="flex justify-between px-4 py-[22px]"
            >
              EMAIL
              <ArrowUpRight size={16} />
            </Link>
          </li>
          <li className="w-full">
            <Link
              href={"https://www.linkedin.com/in/ngrwisnu"}
              className="flex justify-between px-4 py-[22px]"
            >
              LINKEDIN
              <ArrowUpRight size={16} />
            </Link>
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
