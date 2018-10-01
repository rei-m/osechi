import { ThemedStyledFunction } from 'styled-components';

export const appTheme = {
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
  spacing0_5x: '4px',
  spacing1x: '8px',
  spacing2x: '16px',
  spacing3x: '24px',
  spacing4x: '32px'
};

export type AppTheme = typeof appTheme;

export const withAppTheme = <P>(f: ThemedStyledFunction<P, AppTheme>) => f;
