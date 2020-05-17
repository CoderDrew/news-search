import React, { Fragment } from 'react';
import Search from '../news/Search';
import News from '../news/News';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <News />
    </Fragment>
  );
};

export default Home;
