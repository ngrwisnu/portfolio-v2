import React from "react";
import SosmedLink from "../sosmed-link";
import { ButtonLink } from "../ui/button";

const Contact = () => {
  return (
    <div className="contact__contents before:before-el after:after-el relative flex flex-col items-center justify-center gap-8 overflow-hidden rounded-xl bg-black p-6 text-white">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="">Get In Touch</h2>
        <p className="max-w-lg text-base">
          Have you seen his works? Here is his email, you can contact him
          whether you want to ask something or just want to say hello.
        </p>
      </div>
      <ButtonLink
        link="mailto:adiprayogongrwisnu@gmail.com"
        newClassName="btn-outline text-white border-white capitalize"
      >
        Send Email
      </ButtonLink>
      <SosmedLink />
    </div>
  );
};

export default Contact;
