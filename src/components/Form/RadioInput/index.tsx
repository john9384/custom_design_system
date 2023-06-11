import styles from './RadioInput.module.css';
type RadioInputProps = {
  label: string;
  name?: string;
  error?: any;
  [x: string]: any;
};

const RadioInput = (props: RadioInputProps) => {
  const { label, name, ...radioProps } = props;
  return (
    <div className={styles.radioField}>
      <label className={styles.label} htmlFor={label}>
        <input type="radio" id={label} name={name} {...radioProps} />
        <span className={styles.checkmark}></span>
      </label>
      <span className={styles.text}>{label}</span>
    </div>
  );
};

export default RadioInput;
