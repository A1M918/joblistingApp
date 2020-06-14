'use strict';

const actionParent = 'auth';

export const SIGN_IN_REQUEST = `${actionParent}/SIGN_IN_REQUEST`;
export const SIGN_IN_SUCCESS = `${actionParent}/SIGN_IN_SUCCESS`;
export const SIGN_IN_FAILURE = `${actionParent}/SIGN_IN_FAILURE`;

export const SIGN_UP_REQUEST = `${actionParent}/SIGN_UP_REQUEST`;
export const SIGN_UP_SUCCESS = `${actionParent}/SIGN_UP_SUCCESS`;
export const SIGN_UP_FAILURE = `${actionParent}/SIGN_UP_FAILURE`;

const initialState = {
  isFetching: false,
  isSubmitting: false,
  success: false,
  error: null,
};

function getInitialState() {
  return initialState;
}

const signInReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        isSubmitting: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        ...action.payload.data,
      };
    case SIGN_IN_FAILURE:
      return {
        isSubmitting: false,
        error: action.payload.message,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        isSubmitting: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        ...action.payload.data,
      };
    case SIGN_UP_FAILURE:
      return {
        isSubmitting: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default signInReducer;
