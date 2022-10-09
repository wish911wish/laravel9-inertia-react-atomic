import { ComponentPropsWithoutRef } from "react"
import styles from "./styles.module.css";
import clsx from "clsx";

type Type = 'default' | 'info' | 'warning';
type Props = ComponentPropsWithoutRef<"p"> & {
  size?: 's' | 'm' | 'l';
};


const txtFactory = (type: Type) => ({ className, size = 'm', ...props }: Props) => (
  <p className={clsx(className, styles[size], styles[type])} { ...props } />
);

const Txt = txtFactory('default');
export default Txt;

export const InfoTxt = txtFactory('info');
export const WarningTxt = txtFactory('warning');
