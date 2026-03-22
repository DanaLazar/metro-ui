import React from "react";
import "./InputWithAction.sass";

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
    <div className="input-with-action">
      {label && <label className="iwa-label">{label}</label>}
      <div className="iwa-input-row">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="iwa-input"
        />
        {showButtons && onButtonClick && buttonLabel && (
          <button onClick={onButtonClick} className="iwa-button primary">
            {buttonLabel}
          </button>
        )}
        {showButtons && secondaryButtonLabel && onSecondaryButtonClick && (
          <button
            onClick={onSecondaryButtonClick}
            className="iwa-button secondary"
          >
            {secondaryButtonLabel}
          </button>
        )}
      </div>
    </div>
  );
};
