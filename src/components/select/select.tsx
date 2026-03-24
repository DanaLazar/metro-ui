import styles from "./select.module.sass";
import clsx from "clsx";

export type SelectVariant = "primary" | "secondary" | "ghost";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  variant?: SelectVariant;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
}

export const Select = ({
  options,
  value,
  onChange,
  variant = "primary",
  size = "md",
  disabled,
  className,
}: SelectProps) => {
  return (
    <select
      data-variant={variant}
      data-size={size}
      className={clsx(
        styles.select,
        styles[`select--${variant}`],
        styles[`select--${size}`],
        {
          [styles["select--disabled"]]: disabled,
        },
        className,
      )}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
