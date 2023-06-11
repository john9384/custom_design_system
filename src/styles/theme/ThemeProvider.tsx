import * as React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { ThemeContext } from 'styled-components';
import LayoutProvider from '../../contexts/LayoutContext';
import { ThemeKeyType, ThemeState } from './types';
import { ThemeClasses } from './styled';
import { GlobalStyle } from '../global-styles';
import { themes } from './themes';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  const [isSystemDark, setIsSystemDark] = React.useState<boolean>(false);
  const [theme, setTheme] = React.useState<ThemeState>({
    selected: 'system',
  });

  const selectTheme = (themeKey: ThemeKeyType) => {
    localStorage.setItem('selectedTheme', themeKey);
    setTheme({ ...theme, selected: themeKey });
  };

  const setColorScheme = () => {
    if (theme.selected === 'system') {
      return isSystemDark ? themes.colors.dark : themes.colors.light;
    }
    return themes.colors[theme.selected];
  };
  const convertThemeToClass = (theme: ThemeState): ThemeClasses => {
    let color: ThemeClasses['color'];

    if (theme.selected === 'system') {
      color = isSystemDark ? 'theme-dark' : 'theme-light';
    } else {
      color = theme.selected === 'dark' ? 'theme-dark' : 'theme-light';
    }

    return {
      color,
    };
  };

  const getThemeFromStorage = (): ThemeKeyType | null => {
    if (typeof window == 'undefined') return null;
    return (localStorage.getItem('selectedTheme') as ThemeKeyType) || null;
  };

  React.useEffect(() => {
    const userDeviceIsDarkThemed = window?.matchMedia
      ? window.matchMedia('(prefers-color-scheme: dark)')?.matches
      : false;

    setIsSystemDark(userDeviceIsDarkThemed);
    setTheme({ ...theme, selected: getThemeFromStorage() || 'system' });
  }, [isSystemDark]);

  return (
    <OriginalThemeProvider
      theme={{
        color: setColorScheme(),
        themeClassNames: convertThemeToClass(theme),
        selectedTheme: theme.selected,
        selectTheme,
      }}
    >
      <LayoutProvider>{React.Children.only(props.children)}</LayoutProvider>
    </OriginalThemeProvider>
  );
};

export const useCustomTheme = () => {
  const themeContext = React.useContext(ThemeContext);

  if (!themeContext) {
    throw new Error(
      'Theme Context can only be use in the ThemeContext Provider',
    );
  }

  return themeContext;
};
