import {
  CategoryCondition,
  Osechi,
  PeopleRangeCondition,
  PriceRangeCondition
} from '@src/types';
import { OSECHI_LIST } from '@src/assets/osechi';
import { OsechiActions, SEARCH_OSECHI_NAME } from '@src/actions/osechi';

const osechiCollection: { [code: string]: Osechi } = OSECHI_LIST.reduce(
  (previous, current) => ({
    ...previous,
    [`${current.siteId}_${current.code}`]: current
  }),
  {}
);

export interface Form {
  cateogry: CategoryCondition; // カテゴリ
  priceRange: PriceRangeCondition; // 価格帯
  peopleRange: PeopleRangeCondition; // 利用人数
}

// 急ぎで作ってるのでめっちゃ適当
export interface OsechiState {
  readonly osechiCollection: { [key: string]: Osechi };
  readonly searchResult: Osechi[];
  readonly form: Form;
}

export const initialState: OsechiState = {
  osechiCollection,
  searchResult: [],
  form: {
    cateogry: 'all',
    priceRange: PriceRangeCondition.All,
    peopleRange: PeopleRangeCondition.All
  }
};

export const osechiReducer = (
  state = initialState,
  action: OsechiActions
): OsechiState => {
  switch (action.type) {
    case SEARCH_OSECHI_NAME:
      return {
        ...state,
        searchResult: action.payload.osechiList,
        form: {
          cateogry: action.meta.category,
          peopleRange: action.meta.peopleRange,
          priceRange: action.meta.priceRange
        }
      };
    default:
      return state;
  }
};
