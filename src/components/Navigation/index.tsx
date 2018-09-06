import * as React from 'react';
import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';
import { withAppTheme } from '@src/styles';
import { MenuType } from '@src/enums';
import { ROUTE_PATHS } from '@src/constants';
import { withRipple } from '@src/enhancers/withRipple';
import NavIcon from '@src/components/NavIcon';

export interface NavigationProps {
  readonly currentMenuType?: MenuType;
}

const Root = withAppTheme(styled.nav)`
  display: flex;
  position: fixed;
  height: ${({ theme }) => theme.bottomNavHeight};
  width: 100vw;
  bottom: 0;
  background-color: ${({ theme }) => theme.colorPrimary};
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.26);
  box-sizing: border-box;
  @media screen and (min-width: ${({ theme }) => theme.minWidthWide}) {
    height: 100vh;
    width: ${({ theme }) => theme.sideNavWidth};
    padding-top: ${({ theme }) => theme.headerHeightWide};
    flex-direction: column;
  }
`;

const IconBox = styled.span`
  flex-grow: 1;
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.minWidthWide}) {
    flex-grow: 0;
    height: ${({ theme }) => theme.sideNavWidth};
  }
`;

const LinkWithRipple = withRipple<LinkProps>(Link);

const Navigation: React.SFC<NavigationProps> = ({ currentMenuType }) => (
  <Root>
    <IconBox>
      <LinkWithRipple
        to={ROUTE_PATHS.ROOT}
        style={{ width: '100%', height: '100%' }}
      >
        <NavIcon
          iconType={MenuType.All}
          text="練習"
          isCurrent={currentMenuType === MenuType.All}
        />
      </LinkWithRipple>
    </IconBox>
    <IconBox>
      <LinkWithRipple
        to={ROUTE_PATHS.JAPANESE}
        style={{ width: '100%', height: '100%' }}
      >
        <NavIcon
          iconType={MenuType.Japanese}
          text="腕試し"
          isCurrent={currentMenuType === MenuType.Japanese}
        />
      </LinkWithRipple>
    </IconBox>
    <IconBox>
      <LinkWithRipple
        to={ROUTE_PATHS.WESTERN}
        style={{ width: '100%', height: '100%' }}
      >
        <NavIcon
          iconType={MenuType.Western}
          text="資料"
          isCurrent={currentMenuType === MenuType.Western}
        />
      </LinkWithRipple>
    </IconBox>
    <IconBox>
      <LinkWithRipple
        to={ROUTE_PATHS.CHINESE}
        style={{ width: '100%', height: '100%' }}
      >
        <NavIcon
          iconType={MenuType.Chinese}
          text="その他"
          isCurrent={currentMenuType === MenuType.Chinese}
        />
      </LinkWithRipple>
    </IconBox>
  </Root>
);

export default Navigation;
