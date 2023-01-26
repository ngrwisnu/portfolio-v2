import React from "react";
import SosmedLink from "../sosmed-link";
import Button from "../ui/button";

const Contact = () => {
  return (
    <section id="contact" className="w-screen">
      <div className="container-content">
        <div className="contact__contents flex flex-col items-center justify-center gap-8 py-10">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-[32px]">Get In Touch</h2>
            <p className="max-w-lg text-base">
              Have you seen his works? Here is his email, you can contact him
              whether you want to ask something or just want to say hello.
            </p>
          </div>
          <Button isSubmit>Send Email</Button>
          <SosmedLink />
        </div>
      </div>
    </section>
  );
};

export default Contact;
