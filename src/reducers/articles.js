import uid from 'uid';
import moment from 'moment';
import { List } from 'immutable';
import api from '@/config/api';

import {
  REMOVE_COMMENT,
  GET_ARTICLES_LIST,
  GET_ARTICLES_LIST_ERROR,
  GET_ARTICLES_LIST_SUCCESS,
  REMOVE_ARTICLE,
  ADD_ARTICLE,
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
  [ADD_ARTICLE]: (state, action) => {
    const { title, text } = action;
    return ({
      ...state,
      articles: state.articles.concat({
        id: uid(10),
        title,
        author: 'Anonymous',
        date: moment(),
        text,
        comments: [],
      }),
    });
  },
  [REMOVE_ARTICLE]: (state, action) => {
    const { id } = action;
    return ({
      ...state,
      articles: state.articles.filter(article => article.id !== id),
    });
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

export const removeArticle = ({ id }) => ({
  type: REMOVE_ARTICLE,
  id,
});

export const removeComment = ({ id, articleId }) => ({
  type: REMOVE_COMMENT,
  id,
  articleId,
});

export const addNewArticle = ({ title, text }) => ({
  type: ADD_ARTICLE,
  title,
  text,
});

export default (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return handler ? handler(state, action) : state;
};
