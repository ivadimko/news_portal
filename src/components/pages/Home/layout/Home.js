import React from 'react';
import ListArticles from '@/components/ListArticles/index';
import Toggle from 'react-toggle';
import PropTypes from 'prop-types';
import 'react-toggle/style.css';
import '../_Home.scss';

const Home = (props) => {
  const { toggleUnsafeMode } = props;
  return (
    <div className="page">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell">
            <div className="page__title">
              <h1>News Portal</h1>
              <label className="page__toggle">
                <Toggle
                  defaultChecked={false}
                  onChange={toggleUnsafeMode}/>
                <span>Unsafe mode</span>
              </label>
            </div>
          </div>
          <div className="cell">
            <ListArticles/>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  toggleUnsafeMode: PropTypes.func.isRequired,
};

export default Home;
