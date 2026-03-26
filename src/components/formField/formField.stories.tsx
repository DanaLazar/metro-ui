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
  args: {
    id: "formField-default",
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <FormField {...args} label="Name">
        <Input
          id="formField-default-input"
          value={value}
          onChange={(v) => setValue(v)}
        />
      </FormField>
    );
  },
};

export const Error: Story = {
  args: {
    id: "formField-error",
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <FormField {...args} label="Email" error="Invalid email">
        <Input
          id="formField-error-input"
          value={value}
          onChange={(v) => setValue(v)}
        />
      </FormField>
    );
  },
};

export const HelperText: Story = {
  args: {
    id: "formField-helperText",
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <FormField
        {...args}
        label="Password"
        helperText="Must be at least 8 characters"
      >
        <Input
          id="formField-helperText-input"
          value={value}
          onChange={(v) => setValue(v)}
        />
      </FormField>
    );
  },
};

export const WithAction: Story = {
  args: {
    id: "formField-withAction",
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <FormField {...args} label="Search">
        <div style={{ display: "flex", gap: "8px" }}>
          <Input
            id="formField-withAction-input"
            value={value}
            onChange={(v) => setValue(v)}
          />
        </div>
      </FormField>
    );
  },
};
