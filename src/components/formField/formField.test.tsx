import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormField } from "./formField";
import styles from "./formField.module.sass";

describe("FormField", () => {
  it("renders label", () => {
    render(
      <FormField label="Email" id="email">
        <input />
      </FormField>,
    );

    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <FormField id="test">
        <input placeholder="test" />
      </FormField>,
    );

    expect(screen.getByPlaceholderText("test")).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(
      <FormField error="Required" id="test">
        <input />
      </FormField>,
    );

    expect(screen.getByText("Required")).toBeInTheDocument();
  });

  it("renders helper text when no error", () => {
    render(
      <FormField helperText="Helpful info" id="test">
        <input />
      </FormField>,
    );

    expect(screen.getByText("Helpful info")).toBeInTheDocument();
  });

  it("applies error class when error exists", () => {
    render(
      <FormField error="Error" id="test">
        <input data-testid="input" />
      </FormField>,
    );

    const control = screen.getByTestId("input").parentElement;
    expect(control).toHaveClass(styles["control--error"]);
  });
});
