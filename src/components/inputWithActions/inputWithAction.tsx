import styles from "./inputWithAction.module.sass";
import clsx from "clsx";

export interface InputWithActionProps {
  children: React.ReactNode;
  className?: string;
}

export const InputWithAction = ({
  children,
  className,
}: InputWithActionProps) => {
  return <div className={clsx(styles.wrapper, className)}>{children}</div>;
};
