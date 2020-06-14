'use strict';

import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from '../reducers/auth.reducer';

export const signinRequest = (payload) => ({type: SIGN_IN_REQUEST, payload});
export const signinSuccess = (payload) => ({type: SIGN_IN_SUCCESS, payload});
export const signinFailure = (payload) => ({type: SIGN_IN_FAILURE, payload});

export const signUpRequest = (payload) => ({type: SIGN_UP_REQUEST, payload});
export const signUpSuccess = (payload) => ({type: SIGN_UP_SUCCESS, payload});
export const signUpFailure = (payload) => ({type: SIGN_UP_FAILURE, payload});
