import React from 'react';
import PropTypes from 'prop-types';

const NewsItem = ({ newsItem: { url, urlToImage, title, description } }) => {
  return (
    <div>
      <div className='card card-drew'>
        <img className='card-img-top' src={urlToImage} alt='' />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
        </div>
        <div className='card-footer'>
          <a href={url} className='btn btn-primary btn-sm mr-1' target='blank'>
            Read Article
          </a>
        </div>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  newsItem: PropTypes.object.isRequired,
};

export default NewsItem;
