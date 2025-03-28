import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App Component", () => {
  test("renders Vite and React logos", () => {
    render(<App />);

    const viteLogo = screen.getByAltText("Vite logo");
    const reactLogo = screen.getByAltText("React logo");

    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  test("increments count on button click", () => {
    render(<App />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("count is 0");

    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 1");

    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 2");
  });
});
