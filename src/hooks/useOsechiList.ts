import { useMemo } from 'react';
import { osechiStore } from '@src/store/osechiStore';
import {
  CategoryConditionKey,
  PeopleRangeConditionKey,
  PriceRangeConditionKey,
  SortCondition,
} from '@src/types';

export const useOsechiList = (
  category: CategoryConditionKey,
  peopleRange: PeopleRangeConditionKey,
  priceRange: PriceRangeConditionKey,
  sort: SortCondition
) => {
  return useMemo(() => {
    return osechiStore.where(category, peopleRange, priceRange, sort);
  }, [category, peopleRange, priceRange, sort]);
};
