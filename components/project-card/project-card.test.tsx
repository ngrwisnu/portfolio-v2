/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import ProjectCard from "./index";

describe("Component Project Card", () => {
  test("should renders a list item", () => {
    render(<ProjectCard title="" description="" imgUrl="" linkTo="" />);

    const listItem = screen.getByRole("listitem");

    expect(listItem).toBeInTheDocument();
  });

  test("should renders anchor tag", () => {
    render(<ProjectCard title="" description="" imgUrl="" linkTo="" />);

    const anchorOfTheProject = screen.getByRole("link");

    expect(anchorOfTheProject).toBeInTheDocument();
  });
});

export {};
