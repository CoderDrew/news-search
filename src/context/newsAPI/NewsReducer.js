import { SEARCH_NEWS, CLEAR_NEWS, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_NEWS:
      return {
        ...state,
        newsItems: action.payload,
        loading: false,
      };
    case CLEAR_NEWS:
      return {
        ...state,
        newsItems: [],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
