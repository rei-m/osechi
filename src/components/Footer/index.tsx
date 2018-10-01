import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withAppTheme } from '@src/styles';
import { ROUTE_PATHS } from '@src/constants';

export interface FooterProps {
  isDisplayNav: boolean;
}

const LinkInner = withAppTheme(styled.span)`
  cursor: pointer;
  color: ${({ theme }) => theme.colorPrimaryDark};
  text-decoration: none;
  &:hover {
    ${({ theme }) => `
      color: ${theme.colorPrimaryDark};
      border-bottom: 1px dotted ${theme.colorPrimaryDark};
    `}
  }
`;

const Root = withAppTheme<FooterProps>(styled.footer)`
  margin-bottom: ${({ isDisplayNav, theme }) =>
    isDisplayNav ? theme.bottomNavHeight : '0'};
  text-align: center;
  background-color: ${({ theme }) => theme.colorThin};
  border-top: 1px solid #ccc;
  padding: 24px;
  @media screen and (min-width: ${({ theme }) => theme.minWidthWide}) {
    margin-bottom: 0;
    margin-left: ${({ isDisplayNav, theme }) =>
      isDisplayNav ? theme.bottomNavHeightWide : '0'};
  }
`;

const Footer: React.SFC<FooterProps> = ({ isDisplayNav }) => (
  <Root isDisplayNav={isDisplayNav}>
    <Link
      to={ROUTE_PATHS.ROOT}
      style={{
        textDecoration: 'none',
        margin: '0 16px'
      }}
    >
      <LinkInner>おせち.jp</LinkInner>
    </Link>
    <a
      href="https://rei-m.github.io/app/policy/"
      target="_blank"
      style={{
        textDecoration: 'none',
        margin: '0 16px'
      }}
    >
      <LinkInner>プライバシーポリシー</LinkInner>
    </a>
    <Link
      to={ROUTE_PATHS.SITE_MAPS}
      style={{
        textDecoration: 'none',
        margin: '0 16px'
      }}
    >
      <LinkInner>サイトマップ</LinkInner>
    </Link>
  </Root>
);

export default Footer;
