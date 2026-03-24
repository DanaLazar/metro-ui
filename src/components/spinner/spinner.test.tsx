import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Spinner } from "./spinner";

describe("Spinner Component", () => {
  it("renders correctly", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
  });

  it("applies default props", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status");

    expect(spinner).toHaveAttribute("data-size", "md");
    expect(spinner).toHaveAttribute("data-variant", "primary");
  });

  it("applies different sizes", () => {
    const { rerender } = render(<Spinner size="sm" />);
    let spinner = screen.getByRole("status");
    expect(spinner).toHaveAttribute("data-size", "sm");

    rerender(<Spinner size="lg" />);
    spinner = screen.getByRole("status");
    expect(spinner).toHaveAttribute("data-size", "lg");
  });

  it("applies different variants", () => {
    const { rerender } = render(<Spinner variant="secondary" />);
    let spinner = screen.getByRole("status");
    expect(spinner).toHaveAttribute("data-variant", "secondary");

    rerender(<Spinner variant="white" />);
    spinner = screen.getByRole("status");
    expect(spinner).toHaveAttribute("data-variant", "white");
  });
});
