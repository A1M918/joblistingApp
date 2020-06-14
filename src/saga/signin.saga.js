import {put, takeEvery, call} from 'redux-saga/effects';
import * as NavigationService from '../NavigationService/NavigationService';

import axios from 'axios';
import {
  signinRequest,
  signinSuccess,
  signinFailure,
} from '../store/actions/auth.actions';
import {serverUri} from '../config.js';
import {AsyncStorage} from 'react-native';

const SigninSaga = function* (action) {
  try {
    const response = yield call(
      axios.post,
      `${serverUri}/auth/login`,
      action.payload,
    );
    if (!response) {
      throw new Error({message: 'No response from http'});
    } else {
      yield put(signinSuccess(response));
      NavigationService.navigate('User');
      put(
        AsyncStorage.setItem(
          'access_token',
          JSON.stringify(action.payload.data),
        ),
      );
    }
  } catch (e) {
    yield put(signinFailure({message: e.message}));
  }
};

export default function* actionWatcher() {
  yield takeEvery(signinRequest().type, SigninSaga);
}
