import { ACTION } from "./SearchTagTypes";
import createAction from "../../utils/action-creator";
import { actionType, searchtagProps } from "./SearchTagReducer";

const addTagTosearchTags = (searchTags: string[], tag: string) => {
  return [...searchTags, tag];
};

export const searchTagAdd = (searchTags: string[], tag: string) => {
  const newSearchTags:any = addTagTosearchTags(searchTags, tag);
  return createAction(ACTION.SEARCH_ADD, newSearchTags);
};

/* export const removeFromSearchTags = (searchTags: string[], tag: string) => {
  searctTags.filter((item)=>)
} */

export const searchTagRemove = (searchTags: string[], tag: string) => {
  const newArray:any = searchTags.filter((item)=>item !== tag)
  return createAction(ACTION.REMOVE, newArray);
};

export const clearSearchTag = () => createAction(ACTION.CLEAR);

export const changeColor = (payload:actionType) => createAction(ACTION.SEARCH_ADD, payload);