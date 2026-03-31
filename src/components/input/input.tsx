import { forwardRef } from "react";
import styles from "@/components/input/input.module.sass";
import clsx from "clsx";

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  size?: "sm" | "md" | "lg";
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { size = "md", className, disabled, error, value, onChange, ...rest },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        value={value}
        onChange={onChange}
        data-size={size}
        aria-invalid={error || undefined}
        className={clsx(
          styles.input,
          styles[`input--${size}`],
          {
            [styles["input--disabled"]]: disabled,
          },
          className,
        )}
        {...rest}
      />
    );
  },
);
