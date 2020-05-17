import React, { useContext } from 'react';
import NewsItem from './NewsItem';
import Spinner from '../layout/Spinner';
import NewsContext from '../../context/newsAPI/NewsContext';

const News = () => {
  const newsContext = useContext(NewsContext);

  const { loading, newsItems } = newsContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <div className='card-columns'>
          {newsItems.map((newsItem) => (
            <NewsItem key={newsItem.publishedAt} newsItem={newsItem}></NewsItem>
          ))}
        </div>
      </div>
    );
  }
};

export default News;
