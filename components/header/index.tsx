import Link from "next/link";
import { useState } from "react";
import HamburgerMenu from "../ui/hamburger-menu";

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  const hamburgerHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-screen bg-stone-800">
      <div className="container-content relative md:px-0">
        <div className="flex items-center justify-between py-5 px-4  text-stone-50">
          <Link href="/" className="font-logo z-20 text-3xl font-extralight">
            NGR
          </Link>

          <div className="navigation flex items-center">
            <nav
              className={`absolute right-0 top-0 z-10 h-screen w-screen md:flex md:h-full md:w-auto ${
                !isChecked && "max-md:hidden"
              }`}
            >
              <ul className="flex h-full w-full flex-col items-center justify-center gap-8 bg-stone-800 text-3xl font-light md:flex-row md:justify-start md:bg-transparent md:text-base md:font-normal">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/works">Works</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </nav>
            <HamburgerMenu
              hamburgerHandler={hamburgerHandler}
              newClass="md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
