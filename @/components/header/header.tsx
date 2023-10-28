"use client";

import { Button } from "@/components/ui/button";
import { AlignJustify, ArrowDownToLine, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { desktopMenu, mobileMenu } from "./menu";
import NavLink from "./nav-link";

const Header = () => {
  const [isShow, setIsShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
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

  const hamburgerHandler = () => {
    setIsHamburgerActive(!isHamburgerActive);
  };

  return (
    <div
      ref={headerRef}
      className={`static flex w-full bg-transparent px-4 md:fixed ${
        !isShow ? "-top-full" : "top-0"
      } z-30 transition-all duration-700 delay-150 ease-in-out`}
    >
      <header className="static flex w-full items-start justify-center self-stretch py-5 text-neutral-100 md:relative">
        <div
          id="floating menu"
          className="fixed right-4 bottom-14 z-[999] flex h-12 w-12 items-center justify-center rounded-full bg-[#404040] md:hidden"
          aria-label="nav menu"
          onClick={hamburgerHandler}
        >
          {isHamburgerActive ? (
            <div
              className={`-rotate-90 ${
                isHamburgerActive ? "rotate-0" : "-rotate-90"
              } transition-all duration-200 ${
                isHamburgerActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <X />
            </div>
          ) : (
            <div
              className={`${
                isHamburgerActive ? "rotate-90" : "rotate-0"
              } transition-all duration-200 ${
                isHamburgerActive ? "opacity-0" : "opacity-100"
              }`}
            >
              <AlignJustify />
            </div>
          )}
          <ul
            className={`absolute top-0 ${
              isHamburgerActive ? "right-full" : "left-full"
            } ${
              isHamburgerActive ? "opacity-100" : "opacity-0"
            } z-50 mr-2 flex items-center gap-2 rounded-full bg-[#404040] text-sm transition-all duration-200`}
          >
            {mobileMenu.map((menu) => (
              <NavLink
                key={menu.name}
                className="flex h-12 w-12"
                linkStyle="flex flex-1 flex-col items-center justify-center self-stretch"
                href={menu.href}
                name={menu.name}
                iconOnly
              />
            ))}
          </ul>
        </div>
        <div className="hidden items-center rounded-md bg-[#404040]/90 px-14 backdrop-blur-sm md:flex">
          <nav className="w-full">
            <ul className="flex w-full items-center justify-center gap-4 text-xl font-light md:text-base md:font-normal">
              {desktopMenu.map((menu) => (
                <NavLink
                  key={menu.name}
                  className="p-4 text-neutral-300 transition-all duration-200 hover:text-white"
                  href={menu.href}
                  name={menu.name}
                />
              ))}
            </ul>
          </nav>
        </div>
        <Button
          className="absolute top-5 right-11 hidden rounded-md md:flex"
          asChild
        >
          <a
            href="/assets/docs/CV-Ngr-Wisnu-Adiprayogo.pdf"
            download="CV-Ngr-Wisnu-Adiprayogo"
          >
            <ArrowDownToLine size={18} /> Resume
          </a>
        </Button>
      </header>
    </div>
  );
};

export default Header;
