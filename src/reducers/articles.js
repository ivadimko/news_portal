import { List } from 'immutable';
import api from '@/config/api';
import cookies from 'js-cookie';
import { USER_TOKEN } from '@/config/constants';

import {
  REMOVE_COMMENT,
  REMOVE_COMMENT_SUCCESS,
  REMOVE_COMMENT_ERROR,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR,
  GET_ARTICLES_LIST,
  GET_ARTICLES_LIST_ERROR,
  GET_ARTICLES_LIST_SUCCESS,
  GET_ARTICLE_INFO,
  GET_ARTICLE_INFO_ERROR,
  GET_ARTICLE_INFO_SUCCESS,
  EDIT_ARTICLE,
  EDIT_ARTICLE_ERROR,
  EDIT_ARTICLE_SUCCESS,
  REMOVE_ARTICLE,
  REMOVE_ARTICLE_SUCCESS,
  REMOVE_ARTICLE_ERROR,
  ADD_ARTICLE,
  ADD_ARTICLE_ERROR,
  ADD_ARTICLE_SUCCESS,
} from '@/store/actions';

const initialState = {
  articles: [],
  currentArticle: {},
};

const actionHandlers = {
  [GET_ARTICLES_LIST]: state => // eslint-disable-line no-unused-vars
    ({
      ...state,
      currentArticle: {},
    }),
  [GET_ARTICLES_LIST_SUCCESS]: (state, { payload }) => { // eslint-disable-line no-unused-vars
    const { data } = payload;
    return ({
      ...state,
      articles: List(data.items),
    });
  },
  [GET_ARTICLES_LIST_ERROR]: (state, { payload }) => { // eslint-disable-line no-unused-vars
    const { data } = payload;
    console.log(data); // eslint-disable-line no-console
    alert(data); // eslint-disable-line no-alert
    return {
      ...state,
    };
  },
  [GET_ARTICLE_INFO_SUCCESS]: (state, { payload }) => { // eslint-disable-line no-unused-vars
    const { data } = payload;
    return ({
      ...state,
      currentArticle: data.data[0],
    });
  },
  [GET_ARTICLE_INFO_ERROR]: (state, { payload }) => { // eslint-disable-line no-unused-vars
    const { data } = payload;
    console.log(data); // eslint-disable-line no-console
    alert(data); // eslint-disable-line no-alert
    return {
      ...state,
    };
  },
  [ADD_ARTICLE_SUCCESS]: state => ({
    ...state,
  }),
  [ADD_ARTICLE_ERROR]: (state, { payload }) => {
    const { data } = payload;
    console.log(data); // eslint-disable-line no-console
    alert(data); // eslint-disable-line no-alert
    return {
      ...state,
    };
  },
  [REMOVE_ARTICLE_SUCCESS]: state => ({
    ...state,
  }),
  [REMOVE_ARTICLE_ERROR]: (state, { payload }) => {
    const { data } = payload;
    console.log(data); // eslint-disable-line no-console
    alert(data); // eslint-disable-line no-alert
    return {
      ...state,
    };
  },
  [EDIT_ARTICLE_SUCCESS]: state => ({
    ...state,
  }),
  [EDIT_ARTICLE_ERROR]: (state, { payload }) => {
    const { data } = payload;
    console.log(data); // eslint-disable-line no-console
    alert(data); // eslint-disable-line no-alert
    return {
      ...state,
    };
  },
  [REMOVE_COMMENT_SUCCESS]: state => ({
    ...state,
  }),
  [REMOVE_COMMENT_ERROR]: (state, { payload }) => {
    const { data } = payload;
    console.log(data); // eslint-disable-line no-console
    alert(data); // eslint-disable-line no-alert
    return {
      ...state,
    };
  },
  [ADD_COMMENT_SUCCESS]: state => ({
    ...state,
  }),
  [ADD_COMMENT_ERROR]: (state, { payload }) => {
    const { data } = payload;
    console.log(data); // eslint-disable-line no-console
    alert(data); // eslint-disable-line no-alert
    return {
      ...state,
    };
  },
};


export const getArticleInfo = ({ slug }) => ({
  type: GET_ARTICLE_INFO,
  apiURI: {
    url: `${api.host}/article/get/${slug}`,
    params: {
      method: 'GET',
      headers: api.headers,
    },
  },
});


export const getArticlesList = () => ({
  type: GET_ARTICLES_LIST,
  apiURI: {
    url: `${api.host}/article/get`,
    params: {
      method: 'GET',
      headers: api.headers,
    },
  },
});

export const removeArticle = ({ slug }) => {
  const token = cookies.get(USER_TOKEN);
  return ({
    type: REMOVE_ARTICLE,
    apiURI: {
      url: `${api.host}/article/remove/${slug}`,
      params: {
        method: 'DELETE',
        headers: {
          ...api.headers,
          Authorization: `Bearer ${token}`,
        },
      },
    },
  });
};

export const editArticle = ({ slug, title, text }) => {
  const token = cookies.get(USER_TOKEN);
  return ({
    type: EDIT_ARTICLE,
    apiURI: {
      url: `${api.host}/article/update/${slug}`,
      params: {
        method: 'PUT',
        headers: {
          ...api.headers,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, text }),
      },
    },
  });
};


export const addNewComment = ({ article_id, comment }) => { // eslint-disable-line camelcase
  const token = cookies.get(USER_TOKEN);
  return ({
    type: ADD_COMMENT,
    apiURI: {
      url: `${api.host}/comment/create`,
      params: {
        method: 'POST',
        headers: {
          ...api.headers,
          Authorization: `Bearer ${token}`,

        },
        body: JSON.stringify({ article_id, comment }),
      },
    },
  });
};

export const removeComment = ({ id }) => {
  const token = cookies.get(USER_TOKEN);
  return ({
    type: REMOVE_COMMENT,
    apiURI: {
      url: `${api.host}/comment/remove/${id}`,
      params: {
        method: 'DELETE',
        headers: {
          ...api.headers,
          Authorization: `Bearer ${token}`,
        },
      },
    },
  });
};

export const addNewArticle = (data) => {
  const token = cookies.get(USER_TOKEN);
  return ({
    type: ADD_ARTICLE,
    apiURI: {
      url: `${api.host}/article/create`,
      params: {
        method: 'POST',
        headers: {
          ...api.headers,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      },
    },
  });
};
export default (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return handler ? handler(state, action) : state;
};
