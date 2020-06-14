import {put, takeEvery, call} from 'redux-saga/effects';
import * as NavigationService from '../NavigationService/NavigationService';
import {AsyncStorage} from 'react-native';

import axios from 'axios';
import {
  signinRequest,
  signinSuccess,
  signinFailure,
} from '../store/actions/auth.actions';
import {serverUri} from '../config.js';

const SigninSaga = function* (action) {
  try {
    const response = yield call(
      axios.post,
      `${serverUri}/auth/login`,
      action.payload,
    );
    if (!response) {
      yield put(signinFailure({message: 'No response from server'}));
      throw new Error({message: 'No response from http'});
    } else {
      yield AsyncStorage.setItem(
        'access_token',
        JSON.stringify(response.data.access_token),
      );
      yield AsyncStorage.setItem('user', JSON.stringify(response.data.user));
      yield put(signinSuccess(response));
      NavigationService.navigate('User');
    }
  } catch (e) {
    yield put(signinFailure({message: e.message}));
  }
};

export default function* actionWatcher() {
  yield takeEvery(signinRequest().type, SigninSaga);
}
