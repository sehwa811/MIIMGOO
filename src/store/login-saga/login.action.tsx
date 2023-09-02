import createAction from "../../utils/action-creator";
import { LOGIN_ACTION_TYPES } from "./login.types";

export const kakaoLoginStart = () => createAction(LOGIN_ACTION_TYPES.LOGIN_START);

export const kakaoLoginSuccess = () => createAction(LOGIN_ACTION_TYPES.LOGIN_SUCCESS);

export const confirmLoginWithCode = (code: any) =>
  createAction(LOGIN_ACTION_TYPES.CONFIRM_LOGIN, code);


