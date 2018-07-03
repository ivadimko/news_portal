import { List } from 'immutable';
import api from '@/config/api';
import cookies from 'js-cookie';
import { USER_TOKEN } from '@/config/constants';

import {
  REMOVE_COMMENT,
  GET_ARTICLES_LIST,
  GET_ARTICLES_LIST_ERROR,
  GET_ARTICLES_LIST_SUCCESS,
  REMOVE_ARTICLE,
  REMOVE_ARTICLE_SUCCESS,
  REMOVE_ARTICLE_ERROR,
  ADD_ARTICLE,
  ADD_ARTICLE_ERROR,
  ADD_ARTICLE_SUCCESS,
} from '@/store/actions';

const initialState = {
  articles: [],
};

const actionHandlers = {
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
  [REMOVE_COMMENT]: (state, action) => {
    const { id, articleId } = action;
    return ({
      ...state,
      articles: state.articles.map(article => (
        article.id === articleId
          ? {
            ...article,
            comments: article.comments.filter(comment => comment.id !== id),
          }
          : article
      )),
    });
  },
};


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
export const removeComment = ({ id, articleId }) => ({
  type: REMOVE_COMMENT,
  id,
  articleId,
});

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
