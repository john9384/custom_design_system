import styles from './CheckInput.module.css';

type CheckInputProps = {
  label: string;
  name?: string;
  error?: any;
  [x: string]: any;
};

const CheckInput = (props: CheckInputProps) => {
  const { label } = props;
  return (
    <div className={styles.checkField}>
      <label className={styles.container} htmlFor={label}>
        <input type="checkbox" id={label} />
        <span className={styles.checkmark}></span>
      </label>
      <span className={styles.text}>{label}</span>
    </div>
  );
};

export default CheckInput;
