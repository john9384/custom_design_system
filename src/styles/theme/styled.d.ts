import 'styled-components';
import { Theme as ColorTheme } from './themes';
import { ThemeKeyType } from './types';

export type Theme = {
  color: ColorTheme;
  selectedTheme: ThemeKeyType;
  selectTheme: (theme: ThemeKeyType) => void;
};

export type ThemeClasses = {
  color: 'theme-dark' | 'theme-light';
};

/* This is the suggested way of declaring theme types */
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
