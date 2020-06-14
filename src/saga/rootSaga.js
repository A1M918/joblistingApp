import {all, call} from 'redux-saga/effects';
import SigninSaga from './signin.saga';
import SignUpSaga from './signup.saga';
import HomeSaga from './home.saga';

export default function* rootSaga() {
  yield all([call(SigninSaga), call(SignUpSaga), call(HomeSaga)]);
}
