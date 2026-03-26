import React from "react";
import styles from "./modal.module.sass";
import { Button } from "../button/button";

export interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  onClose,
  children,
  actions,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles["metro-modal-overlay"]}>
      <div className={styles["metro-modal"]}>
        <div className={styles["metro-modal-header"]}>
          <h2>{title}</h2>
          <Button variant="ghost" onClick={onClose}>
            ✕
          </Button>
        </div>

        <div className={styles["metro-modal-content"]}>{children}</div>

        {actions && (
          <div className={styles["metro-modal-buttons"]}>{actions}</div>
        )}
      </div>
    </div>
  );
};
