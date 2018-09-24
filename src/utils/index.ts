import { MenuType } from '@src/enums';

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
