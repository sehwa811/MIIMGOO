import { ACTION } from "./ImageTypes";
import createAction from "../../utils/action-creator";
import { actionType } from "./ImageReducer";

export const setImageTitle = (payload: actionType) =>
  createAction(ACTION.SET_IMAGE_TITLE, payload);

export const setImageFile = (payload: actionType) =>
  createAction(ACTION.SET_IMAGE_FILE, payload);

  export const setImage = (payload: actionType) =>
  createAction(ACTION.SET_IMAGE, payload);