import { all, call } from 'redux-saga/effects';
import { loginSaga } from './login-saga/login.saga';



export function* rootSaga() {
    yield all([call(loginSaga)])
}