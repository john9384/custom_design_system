import * as React from 'react';
import styles from './CirclePath.module.css';

export const CirclePath = () => (
  <svg className={styles.svg} viewBox="-24 -24 48 48">
    <path
      className={styles.circle}
      cx="0"
      cy="0"
      r="20"
      fill="none"
      strokeWidth="4"
    ></path>
  </svg>
);
