import { ACTION } from "./TagTypes";

export interface selectedContext {
  circum: string[] | null;
  emotions: string[] | null;
  people: string[] | null;
  others: string[] | null;
}

export interface actionType {
  type: string;
  payload: any;
  category?: string;
}

const INITIAL_VALUE: selectedContext = {
  circum: [],
  emotions: [],
  people: [],
  others: [],
};

export const TagReducer = (
  state = INITIAL_VALUE,
  action: actionType
): selectedContext => {
  const { type, payload } = action;
  switch (type) {
    case ACTION.CIRCUM_ADD:
      return { ...state, circum: payload };
    case ACTION.PEOPLE_ADD:
      return { ...state, people: payload };
    case ACTION.EMOTION_ADD:
      return { ...state, emotions: payload };
    case ACTION.OTHERS_ADD:
      return { ...state, others: payload };
    default:
      return state;
  }
};
