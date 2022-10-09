import TextBox from '../../Atoms/TextBox'
import Txt, {WarningTxt} from '../../Atoms/Txt'
import { ComponentPropsWithoutRef, ComponentPropsWithRef, useId } from "react"
import styles from "./styles.module.css";
import clsx from "clsx";

type Props = {
  className?: string;
  titleLevel?: 3 | 4 | 5 | 6;
  labelProps: Omit<ComponentPropsWithoutRef<"label">, "htmlFor" | "className">;
  textboxProps: Omit<ComponentPropsWithRef<"input">, "id">;
  description?: string;
  error?: string;
};

const TextBoxWithTitle = ({
  className,
  titleLevel = 3,
  labelProps: { children, ...labelProps },
  textboxProps,
  description,
  error
}: Props) => {
  const descriptionId = useId();
  const errorMessageId = useId();
  return (
    <div className={clsx(className, styles.module)}>
      <label {...labelProps}>
        <span role="heading" aria-level={titleLevel} className={styles.title}>
          {children}
        </span>
        <TextBox
          {...textboxProps}
          className={clsx(textboxProps?.className, styles.textbox)}
          aria-describedby={descriptionId}
          aria-invalid={!!error}
          aria-errormessage={errorMessageId}
        />
      </label>
      <div className={styles.bottom}>
        {description && (
          <Txt id={descriptionId}>{description}</Txt>
        )}
        {error && (
          <WarningTxt id={errorMessageId} className={styles.error}>{error}</WarningTxt>
        )}
      </div>
    </div>
  )
};

export default TextBoxWithTitle;
