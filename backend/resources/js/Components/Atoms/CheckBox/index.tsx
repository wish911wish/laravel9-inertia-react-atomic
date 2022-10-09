import { ComponentPropsWithoutRef, forwardRef } from "react"
import styles from "./styles.module.css";
import clsx from "clsx";

export const TextBox = forwardRef<HTMLInputElement,ComponentPropsWithoutRef<"input">>(
  ({ className, ...props }, ref) => (<input type="checkbox" {...props} ref={ref} className={clsx(styles.checkbox, className)}/>)
);

export default TextBox;
