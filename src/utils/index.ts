import { MenuType } from '@src/enums';
import { Osechi, Site } from '@src/types';
import { SITE_LIST } from '@src/assets/site';

export const menuTypeToIcon = (iconType: MenuType) => {
  switch (iconType) {
    case MenuType.All:
      return '全';
    case MenuType.Japanese:
      return '和';
    case MenuType.Western:
      return '洋';
    case MenuType.Chinese:
      return '中';
  }
};

const SITE_MAP = SITE_LIST;

export const siteIdToSite = (siteId: number): Site => SITE_MAP[siteId - 1];

// const AFFILIATE_URL_BASE_OISIX =
//   'https://click.linksynergy.com/deeplink?id=CXEk2huPqWA&mid=3132';

// const AFFILIATE_URL_MAP = {
//   // 1: (osechi: Osechi) =>
//   //   `${AFFILIATE_URL_BASE_OISIX}&murl=${encodeURIComponent(osechi.url)}`,
//   1: (osechi: Osechi) => osechi.url,
//   2: (osechi: Osechi) => osechi.url,
//   3: (osechi: Osechi) => osechi.url,
// };

export const affiliateUrl = (osechi: Osechi) => osechi.url;
