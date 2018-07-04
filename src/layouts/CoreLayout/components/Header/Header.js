import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Toolbar from '@/components/Toolbar/index';

const Header = (props) => {
  const { state = { title: 'News Portal' } } = props.location;
  const { title } = state;
  return (
    <header>
      <div className="grid-container">
        <div className="grid-x grid-margin-x page__header">
          <div className="cell large-8">
            <div className="page__title">
              <h1>{title}</h1>
            </div>
          </div>
          <div className="cell large-4 flex-container align-right">
            <Toolbar/>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Header);
