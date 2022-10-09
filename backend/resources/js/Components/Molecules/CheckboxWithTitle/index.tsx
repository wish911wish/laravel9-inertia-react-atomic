import Checkbox from '../../Atoms/Checkbox'
import { ComponentPropsWithoutRef, ComponentPropsWithRef, useId } from "react"
import Txt, {WarningTxt} from '../../Atoms/Txt'
import styles from "./styles.module.css";
import clsx from "clsx";

type Props = {
  className?: string;
  titleLevel?: 3 | 4 | 5 | 6;
  labelProps: Omit<ComponentPropsWithoutRef<"label">, "htmlFor" | "className">;
  checkboxProps: Omit<ComponentPropsWithRef<"input">, "id">;
  description?: string;
  error?: string;
};

const TextBoxWithTitle = ({
  className,
  titleLevel = 3,
  labelProps: { children, ...labelProps },
  checkboxProps,
  description,
  error
}: Props) => {
  const descriptionId = useId();
  const errorMessageId = useId();
  return (
    <div className={clsx(className, styles.module)}>
      <label {...labelProps} className={styles.label}>
        <Checkbox
          {...checkboxProps}
          className={clsx(checkboxProps?.className, styles.checkbox)}
          aria-describedby={descriptionId}
          aria-invalid={!!error}
          aria-errormessage={errorMessageId}
        />
        <span role="heading" aria-level={titleLevel}>
          {children}
        </span>
      </label>
      <div className={styles.bottom}>
        {error && (
          <WarningTxt id={errorMessageId} className={styles.error}>{error}</WarningTxt>
        )}
      </div>
    </div>
  )
};

export default TextBoxWithTitle;
