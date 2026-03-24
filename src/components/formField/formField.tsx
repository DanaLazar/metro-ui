import styles from "./formField.module.sass";
import clsx from "clsx";

export interface FormFieldProps {
  label?: string;
  error?: string;
  helperText?: string;
  children?: React.ReactNode;
}

export const FormField = ({
  label,
  error,
  helperText,
  children,
}: FormFieldProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}

      <div
        className={clsx(styles.control, {
          [styles["control--error"]]: error,
        })}
      >
        {children}
      </div>

      {(error || helperText) && (
        <span
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
