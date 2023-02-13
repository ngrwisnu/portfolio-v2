import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import HamburgerMenu from "../ui/hamburger-menu";

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);

  const router = useRouter();
  const pid = router.pathname;

  const hamburgerHandler = (e: any) => {
    setIsChecked(e.target.checked);
  };

  const navLinkHandler = () => {
    setIsChecked(false);
  };

  const headerController = () => {
    if (typeof window != "undefined") {
      if (
        // @ts-ignore
        window.scrollY > lastScrollY
      ) {
        setIsShow(false);
      } else {
        if (window.scrollY < lastScrollY) {
          setIsShow(true);
        }
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
      className={`fixed w-screen bg-stone-800 ${
        !isShow ? "-top-full" : "top-0"
      } z-30 transition-all delay-150 duration-700 ease-in-out`}
    >
      <div className="container-content relative md:px-0">
        <header className="flex items-center justify-between py-5 px-4 text-stone-50">
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
                  <Link
                    href="/"
                    className={`${pid === "/" && "text-stone-300"}`}
                    onClick={navLinkHandler}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/works"
                    className={`${pid === "/works" && "text-stone-300"}`}
                    onClick={navLinkHandler}
                  >
                    Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`${pid === "/about" && "text-stone-300"}`}
                    onClick={navLinkHandler}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
            <HamburgerMenu
              hamburgerHandler={hamburgerHandler}
              isChecked={isChecked}
              newClass="md:hidden"
            />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
