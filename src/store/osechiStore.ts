import { OSECHI_LIST } from '@src/assets/osechi';
import { Category, Osechi, SortCondition } from '@src/types';

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
  ch: (categories: Category[]) => categories.indexOf('中') !== -1,
  all: (_categories: Category[]) => true
};

const peopleRangeFilterMap: {
  [peopleRange: string]: (peopleFrom: number, peopleTo: number) => boolean;
} = {
  pe0: (_peopleFrom, _peopleTo) => true,
  pe1: (peopleFrom, peopleTo) => peopleFrom >= 1 && peopleTo <= 3,
  pe2: (peopleFrom, peopleTo) => peopleFrom >= 3 && peopleTo <= 4,
  pe3: (peopleFrom, _peopleTo) => peopleFrom >= 5
};

const priceRangeFilterMap: {
  [priceRange: string]: (price: number) => boolean;
} = {
  pr0: _price => true,
  pr1: price => price < 15000,
  pr2: price => price >= 15000 && price <= 20000,
  pr3: price => price >= 20000 && price <= 25000,
  pr4: price => price >= 25000 && price <= 30000,
  pr5: price => price >= 30000
};

const filterCreator = (
  category: string,
  peopleRange: string,
  priceRange: string
) => {
  const categoryFilter = categoryFilterMap[category];
  const peopleRangeFilter = peopleRangeFilterMap[peopleRange];
  const priceRangeFilter = priceRangeFilterMap[priceRange];
  return ({ categories, peopleFrom, peopleTo, price }: Osechi) =>
    categoryFilter(categories) &&
    peopleRangeFilter(peopleFrom, peopleTo) &&
    priceRangeFilter(price);
};

const priceLowComparator = (thisO: Osechi, thatO) => {
  if (thisO.price > thatO.price) {
    return 1;
  }
  if (thisO.price < thatO.price) {
    return -1;
  }
  return 0;
};

const priceHighComparator = (thisO: Osechi, thatO) => {
  if (thisO.price > thatO.price) {
    return -1;
  }
  if (thisO.price < thatO.price) {
    return 1;
  }
  return 0;
};

export const osechiStore = {
  findByCode: (code: string) => osechiCollection[code],
  where: (
    category: string,
    peopleRange: string,
    priceRange: string,
    sort: SortCondition
  ) => {
    const filter = filterCreator(category, peopleRange, priceRange);
    return OSECHI_LIST.filter(osechi => filter(osechi)).sort(
      sort === SortCondition.PriceLow ? priceLowComparator : priceHighComparator
    );
  }
};
