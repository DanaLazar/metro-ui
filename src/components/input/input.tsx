import styles from "./input.module.sass";
import clsx from "clsx";

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
  disabled,
  size = "md",
  className,
}: InputProps) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      data-size={size}
      className={clsx(
        styles.input,
        styles[`input--${size}`],
        {
          [styles["input--disabled"]]: disabled,
        },
        className,
      )}
    />
  );
};
