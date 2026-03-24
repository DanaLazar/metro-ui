import styles from "./spinner.module.sass";
import clsx from "clsx";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "white";
  className?: string;
}

export const Spinner = ({
  size = "md",
  variant = "primary",
  className,
}: SpinnerProps) => {
  return (
    <div
      data-testid="spinner"
      data-size={size}
      data-variant={variant}
      className={clsx(
        styles.spinner,
        styles[`spinner--${size}`],
        styles[`spinner--${variant}`],
        className,
      )}
    />
  );
};
