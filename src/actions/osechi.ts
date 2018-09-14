import { Action, Dispatch } from 'redux';
import { GlobalState } from '@src/reducers';
import {
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

  const osechiList = OSECHI_LIST.filter(osechi => {
    switch (category) {
      case 'ja':
        return osechi.categories.indexOf('和') !== -1;
      case 'we':
        return osechi.categories.indexOf('洋') !== -1;
      case 'ch':
        return osechi.categories.indexOf('中') !== -1;
      default:
        return true;
    }
  });

  const action: SearchOsechiAction = {
    meta: {
      category: category as CategoryCondition,
      peopleRange: peopleRangeNum,
      priceRange: priceRangeNum
    },
    payload: {
      osechiList
    },
    type: SEARCH_OSECHI_NAME
  };

  dispatch(action);
};
