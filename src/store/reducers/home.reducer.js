'use strict';

const actionParent = 'home';

export const GET_ALL_JOBS_REQUEST = `${actionParent}/GET_ALL_JOBS_REQUEST`;
export const GET_ALL_JOBS_SUCCESS = `${actionParent}/GET_ALL_JOBS_SUCCESS`;
export const GET_ALL_JOBS_FAILURE = `${actionParent}/GET_ALL_JOBS_FAILURE`;

export const CREATE_JOB_REQUEST = `${actionParent}/CREATE_JOB_REQUEST`;
export const CREATE_JOB_SUCCESS = `${actionParent}/CREATE_JOB_SUCCESS`;
export const CREATE_JOB_FAILURE = `${actionParent}/CREATE_JOB_FAILURE`;

export const GET_JOB_DETAILS_REQUEST = `${actionParent}/GET_JOB_DETAILS_REQUEST`;
export const GET_JOB_DETAILS_SUCCESS = `${actionParent}/GET_JOB_DETAILS_SUCCESS`;
export const GET_JOB_DETAILS_FAILURE = `${actionParent}/GET_JOB_DETAILS_FAILURE`;

const initialState = {
  jobs: [],
  isFetching: false,
  isSubmitting: false,
  success: false,
  error: null,
};

function getInitialState() {
  return initialState;
}

const homeReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case GET_ALL_JOBS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_ALL_JOBS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        jobs: action.payload.data,
      };
    case GET_ALL_JOBS_FAILURE:
      return {
        isFetching: false,
        error: action.payload.message,
      };
    case CREATE_JOB_REQUEST:
      console.log('Createing Job');
      return {
        ...state,
        isSubmitting: true,
      };
    case CREATE_JOB_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        ...action.payload.data,
      };
    case CREATE_JOB_FAILURE:
      return {
        isSubmitting: false,
        error: action.payload.message,
      };
    case GET_JOB_DETAILS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_JOB_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ...action.payload.data,
      };
    case GET_JOB_DETAILS_FAILURE:
      return {
        isFetching: false,
        error: action.payload.message,
      };
    default:
      console.log('Home Default State ====> ', state, action.type);
      return state;
  }
};

export default homeReducer;
