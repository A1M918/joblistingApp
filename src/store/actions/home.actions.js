'use strict';

import {
  GET_ALL_JOBS_REQUEST,
  GET_ALL_JOBS_SUCCESS,
  GET_ALL_JOBS_FAILURE,
  CREATE_JOB_REQUEST,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_FAILURE,
} from '../reducers/home.reducer';

export const getAllJobsRequest = (payload) => ({
  type: GET_ALL_JOBS_REQUEST,
  payload,
});
export const getAllJobsSuccess = (payload) => ({
  type: GET_ALL_JOBS_SUCCESS,
  payload,
});
export const getAllJobsFailure = (payload) => ({
  type: GET_ALL_JOBS_FAILURE,
  payload,
});

export const createJobRequest = (payload) => ({
  type: CREATE_JOB_REQUEST,
  payload,
});
export const createJobSuccess = (payload) => ({
  type: CREATE_JOB_SUCCESS,
  payload,
});
export const createJobFailure = (payload) => ({
  type: CREATE_JOB_FAILURE,
  payload,
});
