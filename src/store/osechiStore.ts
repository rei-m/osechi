import { OSECHI_LIST } from '@src/assets/osechi';
import {
  Category,
  Osechi,
  PeopleRangeConditionList,
  PriceRangeConditionList
} from '@src/types';

const osechiCollection: { [code: string]: Osechi } = OSECHI_LIST.reduce(
  (previous, current) => ({
    ...previous,
    [`${current.siteId}_${current.code}`]: current
  }),
  {}
);

const categoryFilterMap: {
  [category: string]: (categories: Category[]) => boolean;
} = {
  ja: (categories: Category[]) => categories.indexOf('和') !== -1,
  we: (categories: Category[]) => categories.indexOf('洋') !== -1,
  ch: (categories: Category[]) => categories.indexOf('和') !== -1,
  all: (_categories: Category[]) => true
};

const peopleRangeFilterMap: {
  [peopleRange: number]: (peopleFrom: number, peopleTo: number) => boolean;
} = {
  0: (_peopleFrom, _peopleTo) => true,
  1: (peopleFrom, peopleTo) => peopleFrom >= 1 && peopleTo <= 3,
  2: (peopleFrom, peopleTo) => peopleFrom >= 3 && peopleTo <= 4,
  3: (peopleFrom, _peopleTo) => peopleFrom >= 5
};

const priceRangeFilterMap: {
  [priceRange: number]: (price: number) => boolean;
} = {
  0: _price => true,
  1: price => price < 15000,
  2: price => price >= 15000 && price <= 20000,
  3: price => price >= 20000 && price <= 25000,
  4: price => price >= 25000 && price <= 30000,
  5: price => price >= 30000
};

const filterCreator = (
  category: string,
  peopleRange: number,
  priceRange: number
) => {
  const categoryFilter = categoryFilterMap[category];
  const peopleRangeFilter = peopleRangeFilterMap[peopleRange];
  const priceRangeFilter = priceRangeFilterMap[priceRange];
  return ({ categories, peopleFrom, peopleTo, price }: Osechi) =>
    categoryFilter(categories) &&
    peopleRangeFilter(peopleFrom, peopleTo) &&
    priceRangeFilter(price);
};

export const osechiStore = {
  findByCode: (code: string) => osechiCollection[code],
  where: (category: string, peopleRange: string, priceRange: string) => {
    const peopleRangeNum = Number(peopleRange);
    if (isNaN(peopleRangeNum)) {
      return [];
    }
    if (PeopleRangeConditionList.indexOf(peopleRangeNum) === -1) {
      return [];
    }

    const priceRangeNum = Number(priceRange);
    if (isNaN(priceRangeNum)) {
      return [];
    }
    if (PriceRangeConditionList.indexOf(priceRangeNum) === -1) {
      return [];
    }
    const filter = filterCreator(category, peopleRangeNum, priceRangeNum);
    return OSECHI_LIST.filter(osechi => filter(osechi));
  }
};
