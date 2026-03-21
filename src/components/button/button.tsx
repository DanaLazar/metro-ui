import styles from "./button.module.sass";
import clsx from "clsx";

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
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  variant = "primary",
  disabled,
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`button--${variant}`],
        {
          [styles["button--disabled"]]: disabled,
          [styles["button--lg"]]: size === "lg",
        },
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
