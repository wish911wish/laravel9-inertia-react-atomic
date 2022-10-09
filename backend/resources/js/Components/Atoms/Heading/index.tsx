import { ComponentPropsWithoutRef } from "react"
import styles from "./styles.module.css";
import clsx from "clsx";

type HeadingTag = 'h1' | 'h2' |'h3' | 'h4' |'h5' | 'h6'
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

type ComponentProps = ComponentPropsWithoutRef<HeadingTag> & {
  level: HeadingLevel;
  visualLevel?: HeadingLevel;
}
type PresenterProps = ComponentPropsWithoutRef<HeadingTag> & {
  tag: HeadingTag;
  visualLevel: HeadingLevel;
  className?: string
}
type ContainerProps = ComponentProps & {
  presenter: (props: PresenterProps) => JSX.Element
}

export const HeadingPresenter = ({
  tag:Tag,
  visualLevel,
  className,
  ...props
}: PresenterProps) => (
  <Tag className={clsx([styles.h, styles[Tag], className])} { ...props } />
);

export const HeadingUnderlinedPresenter = ({
  tag:Tag,
  visualLevel,
  className,
  ...props
}: PresenterProps) => (
  <Tag className={clsx([styles.h, styles[Tag], styles.underlined, className])} { ...props } />
);

export const HeadingOutlinedPresenter = ({
  tag:Tag,
  visualLevel,
  className,
  ...props
}: PresenterProps) => (
  <Tag className={clsx([styles.h, styles[Tag], styles.outlined, className])} { ...props } />
);

export const HeadingContainer = ({
  presenter,
  level = 2,
  visualLevel,
  ...props
}: ContainerProps) => {
    visualLevel = (typeof visualLevel !== 'undefined') ?  visualLevel : level;
    const tag = `h${ level }` as HeadingTag;
  
  return presenter({ tag, visualLevel, ...props})
};

const Heading = (props: ComponentProps) => (
  <HeadingContainer
    presenter={ presenterProps => <HeadingPresenter { ...presenterProps } /> }
    { ...props }
  />
)
export default Heading;

export const HeadingUnderlined = (props: ComponentProps) => (
  <HeadingContainer
    presenter={ presenterProps => <HeadingUnderlinedPresenter { ...presenterProps } /> }
    { ...props }
  />
)

export const HeadingOutlined = (props: ComponentProps) => (
  <HeadingContainer
    presenter={ presenterProps => <HeadingOutlinedPresenter { ...presenterProps } /> }
    { ...props }
  />
)
