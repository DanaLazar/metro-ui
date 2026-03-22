import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputWithAction } from "./InputWithAction";

describe("InputWithAction Component", () => {
  it("renders input field with placeholder", () => {
    render(
      <InputWithAction
        value=""
        onChange={() => {}}
        placeholder="Scrie ceva..."
      />,
    );
    const input = screen.getByPlaceholderText("Scrie ceva...");
    expect(input).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(<InputWithAction value="" onChange={() => {}} label="Test Label" />);
    const label = screen.getByText("Test Label");
    expect(label).toBeInTheDocument();
  });

  it("calls onChange when input value changes", async () => {
    const handleChange = vi.fn();
    render(
      <InputWithAction
        value=""
        onChange={handleChange}
        placeholder="Enter text"
      />,
    );
    const input = screen.getByPlaceholderText("Enter text") as HTMLInputElement;
    await userEvent.type(input, "test");
    expect(handleChange).toHaveBeenCalled();
  });

  it("renders primary button when buttonLabel is provided", () => {
    render(
      <InputWithAction
        value=""
        onChange={() => {}}
        buttonLabel="Save"
        onButtonClick={() => {}}
      />,
    );
    const button = screen.getByText("Save");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("data-variant", "primary");
  });

  it("calls onButtonClick when primary button is clicked", async () => {
    const handleClick = vi.fn();
    render(
      <InputWithAction
        value=""
        onChange={() => {}}
        buttonLabel="Save"
        onButtonClick={handleClick}
      />,
    );
    const button = screen.getByText("Save");
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders secondary button when secondaryButtonLabel is provided", () => {
    render(
      <InputWithAction
        value=""
        onChange={() => {}}
        buttonLabel="Save"
        onButtonClick={() => {}}
        secondaryButtonLabel="Cancel"
        onSecondaryButtonClick={() => {}}
      />,
    );
    expect(screen.getByText("Save")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("hides buttons when showButtons is false", () => {
    render(
      <InputWithAction
        value=""
        onChange={() => {}}
        buttonLabel="Save"
        onButtonClick={() => {}}
        showButtons={false}
      />,
    );
    expect(screen.queryByText("Save")).not.toBeInTheDocument();
  });
});
