import { ACTION } from "./SearchTagTypes";

export interface searchtagProps {
  searchTags: string[];
  isClicked: boolean;
}

export interface actionType {
  type: string;
  payload: any;
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
      console.log(payload)
      return { ...state, searchTags: payload };
    case ACTION.CLICKED:
      console.log(payload)
      return { ...state};
    case ACTION.CLEAR:
      return {...state, searchTags: []};
    default:
      return state;
  }
};
