import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Keypad } from "./keypad";

describe("Keypad", () => {
  it("calls onNumberClick", () => {
    const onNumberClick = vi.fn();
    const onOperationClick = vi.fn();
    const onDecimalClick = vi.fn();
    const onEqualsClick = vi.fn();
    const onBackspaceClick = vi.fn();

    render(
      <Keypad
        onNumberClick={onNumberClick}
        onClear={() => {}}
        onOperationClick={onOperationClick}
        onDecimalClick={() => onDecimalClick()}
        onEqualsClick={() => onEqualsClick()}
        onBackspaceClick={() => onBackspaceClick()}
      />,
    );

    fireEvent.click(screen.getByText("1"));

    expect(onNumberClick).toHaveBeenCalledWith("1");
  });

  it("calls onClear", () => {
    const onClear = vi.fn();
    const onOperationClick = vi.fn();
    const onDecimalClick = vi.fn();
    const onEqualsClick = vi.fn();
    const onBackspaceClick = vi.fn();

    render(
      <Keypad
        onNumberClick={() => {}}
        onClear={onClear}
        onOperationClick={onOperationClick}
        onDecimalClick={() => onDecimalClick()}
        onEqualsClick={() => onEqualsClick()}
        onBackspaceClick={() => onBackspaceClick()}
      />,
    );

    fireEvent.click(screen.getByText("C"));

    expect(onClear).toHaveBeenCalled();
  });
});
