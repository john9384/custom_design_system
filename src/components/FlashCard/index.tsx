import { Colors } from 'constants/Colors';
import { Icon } from '../Icon';
import { Box } from '../Box';
import React, { useEffect } from 'react';
import styles from './Styles.module.css';

type FlashTypes = 'success' | 'warning' | 'error' | 'info';

interface FlashCardProps {
  type: FlashTypes;
  text: string;
  timerInSeconds: number;
  onClose?: () => void;
}

export const FlashCard = ({
  type,
  text,
  timerInSeconds,
  onClose,
}: FlashCardProps) => {
  const { backgroundColor, borderColor, iconName } = getProps(type);
  const [isInView, setIsInView] = React.useState(true);
  useEffect(() => {
    const milliseconds = timerInSeconds * 1000;
    setTimeout(() => {
      setIsInView(false);
      onClose && onClose();
    }, milliseconds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isInView && (
        <div
          className={styles.wrapper}
          style={{
            backgroundColor: backgroundColor,
            borderColor: borderColor,
          }}
        >
          <Box width="content">
            <Icon iconName={iconName} />
          </Box>
          <Box flexGrow={1} maxWidth="D240">
            {text}
          </Box>
        </div>
      )}
    </>
  );
};

const getProps = (type: FlashTypes): any => {
  switch (type) {
    case 'success':
      return {
        backgroundColor: Colors.GREEN100,
        borderColor: Colors.GREEN500,
        iconName: 'success',
      };
    case 'warning':
      return {
        backgroundColor: Colors.YELLOW100,
        borderColor: Colors.YELLOW500,
        iconName: 'warning',
      };
    case 'error':
      return {
        backgroundColor: Colors.RED900,
        borderColor: Colors.RED800,
        iconName: 'error',
      };
    case 'info':
      return {
        backgroundColor: Colors.BLUE100,
        borderColor: Colors.BLUE600,
        iconName: 'info',
      };
    default:
      return {
        backgroundColor: Colors.GREEN100,
        borderColor: Colors.GREEN500,
        iconName: 'success',
      };
  }
};

interface CardProps {
  backgroundColor: string;
  borderColor: string;
}
