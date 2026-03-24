import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormField } from "./formField";
import { Input } from "../input/input";

const meta = {
  title: "Components/FormField",
  component: FormField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <FormField label="Name">
        <Input value={value} onChange={setValue} />
      </FormField>
    );
  },
};

export const Error: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <FormField label="Email" error="Invalid email">
        <Input value={value} onChange={setValue} />
      </FormField>
    );
  },
};

export const HelperText: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <FormField label="Password" helperText="Must be at least 8 characters">
        <Input value={value} onChange={setValue} />
      </FormField>
    );
  },
};

export const WithAction: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <FormField label="Search">
        <div style={{ display: "flex", gap: "8px" }}>
          <Input value={value} onChange={setValue} />
        </div>
      </FormField>
    );
  },
};
