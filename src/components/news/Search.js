import React, { useState, useContext } from 'react';
import NewsContext from '../../context/newsAPI/NewsContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
  const newsContext = useContext(NewsContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter a topic', 'danger');
    } else {
      newsContext.searchNews(text);
      setText('');
    }
  };

  return (
    <div className='my-2'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input className='form-control' type='text' name='text' placeholder='Search News...' value={text} onChange={onChange} />
        </div>
        <input type='submit' value='Search' className='btn btn-dark btn-block' />
      </form>
      {newsContext.newsItems.length > 0 && (
        <button className='btn btn-light btn-block' onClick={newsContext.clearNews}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
