import { ACTION } from "./TagTypes";
import createAction from "../../utils/action-creator";
import { actionType } from "./TagReducer";

export const dispatchToReducer = (payload: actionType) =>
  createAction(ACTION.ADD, payload);

export const searchTagAdd = (payload: actionType) =>
  createAction(ACTION.SEARCH_ADD, payload);
