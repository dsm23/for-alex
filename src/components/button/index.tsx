import clsx from "clsx";
import type { ButtonHTMLAttributes, FunctionComponent } from "react";

import styles from "./styles.module.css";

type Sizes = "xs" | "sm" | "md" | "xl";
type Variants = "dark" | "light";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Sizes;
  variant?: Variants;
}

const Button: FunctionComponent<Props> = ({
  className,
  size = "md",
  variant = "dark",
  ...props
}) => (
  <button
    className={clsx(
      "elevation",
      styles.button,
      styles[size],
      styles[variant],
      className
    )}
    {...props}
  />
);

export default Button;
