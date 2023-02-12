import React from "react";
import Contact from "../contact/Contact";

const Footer = () => {
  return (
    <footer>
      <div className="container-content flex flex-col items-center dark:text-stone-300">
        <address className="pt-24 pb-12 not-italic">
          <Contact />
        </address>
        <small>Copyright &copy; 2023.</small>
      </div>
    </footer>
  );
};

export default Footer;
