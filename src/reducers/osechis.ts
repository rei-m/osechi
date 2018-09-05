import { Osechi, Site } from '@src/types';
import { GURU_LIST, KIBUN_LIST, OISIX_LIST } from '@src/assets/osechi';
import { SITE_LIST } from '@src/assets/site';

export interface OsechiState {
  readonly osechiList: Osechi[];
  readonly siteList: Site[];
}

export const initialState: OsechiState = {
  osechiList: [...OISIX_LIST, ...GURU_LIST, ...KIBUN_LIST],
  siteList: SITE_LIST
};

export const osechiReducer = (
  state = initialState,
  _action: any
): OsechiState => {
  return state;
};
