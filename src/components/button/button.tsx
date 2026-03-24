import styles from "./button.module.sass";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "dark"
  | "ghost";

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  loadingText?: string;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  variant = "primary",
  disabled,
  size = "md",
  isLoading = false,
  loadingText,
  className,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;
  const getSpinnerVariant = () => {
    if (variant === "dark") return "white";
    if (variant === "ghost") return "primary";
    return "white";
  };
  return (
    <button
      data-variant={variant}
      data-size={size}
      className={clsx(
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        {
          [styles["button--disabled"]]: isDisabled,
          [styles["button--loading"]]: isLoading,
        },
        className,
      )}
      disabled={isDisabled}
      {...props}
    >
      {isLoading ? (
        <span className={styles.loadingContent}>
          <Spinner size="sm" variant={getSpinnerVariant()} />
          <span>{loadingText || children}</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
};
