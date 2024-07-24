import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "../pages/about/index";

test("About", () => {
  render(<About />);
  expect(
    screen.getByRole("heading", { level: 1, name: "About Us" })
  ).toBeDefined();
});
