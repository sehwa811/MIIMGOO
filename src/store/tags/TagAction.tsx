import { ACTION } from "./TagTypes";
import createAction from "../../utils/action-creator";
import { actionType } from "./TagReducer";

export const dispatchToReducer = (payload: actionType) =>
  createAction(ACTION.ADD, payload);
