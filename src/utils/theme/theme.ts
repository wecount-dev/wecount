export const colors = {
  primary: "#0DB293",
  primaryLight: "#75D0B8",
  secondary: "#00D9D5",
  success: "#33FF2F",
  danger: "#FF002E",
  warning: "#F2DF0F",
  info: "#3A74E7",
  brand: "#28DB98",
  dusk: "#414D6B",
  red: "#FF728D",
  orange: "#F6A623",
  yellow: "#EED100",
  green: "#24CD97",
  blue: "#679EFF",
  purple: "#B669F9",
};


export type CommonColors = typeof colors;

export const light = {
  ...colors,
  paper: "#F2F5F6",
  disabled: "#C4C4C4",
  placeholder: "#6D6D6D",
  text: "#000000",
  background: "#FFFFFF",
  textContrast: "#FFFFFF",
  main: "#75D0B8",
  mainDark: "#0DB293",
  card: "#FFF",
  textLight: "#1B1B1B",
  link: "#8E9095",
};

export type Theme = typeof light;

export const dark: Theme = {
  ...colors,
  paper: "#2A2A2A",
  disabled: "#515151",
  placeholder: "#6D6D6D",
  text: "#FFF",
  background: "#FFF",
  textContrast: "#FFF",
  main: "#0DB293",
  mainDark: "#75D0B8",
  card: "#1C1C1C",
  textLight: "#C4C4C4",
  link: "#B5B7BC",
};

export const theme = {
  light,
  dark,
};

export type ThemeType = "light" | "dark";
export type ThemeStore = { themeType: ThemeType; theme: Theme };