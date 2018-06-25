import uid from 'uid';
import moment from 'moment';
import articlesList from '@/data/articles-list.json';
import { REMOVE_ARTICLE, REMOVE_COMMENT, ADD_ARTICLE } from '@/store/actions';
import { List } from 'immutable';

const initialState = {
  articles: List(articlesList),
};

const actionHandlers = {
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
