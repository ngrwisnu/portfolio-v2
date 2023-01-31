import React from "react";
import Contact from "../contact/Contact";

const Footer = () => {
  return (
    <footer>
      <div className="container-content flex flex-col items-center">
        <address className="pt-24 pb-12">
          <Contact />
        </address>
        <small>Copyright &copy; 2023.</small>
      </div>
    </footer>
  );
};

export default Footer;
