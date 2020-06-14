import {put, takeEvery, call} from 'redux-saga/effects';
import * as NavigationService from '../NavigationService/NavigationService';

import axios from 'axios';
import {
  getAllJobsRequest,
  getAllJobsSuccess,
  getAllJobsFailure,
} from '../store/actions/home.actions';
import {serverUri} from '../config.js';

const HomeSaga = function* (action) {
  try {
    const response = yield call(axios.get, `${serverUri}/job`);
    if (!response) {
      throw new Error({message: 'No response from http'});
    } else {
      yield put(getAllJobsSuccess(response));
    }
  } catch (e) {
    yield put(getAllJobsFailure({message: e.message}));
  }
};

export default function* actionWatcher() {
  yield takeEvery(getAllJobsRequest().type, HomeSaga);
}
