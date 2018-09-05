import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

export interface FrameProps {
  subTitle: string;
  canBack: boolean;
  description: string;
  onClickBack: () => void;
}

const Frame: React.SFC<FrameProps> = ({
  canBack,
  children,
  subTitle,
  description,
  onClickBack
}) => (
  <div>
    <Helmet>
      <meta
        name="keywords"
        content="おせち,2019年のおせち,おすすめのおせち,おせちのおすすめ,2019,おせちの通販,今年のおせち,おせちの食べ方"
      />
      <meta name="description" content={description} />
      {!isDisplayNav && <meta name="robots" content="noindex,nofollow" />}
      <title>{`${APP_NAME} - ${subTitle} -`}</title>
    </Helmet>
    <Header subTitle={subTitle} canBack={canBack} onClickBack={onClickBack} />
    <Body isDisplayNav={isDisplayNav}>{children}</Body>
    {isDisplayNav && <Navigation currentMenuType={currentMenuType} />}
  </div>
);

export default Frame;
