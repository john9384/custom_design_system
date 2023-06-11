import { BrokenSpinner } from '../BrokenSpinner';
import styles from './Overlay.module.css';

export const OverlayLoader: React.FC = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <BrokenSpinner />
      </div>
    </div>
  );
};
