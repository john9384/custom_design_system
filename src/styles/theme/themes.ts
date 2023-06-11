import { Colors } from 'constants/Colors';

const lightThemeColors = {
  primary: Colors.PRIMARY,
  secondary: Colors.SECONDARY,
  background: Colors.WHITE,
  bodyBackground: Colors.LIGHT_BODY_BACKGROUND,
  colorHeaderDataPicker: '#6db0ff',
  text: Colors.LIGHT_TEXT,
  additionalText: '#646777',
  boldText: Colors.WHITE,
  blackText: Colors.BLACK,
  hoverColor: '#fafbfe',
  colorFolderHover: '#f0eeee',
  border: '#eff1f5',
  icon: Colors.LIGHT_ICON,
  colorFieldsBorder: '#f2f4f7',
  colorBubble: 'rgba(242, 244, 247, 0.65)',
  colorBubbleActive: 'rgba(234, 238, 255, 0.6)',
  colorScrollbar: '#B4BFD0',
  colorFitness: '#646777',
  colorEmoji: '#232329',
  countBar: '#F8F9FA',
  inboxButtonBackground: '#f2f4f7',
  inboxButtonBackgroundHover: 'rgba(242, 244, 247, 0.05)',
  sidebarColor: 'aliceblue',
  inputColor: Colors.BLACK,
  inputBackground: Colors.GRAY100,
  colorSearch: '#f2f4f7',
  dateMonthName: '#c5c0db',
  mobileTableRowBackground: '#f8f9fa',
  datePickerDisabledDayText: Colors.RED200,
};

const darkThemeColors: ColorTheme = {
  primary: Colors.PRIMARY_DIM,
  secondary: Colors.SECONDARY_FAIR,
  background: Colors.DARK_BACKGROUND,
  bodyBackground: Colors.DARK_BODY_BACKGROUND,
  colorHeaderDataPicker: '#063263',
  countBar: '#B7B7B7',
  text: Colors.DARK_TEXT,
  additionalText: '#999999',
  boldText: Colors.WHITE,
  blackText: Colors.GRAY300,
  hoverColor: '#38373f',
  colorFolderHover: '#ffffff1A',
  border: '#333246',
  icon: Colors.DARK_ICON,
  colorFieldsBorder: '#33333a',
  colorBubble: 'rgba(68, 79, 97, 0.65)',
  colorBubbleActive: 'rgba(92, 104, 156, 0.6)',
  colorScrollbar: '#606071',
  colorFitness: '#ffffff',
  colorEmoji: '#ffffff',
  inboxButtonBackground: '#2a2a31',
  inboxButtonBackgroundHover: 'rgba(42, 42, 49, 0.05)',
  sidebarColor: '#232329',
  inputColor: Colors.WHITE,
  inputBackground: Colors.GRAY300,
  dateMonthName: '#7d7c83',
  colorSearch: '#2a2a31',
  mobileTableRowBackground: '#2a2a31',
  datePickerDisabledDayText: Colors.RED200,
};

export type ColorTheme = typeof lightThemeColors;

export const themes = {
  colors: {
    light: lightThemeColors,
    dark: darkThemeColors,
  },
};
