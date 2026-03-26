import type { Meta, StoryObj } from "@storybook/react-vite";
import Keypad from "./keypad";

const meta: Meta<typeof Keypad> = {
  title: "Components/Keypad",
  component: Keypad,
};

export default meta;

type Story = StoryObj<typeof Keypad>;

export const Default: Story = {
  args: {
    onNumberClick: (v) => console.log("number:", v),
    onClear: () => console.log("clear"),
    onSubmit: () => console.log("submit"),
  },
};
