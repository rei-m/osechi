export interface OsechiState {
  readonly osechiList: string[];
}

export const initialState: OsechiState = {
  osechiList: []
};

export const osechiReducer = (
  state = initialState,
  _action: any
): OsechiState => {
  return state;
};
