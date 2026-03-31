import styles from "@/components/formField/formField.module.sass";
import clsx from "clsx";
import React from "react";

type InputLikeProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

export interface FormFieldProps {
  label?: string;
  error?: string;
  helperText?: string;
  children?: React.ReactElement<InputLikeProps>;
  id: string;
}

export const FormField = ({
  label,
  error,
  helperText,
  children,
  id,
}: FormFieldProps) => {
  const messageId = `${id}-message`;

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <div
        className={clsx(styles.control, {
          [styles["control--error"]]: error,
        })}
      >
        {children &&
          React.cloneElement(children, {
            id,
            error: !!error,
            "aria-describedby": error || helperText ? messageId : undefined,
          })}
      </div>

      {(error || helperText) && (
        <span
          id={messageId}
          className={clsx(styles.message, {
            [styles.error]: error,
          })}
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
};
