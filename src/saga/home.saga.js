import {put, takeEvery, call, all} from 'redux-saga/effects';

import axios from 'axios';
import {
  getAllJobsRequest,
  getAllJobsSuccess,
  getAllJobsFailure,
  createJobRequest,
  createJobSuccess,
  createJobFailure,
} from '../store/actions/home.actions';
import {serverUri} from '../config.js';

const HomeSaga = function* (action) {
  try {
    const response = yield call(axios.get, `${serverUri}/job`);
    if (!response) {
      yield put(getAllJobsFailure({message: 'No response from server'}));
      throw new Error({message: 'No response from http'});
    } else {
      yield put(getAllJobsSuccess(response));
    }
  } catch (e) {
    yield put(getAllJobsFailure({message: e.message}));
  }
};

const JobSaga = function* (action) {
  try {
    const response = yield call(
      axios.post,
      `${serverUri}/job/create`,
      action.payload,
    );
    if (!response) {
      yield put(createJobFailure({message: 'No response from server'}));
      throw new Error({message: 'No response from http'});
    } else {
      console.log('response ===> ', response);
      yield put(createJobSuccess(response));
    }
  } catch (e) {
    yield put(createJobFailure({message: e.message}));
  }
};

export default function* actionWatcher() {
  yield all([
    takeEvery(getAllJobsRequest().type, HomeSaga),
    takeEvery(createJobRequest().type, JobSaga),
  ]);
}
