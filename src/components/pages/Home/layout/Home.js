import React from 'react';
import ListArticles from '@/components/ListArticles/index';
import PropTypes from 'prop-types';
import User from '@/components/User';
import 'react-toggle/style.css';
import '../_Home.scss';

const Home = () => (
    <div className="page">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell">
            <div className="page__title">
              <h1>News Portal</h1>
            </div>
          </div>
          <div className="cell">
            <ListArticles>
              <User/>
            </ListArticles>
          </div>
        </div>
      </div>
    </div>
);

Home.propTypes = {
  toggleUnsafeMode: PropTypes.func.isRequired,
};

export default Home;
