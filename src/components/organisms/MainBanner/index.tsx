import * as React from 'react';
import styled from '@src/styles/styled-components';
import Heading from '@src/components/atoms/Heading';
import * as osechi_banner_m from '@src/images/osechi_banner_m.png';
import { TARGET_YEAR } from '@src/constants';

export type Props = {
  className?: string;
};

const Container = styled.div`
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
  content: "''";
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

const StyledHeading = styled(Heading)`
  color: #fff;
  font-size: 2.6rem !important;
  @media screen and (min-width: ${({ theme }) => theme.minWidthWide}) {
    font-size: 4rem !important;
  }
`;

const MainBanner: React.FC<Props> = ({ className }) => (
  <Container className={className}>
    <BannerImage
      src={osechi_banner_m}
      alt={`${TARGET_YEAR}年のおせちはおせち.jpで`}
    />
    <Mask />
    <TitleBox>
      <StyledHeading
        level={1}
      >{`${TARGET_YEAR}年のおせちはおせち.jpで`}</StyledHeading>
    </TitleBox>
  </Container>
);

export default MainBanner;
