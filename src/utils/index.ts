import { MenuType } from '@src/enums';

export const menuTypeToIcon = (iconType: MenuType) => {
  switch (iconType) {
    case MenuType.All:
      return 'create';
    case MenuType.Japanese:
      return 'note';
    case MenuType.Western:
      return 'library_books';
    case MenuType.Chinese:
      return 'settings';
  }
};
