import React from "react";
import About from "..";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);
describe("About component", () => {
  //first test
  it("renders", () => {
    render(<About />);
  });
  //second test
  it("matches snapshot DOM node structure", () => {
    // render About
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
