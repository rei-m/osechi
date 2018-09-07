import { Category, CategoryCondition, Osechi } from '@src/types';
import { OSECHI_LIST } from '@src/assets/osechi';

export interface Form {
  cateogry: CategoryCondition;
}

export interface OsechiState {
  readonly osechiList: Osechi[];
}

export const initialState: OsechiState = {
  osechiList: OSECHI_LIST
};

export const osechiReducer = (
  state = initialState,
  _action: any
): OsechiState => {
  return state;
};
