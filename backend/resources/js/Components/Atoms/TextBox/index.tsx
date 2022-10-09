import { ComponentPropsWithoutRef, forwardRef } from "react"
import styles from "./styles.module.css";
import clsx from "clsx";

export const TextBox = forwardRef<HTMLInputElement,ComponentPropsWithoutRef<"input">>(
  ({ className, ...props }, ref) => (<input type="text" {...props} ref={ref} className={clsx(styles.textbox, className)}/>)
);

export default TextBox;
