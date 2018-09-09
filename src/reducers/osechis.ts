import { CategoryCondition, Osechi } from '@src/types';
import { OSECHI_LIST } from '@src/assets/osechi';

const osechiCollection: { [code: string]: Osechi } = OSECHI_LIST.reduce(
  (previous, current) => ({
    ...previous,
    [`${current.siteId}_${current.code}`]: current
  }),
  {}
);

export interface Form {
  cateogry: CategoryCondition;
}

// 急ぎで作ってるのでめっちゃ適当
export interface OsechiState {
  readonly osechiCollection: { [key: string]: Osechi };
  readonly searchResult: Osechi[];
  readonly searchForm: Form;
}

export const initialState: OsechiState = {
  osechiCollection,
  searchResult: [],
  searchForm: {
    cateogry: '指定なし'
  }
};

export const osechiReducer = (
  state = initialState,
  _action: any
): OsechiState => {
  return state;
};
