import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Keypad from "./keypad";

describe("Keypad", () => {
  it("calls onNumberClick", () => {
    const onNumberClick = vi.fn();

    render(
      <Keypad
        onNumberClick={onNumberClick}
        onClear={() => {}}
        onSubmit={() => {}}
      />,
    );

    fireEvent.click(screen.getByText("1"));

    expect(onNumberClick).toHaveBeenCalledWith("1");
  });

  it("calls onClear", () => {
    const onClear = vi.fn();

    render(
      <Keypad onNumberClick={() => {}} onClear={onClear} onSubmit={() => {}} />,
    );

    fireEvent.click(screen.getByText("C"));

    expect(onClear).toHaveBeenCalled();
  });

  it("calls onSubmit", () => {
    const onSubmit = vi.fn();

    render(
      <Keypad
        onNumberClick={() => {}}
        onClear={() => {}}
        onSubmit={onSubmit}
      />,
    );

    fireEvent.click(screen.getByText("OK"));

    expect(onSubmit).toHaveBeenCalled();
  });
});
