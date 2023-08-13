import { ACTION } from "./SearchTagTypes";

export interface searchtagProps {
  searchTags: string[];
  isClicked: boolean;
}

export interface actionType {
  type: string;
  payload: string[];
}

const INITIAL_VALUE: searchtagProps = {
  searchTags: [],
  isClicked: false
};

export const SearchTagReducer = (
  state = INITIAL_VALUE,
  action: actionType
): searchtagProps => {
  const { type, payload } = action;
  switch (type) {
    case ACTION.SEARCH_ADD:
      return { ...state, searchTags: payload };
    case ACTION.CLICKED:
      return { ...state};
    case ACTION.CLEAR:
      return {...state, searchTags: []};
    case ACTION.REMOVE:
      return {...state, searchTags: payload};
    default:
      return state;
  }
};
