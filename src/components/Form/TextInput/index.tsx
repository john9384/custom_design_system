import { Colors } from 'constants/Colors';
import styles from './TextInput.module.css';
import { Icon } from 'components/Icon';
import React from 'react';
import { IconName } from '../../../types';

type TextInputProps = {
  label?: string;
  error?: any;
  iconName?: IconName;
  renderIcon?: () => React.ReactNode;
  [x: string]: any;
};

const TextInput = (props: TextInputProps) => {
  const { label, error, iconName, renderIcon, name, value, ...textInputProps } =
    props;
  return (
    <div className={styles.inputField}>
      <input
        id={name}
        className={styles.input}
        placeholder={label}
        style={{
          backgroundColor: error && Colors.RED100,
          border: error && `1px solid ${Colors.RED200}`,
        }}
        name={name}
        value={value}
        {...textInputProps}
      />
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputIcon}>
        {iconName && <Icon iconName={iconName} color="GRAY500" />}
        {renderIcon && renderIcon()}
      </div>

      {error && (
        <small className={styles.errorWrapper}>
          <span className={styles.errorText}>{error}</span>
        </small>
      )}
    </div>
  );
};

TextInput.displayName = 'TextInput';

export default TextInput;
