/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Works from ".";

describe("Component Works", () => {
  test("should renders list of projects card", () => {
    render(<Works />);

    const listProject = screen.getAllByRole("listitem");

    expect(listProject).toHaveLength(2);
  });
});

export {};
