import React from "react";
import { Button } from "../button/button";
import styles from "./InputWithAction.module.sass";

export interface InputWithActionProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  secondaryButtonLabel?: string;
  onSecondaryButtonClick?: () => void;
  showButtons?: boolean;
  autoFocus?: boolean;
  type?: string;
}

export const InputWithAction: React.FC<InputWithActionProps> = ({
  value,
  onChange,
  label,
  placeholder = "",
  buttonLabel,
  onButtonClick,
  secondaryButtonLabel,
  onSecondaryButtonClick,
  showButtons = true,
  autoFocus = false,
  type = "text",
}) => {
  return (
    <div className={styles["input-with-action"]}>
      {label && <label className={styles["iwa-label"]}>{label}</label>}
      <div className={styles["iwa-input-row"]}>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={styles["iwa-input"]}
        />
        {showButtons && onButtonClick && buttonLabel && (
          <Button onClick={onButtonClick} variant="primary" size="md">
            {buttonLabel}
          </Button>
        )}
        {showButtons && secondaryButtonLabel && onSecondaryButtonClick && (
          <Button
            onClick={onSecondaryButtonClick}
            variant="secondary"
            size="md"
          >
            {secondaryButtonLabel}
          </Button>
        )}
      </div>
    </div>
  );
};
