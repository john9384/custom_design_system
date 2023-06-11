import { ColorType } from './constants';
import { IconName } from './icon';

export interface ButtonProps {
  children?: string | React.ReactNode;
  style?: any;
  icons?: string;
  onClick?: () => void;
  type?: 'primary' | 'secondary' | 'tetiary' | 'outline' | 'link';
  disabled?: boolean;
  width?: 'full' | 'content';
  height?: 'D24' | 'D32' | 'D40' | 'D48' | 'D50' | 'D56' | 'D64' | 'content';
  iconName?: IconName;
  noPadding?: boolean;
  paddingX?: 'S4' | 'S8' | 'S16' | 'S24' | 'S32';
  paddingY?: 'S4' | 'S8' | 'S16' | 'S24' | 'S32';
  background?: ColorType;
  color?: ColorType;
}
