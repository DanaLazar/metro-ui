import { Button } from "../button/button";
import styles from "./keypad.module.sass";

export type KeypadButton = {
  label: string;
  type:
    | "number"
    | "operation"
    | "clear"
    | "decimal"
    | "equals"
    | "backspace"
    | "submit";
  value?: string;
  span?: number;
};

type KeypadProps = {
  onNumberClick: (value: string) => void;
  onClear: () => void;
  onSubmit: () => void;
};

const buttons: readonly KeypadButton[] = [
  { label: "C", type: "clear", span: 2 },
  { label: "⌫", type: "backspace" },
  { label: "÷", type: "operation" },
  { label: "7", type: "number", value: "7" },
  { label: "8", type: "number", value: "8" },
  { label: "9", type: "number", value: "9" },
  { label: "×", type: "operation" },
  { label: "4", type: "number", value: "4" },
  { label: "5", type: "number", value: "5" },
  { label: "6", type: "number", value: "6" },
  { label: "-", type: "operation" },
  { label: "1", type: "number", value: "1" },
  { label: "2", type: "number", value: "2" },
  { label: "3", type: "number", value: "3" },
  { label: "+", type: "operation", value: "4" },
  { label: "0", type: "number", value: "0", span: 2 },
  { label: ".", type: "decimal" },
  { label: "=", type: "equals" },
];

const getVariant = (type: KeypadButton["type"]) => {
  switch (type) {
    case "operation":
      return "primary";
    case "equals":
      return "dark";
    case "clear":
    case "backspace":
      return "danger";
    default:
      return "secondary";
  }
};

const Keypad = ({ onNumberClick, onClear, onSubmit }: KeypadProps) => {
  const handleClick = (btn: KeypadButton) => {
    switch (btn.type) {
      case "number":
        onNumberClick(btn.value!);
        break;
      case "clear":
        onClear();
        break;
      case "submit":
        onSubmit();
        break;
    }
  };

  return (
    <div className={styles["keypad"]}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant={getVariant(button.type)}
          size="md"
          className={button.span === 2 ? styles["col-span-2"] : ""}
          onClick={() => handleClick(button)}
        >
          {button.label}
        </Button>
      ))}
    </div>
  );
};

export default Keypad;
