"use client";

import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isShow, setIsShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);

  const headerController = () => {
    if (typeof window != "undefined") {
      if (
        // @ts-ignore
        window.scrollY > lastScrollY
      ) {
        setIsShow(false);
      } else if (window.scrollY < lastScrollY) {
        setIsShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerController);

    return () => {
      window.removeEventListener("scroll", headerController);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <div
      ref={headerRef}
      className={`fixed flex w-full bg-transparent px-4 ${
        !isShow ? "-top-full" : "top-0"
      } z-30 transition-all duration-700 delay-150 ease-in-out`}
    >
      <header className="relative flex w-full items-start justify-center self-stretch py-5 text-neutral-100">
        <div className="flex items-center rounded-md bg-[#404040]/90 px-14 backdrop-blur-sm">
          <nav className="w-full">
            <ul className="flex w-full items-center justify-center gap-4 text-xl font-light md:text-base md:font-normal">
              <li className="p-4 text-neutral-300 transition-all duration-200 hover:text-white">
                <Link href="/">Home</Link>
              </li>
              <li className="p-4 text-neutral-300 transition-all duration-200 hover:text-white">
                <Link href="#works">Works</Link>
              </li>
              <li className="p-4 text-neutral-300 transition-all duration-200 hover:text-white">
                <Link href="#about">About</Link>
              </li>
              <li className="p-4 text-neutral-300 transition-all duration-200 hover:text-white">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Button
          className="absolute top-5 right-11 hidden rounded-md md:flex"
          asChild
        >
          <Link href="/assets/docs/ngr-s-resume.pdf" download>
            <ArrowDownToLine size={18} /> Resume
          </Link>
        </Button>
      </header>
    </div>
  );
};

export default Header;
