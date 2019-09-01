import React from 'react';
import styled from '@src/styles/styled-components';
import Txt from '@src/components/atoms/Txt';
import SingleContentPageTemplate from '@src/components/templates/SingleContentPageTemplate';
import * as dogeza from '@src/images/dogeza_businessman.png';
import { MenuType } from '@src/enums';
import { APP_NAME } from '@src/constants';

const Container = styled.div(({ theme }) => ({
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  backgroundColor: theme.colorThin,
  flexDirection: `column`,
  boxSizing: `border-box`,
  minHeight: `calc(100vh - ${theme.headerHeight})`,
  [`@media screen and (min-width: ${theme.minWidthWide})`]: {
    minHeight: `calc(100vh - ${theme.headerHeightWide})`,
  },
}));

const DogezaImg = styled.img({
  width: `200px`,
});

const NotFound = () => (
  <SingleContentPageTemplate
    title={`${APP_NAME} - おせち.jp -`}
    description={`ページが見つかりませんでした`}
    keywords={[]}
    currentMenuType={MenuType.All}
  >
    <Container>
      <Txt size={`l`}>
        ページが見つかりませんでした。
        <br />
        トップページにお戻りください。
      </Txt>
      <DogezaImg src={dogeza} alt="ページが見つかりませんでした" />
    </Container>
  </SingleContentPageTemplate>
);

export default NotFound;
