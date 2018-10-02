import { MenuType } from '@src/enums';
import { Site } from '@src/types';
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
