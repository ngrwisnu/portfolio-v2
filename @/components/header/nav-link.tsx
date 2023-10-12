import Link from "next/link";
import React from "react";
import Icon from "./icon";
import clsx from "clsx";

interface NavLinkProps {
  className?: string;
  linkStyle?: string;
  href: string;
  name?: any;
  iconOnly?: boolean;
}

const NavLink = ({
  className,
  linkStyle,
  name,
  iconOnly = false,
  href,
}: NavLinkProps) => {
  return (
    <li
      className={clsx(
        className,
        name == "Resume" ? "rounded-full bg-neutral-900" : ""
      )}
    >
      <Link href={href} className={linkStyle}>
        {iconOnly ? <Icon name={name} /> : name}
      </Link>
    </li>
  );
};

export default NavLink;
