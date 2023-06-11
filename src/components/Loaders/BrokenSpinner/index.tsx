import styles from './BrokenSpinner.module.css';

export const BrokenSpinner = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className={styles.ring}></div>
    </div>
  );
};
