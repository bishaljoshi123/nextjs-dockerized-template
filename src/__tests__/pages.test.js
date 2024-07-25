import { render, screen } from "@testing-library/react";
import About from "../pages/about/index";
import React from "react";
describe("About", () => {
  it("renders a heading", () => {
    render(<About />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
