import React from 'react';
import styled from '@src/styles/styled-components';
import SEO from '@src/components/atoms/SEO';
import Container from '@src/components/atoms/Container';
import Header from '@src/components/organisms/Header';
import Footer from '@src/components/organisms/Footer';
import Navigation from '@src/components/organisms/Navigation';
import { MenuType } from '@src/enums';

export type Props = {
  title: string;
  description: string;
  keywords: string[];
  currentMenuType: MenuType;
  onClickBack?: () => void;
};

const StyledHeader = styled(Header)(({ theme }) => ({
  left: 0,
  right: 0,
  top: 0,
  position: `fixed`,
  zIndex: 10,
  boxShadow: theme.elevationShadow1x,
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.headerHeight,
  paddingBottom: theme.spacing(2),
  [`@media screen and (min-width: ${theme.minWidthWide})`]: {
    paddingTop: theme.headerHeightWide,
    paddingLeft: theme.bottomNavHeight,
  },
}));

const StyledFooter = styled(Footer)(({ theme }) => ({
  marginBottom: theme.bottomNavHeight,
  [`@media screen and (min-width: ${theme.minWidthWide})`]: {
    marginBottom: 0,
    marginLeft: theme.bottomNavHeightWide,
  },
}));

const StyledNavigation = styled(Navigation)(_props => ({
  position: `fixed`,
  bottom: 0,
  boxShadow: `0 -1px 5px rgba(0, 0, 0, 0.26)`,
}));

const Layout: React.FC<Props> = ({
  title,
  description,
  keywords,
  children,
  onClickBack,
  currentMenuType,
}) => (
  <>
    <SEO title={title} keywords={keywords} description={description} />
    <StyledHeader title={title} onClickBack={onClickBack} />
    <StyledContainer>{children}</StyledContainer>
    <StyledFooter />
    <StyledNavigation currentMenuType={currentMenuType} />
  </>
);

export default Layout;
