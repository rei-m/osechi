import { Action, Dispatch } from 'redux';
import { GlobalState } from '@src/reducers';
import {
  Category,
  CategoryCondition,
  CategoryConditionList,
  Osechi,
  PeopleRangeCondition,
  PeopleRangeConditionList,
  PriceRangeCondition,
  PriceRangeConditionList
} from '@src/types';
import { OSECHI_LIST } from '@src/assets/osechi';

export const SEARCH_OSECHI_NAME = 'SEARCH_OSECHI';
export type SEARCH_OSECHI_TYPE = typeof SEARCH_OSECHI_NAME;

export interface SearchOsechiAction extends Action {
  readonly type: SEARCH_OSECHI_TYPE;
  readonly payload: {
    readonly osechiList: Osechi[];
  };
  readonly meta: {
    category: CategoryCondition;
    peopleRange: PeopleRangeCondition;
    priceRange: PriceRangeCondition;
  };
}

export type OsechiActions = SearchOsechiAction;

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

export const searchOsechi = (
  category: string,
  peopleRange: string,
  priceRange: string
) => (dispatch: Dispatch<SearchOsechiAction>, _getState: () => GlobalState) => {
  // TODO: エラーにする
  if (CategoryConditionList.map(c => c as string).indexOf(category) === -1) {
    return;
  }

  const peopleRangeNum = Number(peopleRange);
  if (isNaN(peopleRangeNum)) {
    return;
  }
  if (PeopleRangeConditionList.indexOf(peopleRangeNum) === -1) {
    return;
  }

  const priceRangeNum = Number(priceRange);
  if (isNaN(priceRangeNum)) {
    return;
  }
  if (PriceRangeConditionList.indexOf(priceRangeNum) === -1) {
    return;
  }

  const filter = filterCreator(category, peopleRangeNum, priceRangeNum);

  const action: SearchOsechiAction = {
    meta: {
      category: category as CategoryCondition,
      peopleRange: peopleRangeNum,
      priceRange: priceRangeNum
    },
    payload: {
      osechiList: OSECHI_LIST.filter(osechi => filter(osechi))
    },
    type: SEARCH_OSECHI_NAME
  };

  dispatch(action);
};
