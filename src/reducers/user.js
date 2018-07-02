import api from '@/config/api';
import cookies from 'js-cookie';
import moment from 'moment';
import { USER_TOKEN } from '@/config/constants';

import {
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  GET_USER_DETAILS,
  GET_USER_DETAILS_ERROR,
  GET_USER_DETAILS_SUCCESS,
  LOG_OUT,
} from '@/store/actions';

const initialState = {
  isLogged: false,
  account: {},
};

const actionHandlers = {
  [SIGN_UP_SUCCESS]: state => // eslint-disable-line no-unused-vars
    ({
      ...state,
    }),
  [SIGN_UP_ERROR]: (state, { payload }) => { // eslint-disable-line no-unused-vars
    const { data } = payload;
    console.log(data); // eslint-disable-line no-console
    alert(data); // eslint-disable-line no-alert
    return {
      ...state,
    };
  },
  [SIGN_IN_SUCCESS]: (state, { payload }) => { // eslint-disable-line no-unused-vars
    const { data } = payload;
    cookies.set(USER_TOKEN, data.token, { expires: moment(data.ttl).days() });
    return ({
      ...state,
      isLogged: true,
      account: { ...data.account },
    });
  },
  [SIGN_IN_ERROR]: (state, { payload }) => { // eslint-disable-line no-unused-vars
    const { data } = payload;
    console.log(data); // eslint-disable-line no-console
    alert(data); // eslint-disable-line no-alert
    return {
      ...state,
    };
  },
  [GET_USER_DETAILS_SUCCESS]: (state, { payload }) => { // eslint-disable-line no-unused-vars
    const { data } = payload;
    return ({
      ...state,
      isLogged: true,
      account: { ...data },
    });
  },
  [GET_USER_DETAILS_ERROR]: (state, { payload }) => { // eslint-disable-line no-unused-vars
    const { data } = payload;
    console.log(data); // eslint-disable-line no-console
    alert(data); // eslint-disable-line no-alert
    return {
      ...state,
    };
  },
  [LOG_OUT]: () => ({
    ...initialState,
  }),
};


export const signUp = data => ({
  type: SIGN_UP,
  apiURI: {
    url: `${api.host}/auth/signup`,
    params: {
      method: 'POST',
      headers: api.headers,
      body: JSON.stringify(data),
    },
  },
});

export const signIn = data => ({
  type: SIGN_IN,
  apiURI: {
    url: `${api.host}/auth/signin`,
    params: {
      method: 'POST',
      headers: api.headers,
      body: JSON.stringify(data),
    },
  },
});

export const getUserDetails = token => ({
  type: GET_USER_DETAILS,
  apiURI: {
    url: `${api.host}/user/details`,
    params: {
      method: 'GET',
      headers: {
        ...api.headers,
        Authorization: `Bearer ${token}`,
      },
    },
  },
});

export const logOut = () => ({
  type: LOG_OUT,
});

export default (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return handler ? handler(state, action) : state;
};
