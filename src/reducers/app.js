import { TOGGLE_UNSAFE_MODE } from '@/store/actions';


const initialState = {
  unsafeMode: false,
};

const actionHandlers = {
  [TOGGLE_UNSAFE_MODE]: (state, action) => // eslint-disable-line no-unused-vars
    ({
      ...state,
      unsafeMode: !state.unsafeMode,
    })
  ,
};

export const toggleUnsafeMode = () => ({
  type: TOGGLE_UNSAFE_MODE,
});

export default (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return handler ? handler(state, action) : state;
};
