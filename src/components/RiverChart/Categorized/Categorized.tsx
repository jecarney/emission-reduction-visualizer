import React, { FC } from "react";
import styles from "./Categorized.css";

interface CategorizedProps {}

const Categorized: FC<CategorizedProps> = () => (
  <div className={styles.Categorized}>Categorized Component</div>
);

export default Categorized;
