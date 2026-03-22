import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputWithAction } from "./InputWithAction";

const meta: Meta<typeof InputWithAction> = {
  title: "Components/InputWithAction",
  component: InputWithAction,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description: "Input value",
    },
    onChange: {
      action: "changed",
      description: "Called when input value changes",
    },
    label: {
      control: "text",
      description: "Label text",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    buttonLabel: {
      control: "text",
      description: "Primary button text",
    },
    onButtonClick: {
      action: "primary clicked",
      description: "Called when primary button is clicked",
    },
    secondaryButtonLabel: {
      control: "text",
      description: "Secondary button text",
    },
    onSecondaryButtonClick: {
      action: "secondary clicked",
      description: "Called when secondary button is clicked",
    },
    showButtons: {
      control: "boolean",
      description: "Whether to show action buttons",
    },
    autoFocus: {
      control: "boolean",
      description: "Whether input should auto-focus",
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
      description: "Input type",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || "");
    return <InputWithAction {...args} value={value} onChange={setValue} />;
  },
};

export const SimpleInput: Story = {
  ...Template,
  args: {
    placeholder: "Scrie ceva...",
    showButtons: false,
  },
};

export const WithPrimaryButton: Story = {
  ...Template,
  args: {
    placeholder: "Scrie ceva...",
    buttonLabel: "Salvează",
    onButtonClick: () => alert("Salvat!"),
  },
};

export const WithSecondaryButton: Story = {
  ...Template,
  args: {
    placeholder: "Scrie ceva...",
    buttonLabel: "Confirmă",
    onButtonClick: () => alert("Confirmat!"),
    secondaryButtonLabel: "Anulează",
    onSecondaryButtonClick: () => alert("Anulat!"),
  },
};

export const WithLabel: Story = {
  ...Template,
  args: {
    label: "Eticheta",
    placeholder: "Introduceți text...",
    buttonLabel: "Salvează",
    onButtonClick: () => alert("Salvat cu label!"),
  },
};
