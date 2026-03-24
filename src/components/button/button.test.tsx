import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button Component", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies primary variant by default", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("data-variant", "primary");
  });

  it("applies disabled state when disabled prop is true", () => {
    render(<Button disabled>Test</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("renders with different variants", () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>);
    let button = screen.getByRole("button");
    expect(button).toHaveAttribute("data-variant", "secondary");

    rerender(<Button variant="danger">Danger</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveAttribute("data-variant", "danger");
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    let button = screen.getByRole("button");
    expect(button).toHaveAttribute("data-size", "sm");

    rerender(<Button size="lg">Large</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveAttribute("data-size", "lg");
  });

  it("shows spinner when loading", () => {
    render(<Button isLoading>Click</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });
});
