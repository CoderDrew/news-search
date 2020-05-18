import React, { useReducer } from 'react';
import axios from 'axios';
import NewsContext from './NewsContext';
import NewsReducer from './NewsReducer';
import { SEARCH_NEWS, SET_LOADING, CLEAR_NEWS } from '../types';

const NewsState = (props) => {
  const initialState = {
    newsItems: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  let newsApiKey;

  if (process.env.NODE_ENV !== 'production') {
    newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
  } else {
    newsApiKey = process.env.NEWS_API_KEY;
  }

  //   Search News
  // const searchNews = async (text) => {
  //   setLoading();
  //   const res = await axios.get(`https://newsapi.org/v2/everything?qInTitle=${text}&apiKey=${newsApiKey}`);
  //   dispatch({
  //     type: SEARCH_NEWS,
  //     payload: res.data.articles,
  //   });
  // };
  const searchNews = async (text) => {
    setLoading();
    const res = await axios.get(`https://newsapi.org/v2/everything?qInTitle=${text}&apiKey=da84892f52194006b61f5401f21645c8`);
    dispatch({
      type: SEARCH_NEWS,
      payload: res.data.articles,
    });
  };

  // Clear News
  const clearNews = () => dispatch({ type: CLEAR_NEWS });

  // Set Loading

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <NewsContext.Provider
      value={{
        newsItems: state.newsItems,
        loading: state.loading,
        searchNews,
        clearNews,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
