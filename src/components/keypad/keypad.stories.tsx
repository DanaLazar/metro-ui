import type { Meta, StoryObj } from "@storybook/react-vite";
import { Keypad, type KeypadButton } from "@/components/keypad/keypad";

const meta: Meta<typeof Keypad> = {
  title: "Components/Keypad",
  component: Keypad,
};

export default meta;

type Story = StoryObj<typeof Keypad>;

export const Default: Story = {
  args: {
    onKeyPress: (key: KeypadButton) => {
      switch (key.type) {
        case "number":
          console.log("number:", key.value);
          break;
        case "operation":
          console.log("operation:", key.label);
          break;
        case "decimal":
          console.log("decimal");
          break;
        case "equals":
          console.log("equals");
          break;
        case "clear":
          console.log("clear");
          break;
        case "backspace":
          console.log("backspace");
          break;
      }
    },
  },
};
