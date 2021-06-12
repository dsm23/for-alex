import clsx from "clsx";
import type { FunctionComponent, HTMLAttributes } from "react";

import styles from "./styles.module.css";

type Props = HTMLAttributes<HTMLElement>;

const Small: FunctionComponent<Props> = ({ className, ...props }) => (
  <small className={clsx(styles.small, className)} {...props} />
);

export default Small;
