import { ACTION } from "./TagTypes";

export interface selectedContext {
  circum: string[] | null;
  emotion: string[] | null;
  people: string[] | null;
  other: string[] | null;
}

export interface actionType {
  type: string;
  payload: any;
  category?: string;
}

const INITIAL_VALUE: selectedContext = {
  circum: [],
  emotion: [],
  people: [],
  other: [],
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
      return { ...state, emotion: payload };
    case ACTION.OTHERS_ADD:
      return { ...state, other: payload };
    default:
      return state;
  }
};
