import * as React from 'react';
import styled from 'styled-components';
import * as osechi_banner_m from './osechi_banner_m.png';

const Root = styled.div`
  width: 100%;
  height: 160px;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: ${({ theme }) => theme.minWidthWide}) {
    height: 320px;
  }
`;

const BannerImage = styled.img`
  width: 100vw;
  height: calc(100vw / 2);
  position: absolute;
  top: 0;
  left: 0;
`;

const Mask = styled.div`
  content: '';
  width: 100vw;
  height: 160px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(54, 48, 39, 0.5);
  @media screen and (min-width: ${({ theme }) => theme.minWidthWide}) {
    height: 320px;
  }
`;

const TitleBox = styled.div`
  width: 100%;
  height: 160px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
  @media screen and (min-width: ${({ theme }) => theme.minWidthWide}) {
    height: 320px;
  }
`;

const MainTitle = styled.h1`
  color: #fff;
  font-size: 2.6rem;
  @media screen and (min-width: ${({ theme }) => theme.minWidthWide}) {
    font-size: 4rem;
  }
`;

const Banner: React.SFC<{}> = () => (
  <Root>
    <BannerImage src={osechi_banner_m} alt="2019年のおせちはおせち.jpで" />
    <Mask />
    <TitleBox>
      <MainTitle>2019年のおせちはおせち.jpで</MainTitle>
    </TitleBox>
  </Root>
);

export default Banner;
