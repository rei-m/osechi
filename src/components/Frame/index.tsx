import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { withAppTheme } from '@src/styles';
import { APP_NAME } from '@src/constants';
import { MenuType } from '@src/enums';
import Header from '@src/components/Header';
import Navigation from '@src/components/Navigation';
import Footer from '@src/components/Footer';

export interface FrameProps {
  subTitle: string;
  canBack: boolean;
  description: string;
  isDisplayNav: boolean;
  currentMenuType: MenuType;
  onClickBack: () => void;
}

type BodyProps = Pick<FrameProps, 'isDisplayNav'>;

export const Body = withAppTheme<BodyProps>(styled.div)`
  padding-top: ${({ theme }) => theme.headerHeight};
  text-align: center;
  background-color: ${({ theme }) => theme.colorThin};
  min-height: 100vh;
  @media screen and (min-width: ${({ theme }) => theme.minWidthWide}) {
    padding-top: ${({ theme }) => theme.headerHeightWide};
    margin-left: ${({ isDisplayNav, theme }) =>
      isDisplayNav ? theme.bottomNavHeightWide : '0'};
  }
`;

const Frame: React.SFC<FrameProps> = ({
  canBack,
  children,
  subTitle,
  description,
  isDisplayNav,
  currentMenuType,
  onClickBack
}) => (
  <div>
    <Helmet>
      <meta
        name="keywords"
        content="おせち,2019年のおせち,おすすめのおせち,おせちのおすすめ,2019,おせちの通販,今年のおせち,おせちの食べ方"
      />
      <meta name="og:description" content={description} />
      <meta name="description" content={description} />
      <title>{`${APP_NAME} - ${subTitle} -`}</title>
    </Helmet>
    <Header subTitle={subTitle} canBack={canBack} onClickBack={onClickBack} />
    <Body isDisplayNav={isDisplayNav}>{children}</Body>
    <Footer isDisplayNav={isDisplayNav} />
    {isDisplayNav && <Navigation currentMenuType={currentMenuType} />}
  </div>
);

export default Frame;
