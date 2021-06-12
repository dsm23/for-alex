import type { FunctionComponent } from "react";
import { NoContentSVG } from "../../components";

import styles from "./styles.module.css";

const Home: FunctionComponent = () => (
  <div className={styles.grid}>
    <NoContentSVG className={styles.svg} />
  </div>
);

export default Home;
