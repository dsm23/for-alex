import clsx from "clsx";
import type { FunctionComponent, SVGAttributes } from "react";

import styles from "./styles.module.css";

type Props = SVGAttributes<SVGSVGElement>;

const Loading: FunctionComponent<Props> = ({ className, ...props }) => (
  <svg
    className={clsx(styles.svg, className)}
    width="65"
    height="65"
    viewBox="0 0 66 66"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle className={styles.circle} fill="none" cx="33" cy="33" r="30" />
  </svg>
);

export default Loading;
