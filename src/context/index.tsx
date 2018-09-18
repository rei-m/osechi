import * as React from 'react';
import {
  CategoryCondition,
  PeopleRangeCondition,
  PriceRangeCondition
} from '@src/types';

export interface Form {
  cateogry: CategoryCondition; // カテゴリ
  priceRange: PriceRangeCondition; // 価格帯
  peopleRange: PeopleRangeCondition; // 利用人数
}

export const AppContext = React.createContext({
  form: {
    cateogry: 'all',
    priceRange: PriceRangeCondition.All,
    peopleRange: PeopleRangeCondition.All
  }
});
