import React from 'react';
import ListArticles from '@/components/ListArticles/index';
import '../_Home.scss';

const Home = () => (
    <div className="page">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell">
            <ListArticles />
          </div>
        </div>
      </div>
    </div>
);

export default Home;
