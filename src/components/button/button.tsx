import styles from "./button.module.sass";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "dark"
  | "ghost";

export interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "onClick"
> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  loadingText?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  children,
  variant = "primary",
  disabled,
  size = "md",
  isLoading = false,
  loadingText,
  className,
  onClick,
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
      onClick={onClick}
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
