import { ACTION } from "./TagTypes";
import createAction from "../../utils/action-creator";
import { actionType } from "./TagReducer";

const addTagToCircum = (circum: string[], tag: string) => {
  return [...circum, tag];
};

export const dispatchCircum = (circum: string[], tag: string) => {
  const newSearchTags: any = addTagToCircum(circum, tag);
  return createAction(ACTION.CIRCUM_ADD, newSearchTags);
};

const addTagToEmotion = (emotion: string[], tag: string) => {
  return [...emotion, tag];
};

const addTagToPeople = (people: string[], tag: string) => {
  return [...people, tag];
};

const addTagToOthers = (other: string[], tag: string) => {
  return [...other, tag];
};


export const dispatchEmotion = (emotion: string[], tag: string) =>
{const newSearchTags: any = addTagToEmotion(emotion, tag);
return createAction(ACTION.EMOTION_ADD, newSearchTags);}

export const dispatchPeople = (people: string[], tag: string) =>
{const newSearchTags: any = addTagToPeople(people, tag);
  return createAction(ACTION.PEOPLE_ADD, newSearchTags);}

export const dispatchOthers = (other: string[], tag: string) =>
{const newSearchTags: any = addTagToOthers(other, tag);
  return createAction(ACTION.OTHERS_ADD, newSearchTags);}

  

export const searchTagAdd = (payload: actionType) =>
  createAction(ACTION.SEARCH_ADD, payload);

export const dispatchToReducer = (payload: actionType) =>
  createAction(ACTION.ADD, payload);



