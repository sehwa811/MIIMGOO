import { ACTION } from "./TagTypes";

export interface selectedContext {
  circum: string | null;
  emotions: string | null;
  people: string | null;
  others: string | null;
}

export interface actionType {
  type: string;
  payload: any;
}

const INITIAL_VALUE: selectedContext = {
  circum: null,
  emotions: null,
  people: null,
  others: null,
};

export const TagReducer = (
  state = INITIAL_VALUE,
  action: actionType
): selectedContext => {
  const { type, payload } = action;
  switch (type) {
    case ACTION.ADD:
      return { ...state, [payload.id]: payload.innerText };
    default:
      return state;
  }
};
