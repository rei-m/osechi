export type FontSize = 'sss' | 'ss' | 's' | 'm' | 'l' | 'll';

export const SPACING_UNIT = 8;

export const theme = {
  bottomNavHeight: '56px',
  bottomNavHeightWide: '64px',
  bottomNavWidthWide: '64px',
  colorAccent: '#ffb300',
  colorAccentActive: '#ffa000',
  colorAccentHover: '#ffa000',
  colorPrimary: '#9E9E9E',
  colorPrimaryDark: '#616161',
  colorThin: '#fffff0',
  elevationShadow1x: '0 2px 5px rgba(0, 0, 0, 0.26)',
  headerHeight: '56px',
  headerHeightWide: '64px',
  minWidthWide: '768px',
  sideNavWidth: '64px',
  spacing: (n: number) => `${SPACING_UNIT * n}px`,
  fontColor: {
    default: '#000',
    error: '#f00',
    light: '#fff',
    link: '#106ba3',
  },
  fontSize: {
    sss: '1rem',
    ss: '1.2rem',
    s: '1.4rem',
    m: '1.6rem',
    l: '1.8rem',
    ll: '2rem',
  },
};

export type ThemeInterface = typeof theme;
