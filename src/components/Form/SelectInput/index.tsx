import { Icon } from 'components/Icon';
import React from 'react';
import styles from './SelectInput.module.css';

type SelectInputProps = {
  backgroundType?: 'plain' | 'themed';
  label?: string;
  options?: any;
  error?: any;
  onSelect?: (name: string, val: string) => void;
  [x: string]: any;
};

const SelectInput = (props: SelectInputProps) => {
  let initLabel;
  const { label, error, name, options, value: initValue, onSelect } = props;
  if (initValue) {
    initLabel = options.find((option: any) => option.value == initValue).label;
  }

  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [value, setValue] = React.useState(initValue);
  const [currLabel, setCurrLabel] = React.useState(label || 'Select');

  const setCurrValue = (index: number) => {
    setValue(options[index].value);
    setCurrLabel(options[index].label);
    setDropdownOpen(false);
    onSelect && onSelect(name, options[index].value);
  };

  React.useEffect(() => {
    setValue(initValue);
    if (initValue) {
      const label = options.find(
        (option: any) => option.value == initValue,
      ).label;
      setCurrLabel(label);
    }
  }, [value]);

  return (
    <div
      className={styles.selectField}
      onClick={() => setDropdownOpen(!dropdownOpen)}
    >
      <input className={styles.selectInputValue} defaultValue={initValue} />
      <div className={`${styles.select} ${dropdownOpen && styles.isActive}`}>
        <span>{initLabel || currLabel}</span>
        {dropdownOpen && (
          <div className={styles.selectDropdown}>
            {options.map((option: any, index: number) => (
              <span key={option.label} onClick={() => setCurrValue(index)}>
                {option.label}
              </span>
            ))}
          </div>
        )}
        <div className={styles.dropdownIcon}>
          {dropdownOpen ? (
            <Icon iconName="chevron-up" />
          ) : (
            <Icon iconName="chevron-down" />
          )}
        </div>
      </div>
      {<label className={styles.label}>{label}</label>}
      {error && (
        <small className={styles.errorWrapper}>
          <span className={styles.errorText}>{error}</span>
        </small>
      )}
    </div>
  );
};

export default SelectInput;
