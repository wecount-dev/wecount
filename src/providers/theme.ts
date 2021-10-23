export type CommonColors = {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
};

export type ThemeColors = {
  background: string;
  paper: string;
  disabled: string;
  text: string;
  textContrast: string;
  placeholder: string;
};

export type Theme = CommonColors & ThemeColors;
export type ThemeType = 'light' | 'dark';
export type ThemeStore = { themeType: ThemeType; theme: Theme };

const common: CommonColors = {
  primary: '#0db293',
  secondary: '#00d9d5',
  success: '#33ff2f',
  danger: '#ff002e',
  warning: '#f2df0f',
  info: '#3a74e7',
};

export const light: Theme = {
  ...common,
  background: '#FFF',
  paper: '#EDEDED',
  disabled: '#C4C4C4',
  text: '#000',
  textContrast: '#FFF',
  placeholder: '#6D6D6D',
};

export const dark: Theme = {
  ...common,
  background: '#000',
  paper: '#414141',
  disabled: '#414141',
  text: '#FFF',
  textContrast: '#000',
  placeholder: '#6D6D6D',
};

export const theme = {
  light,
  dark,
};
