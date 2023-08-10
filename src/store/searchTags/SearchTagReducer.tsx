import { ACTION } from "./SearchTagTypes";

export interface searchtagProps {
  searchTags: string[];
}

export interface actionType {
  type: string;
  payload: any;
}

const INITIAL_VALUE: searchtagProps = {
  searchTags: []
};

export const SearchTagReducer = (
  state = INITIAL_VALUE,
  action: actionType
): searchtagProps => {
  const { type, payload } = action;
  switch (type) {
    case ACTION.SEARCH_ADD:
      console.log(payload)
      return { ...state, searchTags: payload };
    default:
      return state;
  }
};
