export const logger = store => next => (action) => { // eslint-disable-line no-unused-vars
  const { type } = action;
  let colorTitle = '#0EBFE9';
  let colorText;
  if (~type.indexOf('SUCCESS')) {
    colorTitle = '#629632';
    colorText = '#629632';
  }
  if (~type.indexOf('ERROR')) {
    colorTitle = '#FF0000';
    colorText = '#FF0000';
  }
  console.log(`%c Called action: %c ${type}`, `color: ${colorTitle}`, `color: ${colorText}`); // eslint-disable-line no-console
  next(action);
};

export const apiFetch = store => next => (action) => {
  const { dispatch } = store;
  const { apiURI, type } = action;
  if (apiURI) {
    dispatch({
      type: `${type}_START`,
    });
    return fetch(apiURI.url, {
      ...apiURI.params,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return response.json();
        }
        dispatch({
          type: `${type}_ERROR`,
          payload: { data: response.status },
        });
        return false;
      })
      .then((result) => {
        if (result) {
          return dispatch({
            type: `${type}_SUCCESS`,
            payload: { data: result },
          });
        }
        return false;
      })
      .catch(error => dispatch({
        type: `${type}_ERROR`,
        payload: { data: error },
      }));
  }
  return next(action);
};
