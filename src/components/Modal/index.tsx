import styles from './Modal.module.css';
import { Header } from '../Typography/Header';
import React from 'react';
import { Box } from '../Box';
import { Icon } from '../Icon';

interface Props {
  onClose?: () => void;
  children: any;
  header?: any;
  cancelButton?: boolean;
  backButton?: boolean;
  backButtonAction?: () => void;
}

export const Modal = ({
  onClose,
  children,
  header,
  cancelButton,
  backButton,
  backButtonAction,
}: Props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <div className={styles.modalHeader}>
          <Box flexDirection="row" gap="S16" alignItems="center">
            {backButton && (
              <div onClick={backButtonAction}>
                <Icon iconName="arrow-left" color="PRIMARY" />
              </div>
            )}
            <Header.H1 color="SECONDARY">{header}</Header.H1>
          </Box>
          {cancelButton && (
            <span className={styles.closeIcon} onClick={onClose}>
              <Icon iconName="x-mark" color="SECONDARY" size="D24" />
            </span>
          )}
        </div>

        {children}
      </div>
    </div>
  );
};
