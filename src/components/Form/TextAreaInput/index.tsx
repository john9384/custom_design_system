import { Colors } from 'constants/Colors';
import styles from './TextAreaInput.module.css';

type TextAreaInputProps = {
  backgroundType?: 'plain' | 'themed';
  label?: string;
  error?: any;
  renderIcon?: () => React.ReactNode;
  [x: string]: any;
};
const TextAreaInput = (props: TextAreaInputProps) => {
  const { label, error, renderIcon, name, value, ...textInputProps } = props;
  return (
    <div className={styles.textareaField}>
      <textarea
        id={name}
        className={styles.textarea}
        placeholder={label}
        style={{
          backgroundColor: error && Colors.RED100,
          border: error && `1px solid ${Colors.RED200}`,
        }}
        name={name}
        value={value}
        {...textInputProps}
        rows={4}
      ></textarea>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}

      {error && (
        <small className={styles.errorWrapper}>
          <span className={styles.errorText}>{error}</span>
        </small>
      )}
    </div>
  );
};

export default TextAreaInput;
