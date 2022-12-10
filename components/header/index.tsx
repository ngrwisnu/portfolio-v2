import Link from "next/link";
import HamburgerMenu from "../ui/hamburger-menu";

const Header = () => {
  return (
    <div className="w-screen">
      <div className="container-content bg-stone-800">
        <div className="flex items-center justify-between py-5 text-stone-50">
          <Link href="/">
            <span>NGR</span>
          </Link>

          <div className="navigation flex items-center">
            <nav>
              <ul className="flex">
                <li>Project</li>
                <li>About</li>
              </ul>
            </nav>
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
