export const RED = '#FF728D';
export const GREEN = '#28DB98';
export const SKY_BLUE = '#72E6FF';
export const NAVY = '#3A74E7';
export const PURPLE = '#834FF3';
export const BLACK = '#2A2A2C';

export const light = {
  boxShadow02: 'rgba(0, 0, 0, 0.02)',
  boxShadow12: 'rgba(0, 0, 0, 0.12)',
  authBackgroundLight: '#17b87c',
  authBackgroundDark: '#01886f',
  logo: 'invert(0)',
  primary: 'black',
  text: 'black',
  background: 'white',
  textContrast: 'white',
};

export type Theme = typeof light;

export const dark: Theme = {
  boxShadow02: 'rgba(255, 255, 255, 0.02)',
  boxShadow12: 'rgba(255, 255, 255, 0.06)',
  authBackgroundLight: '#4C4D53',
  authBackgroundDark: '#2A2A2A',
  logo: 'invert(1)',
  primary: 'white',
  text: 'white',
  background: 'black',
  textContrast: 'black',
};
