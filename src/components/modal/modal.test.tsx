import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Modal } from "./modal";

describe("Modal Component", () => {
  it("does not render when isOpen is false", () => {
    render(
      <Modal isOpen={false} title="Test" onClose={() => {}}>
        Content
      </Modal>,
    );
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });

  it("renders title and children when isOpen is true", () => {
    render(
      <Modal isOpen={true} title="Test Modal" onClose={() => {}}>
        Hello
      </Modal>,
    );
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = vi.fn();
    render(
      <Modal isOpen={true} title="Test" onClose={onClose}>
        Content
      </Modal>,
    );

    const closeButton = screen.getByText("✕");
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
