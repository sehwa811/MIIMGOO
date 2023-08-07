import { ACTION } from "./ImageTypes";
import createAction from "../../utils/action-creator";
import { actionType } from "./ImageReducer";

export const dispatchToImageReducer = (payload: actionType) =>
  createAction(ACTION.SET_IMAGE_TITLE, payload);
