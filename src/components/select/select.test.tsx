import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Select } from "./select";

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
];

describe("Select Component", () => {
  it("renders options correctly", () => {
    render(<Select options={options} />);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("applies default variant", () => {
    render(<Select options={options} />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveAttribute("data-variant", "primary");
  });

  it("handles change event", () => {
    const handleChange = vi.fn();
    render(<Select options={options} onChange={handleChange} />);

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "2" },
    });

    expect(handleChange).toHaveBeenCalledWith("2");
  });

  it("is disabled when disabled prop is true", () => {
    render(<Select options={options} disabled />);
    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  it("applies size correctly", () => {
    render(<Select options={options} size="lg" />);
    expect(screen.getByRole("combobox")).toHaveAttribute("data-size", "lg");
  });
});
