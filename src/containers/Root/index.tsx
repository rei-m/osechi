import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ROUTE_PATHS } from '@src/constants';
import { MenuType } from '@src/enums';
import Frame from '@src/components/Frame';

export type RootProps = RouteComponentProps<{}>;

const CATEGORY_INFO_MAP = {
  ja: {
    subTitle: '和風おせち',
    menuType: MenuType.Japanese
  },
  we: {
    subTitle: '洋風おせち',
    menuType: MenuType.Western
  },
  ch: {
    subTitle: '中華風おせち',
    menuType: MenuType.Chinese
  }
};

const Root: React.SFC<RootProps> = ({ location, children, history }) => {
  const { pathname } = location;

  let canBack = false;
  const isDisplayNav = true;
  let subTitle = 'おせち.jp';
  let description =
    'おせち.jpではいろいろなおせち販売サイトのおせちを比較することができます。定番のおせちや少し変わったおせちまで簡単に条件を指定して探せます。2019年のおせちはおせち.jpでお好みのおせちを探してはいかがでしょうか。';
  let currentMenuType: MenuType = MenuType.All;

  const onClickBack = () => {
    history.goBack();
  };

  if (pathname.indexOf('/categories') >= 0) {
    canBack = true;
    const matchParams = pathname.split('/');
    if (matchParams.length > 3 && CATEGORY_INFO_MAP[matchParams[2]]) {
      const pageInfo = CATEGORY_INFO_MAP[matchParams[2]];
      subTitle = pageInfo.subTitle;
      currentMenuType = pageInfo.menuType;
      description = `${subTitle}を紹介しています。${description}`;
    }
  } else if (pathname.indexOf(ROUTE_PATHS.SITE_MAPS) >= 0) {
    canBack = true;
    subTitle = 'サイトマップ';
    description = `サイトマップ。${description}`;
  }

  return (
    <Frame
      canBack={canBack}
      children={children}
      subTitle={subTitle}
      description={description}
      isDisplayNav={isDisplayNav}
      currentMenuType={currentMenuType}
      onClickBack={onClickBack}
    />
  );
};

export default withRouter(Root);
