import {put, takeEvery, call} from 'redux-saga/effects';
import * as NavigationService from '../NavigationService/NavigationService';

import axios from 'axios';
import {
  signUpRequest,
  signUpSuccess,
  signUpFailure,
} from '../store/actions/auth.actions';
import {serverUri} from '../config.js';

const SignUp = function* (action) {
  try {
    const response = yield call(
      axios.post,
      `${serverUri}/auth/signup`,
      action.payload,
    );
    if (!response) {
      throw new Error({message: 'No response from http'});
    } else {
      yield put(signUpSuccess(response));
      alert('Signup success!\nPlease login to continue');
      NavigationService.navigate('Login');
    }
  } catch (e) {
    yield put(signUpFailure({message: e.message}));
  }
};

export default function* actionWatcher() {
  yield takeEvery(signUpRequest().type, SignUp);
}
