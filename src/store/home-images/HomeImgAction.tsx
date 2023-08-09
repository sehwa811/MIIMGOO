import createAction from "../../utils/action-creator";
import { actionType } from "./HomeImgReducer";
import { HOME_IMAGE_ACTION } from "./HomeImgTypes";

export const setHomeImage = (payload: actionType) =>
  createAction(HOME_IMAGE_ACTION.SET_HOME_IMAGE, payload);

