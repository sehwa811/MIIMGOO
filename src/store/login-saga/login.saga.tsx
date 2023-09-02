import { takeLatest, put, all, call } from "redux-saga/effects";
import createAction from "../../utils/action-creator";
import { LOGIN_ACTION_TYPES } from "./login.types";
import {
  emailRequest,
  getKakaoUrl,
  kakaoLogin,
} from "../../api/kakaoLogin.api";
import { kakaoLoginSuccess } from "./login.action";

export function* getKakaoLoginUrl() {
  try {
    yield call(getKakaoUrl);
  } catch (error) {}
}

export function* kakaoLoginConfirmWithCode(code: any) {
  try {
    yield call(kakaoLogin, code);
    yield put(kakaoLoginSuccess());
  } catch (error) {
    yield call(emailRequest);
  }
}

export function* onKakaoLoginStart() {
  yield takeLatest(LOGIN_ACTION_TYPES.LOGIN_START, getKakaoLoginUrl);
}

export function* onConfirmLogin() {
  yield takeLatest(LOGIN_ACTION_TYPES.CONFIRM_LOGIN, kakaoLoginConfirmWithCode);
}

export function* loginSaga() {
  yield all([call(onKakaoLoginStart)]);
}
