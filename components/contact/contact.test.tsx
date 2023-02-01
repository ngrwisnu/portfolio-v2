/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "./Contact";
import { ButtonLink } from "../ui/button";

describe("Contact section", () => {
  test("renders title for contact section", () => {
    render(<Contact />);

    const titleContact = screen.getByText("get in touch", { exact: false });

    expect(titleContact).toBeInTheDocument();
  });

  test("renders description for contact section", () => {
    render(<Contact />);

    const contactDescription = screen.getByText("Have you seen his works?", {
      exact: false,
    });

    expect(contactDescription).toBeInTheDocument();
  });

  test("renders email button in contact section", () => {
    render(
      <ButtonLink
        link="mailto:adiprayogongrwisnu@gmail.com"
        newClassName="btn-outline"
      >
        Send email
      </ButtonLink>
    );

    const emailButton = screen.getByRole("link");

    expect(emailButton).toBeInTheDocument();
    expect(emailButton).toHaveAttribute(
      "href",
      "mailto:adiprayogongrwisnu@gmail.com"
    );
    expect(emailButton).toHaveClass("btn btn-outline");
  });
});

export {};
