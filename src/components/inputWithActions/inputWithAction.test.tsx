import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { InputWithAction } from "./inputWithAction";

it("renders children", () => {
  render(
    <InputWithAction>
      <input />
      <button>Click</button>
    </InputWithAction>,
  );

  expect(screen.getByRole("button")).toBeInTheDocument();
});
