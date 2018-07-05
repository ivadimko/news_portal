import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withModal from '@/components/hoc/with-modal/index';
import { withRouter } from 'react-router-dom';
import '../_SingleComment.scss';

const SingleComment = (props) => {
  const {
    className, content, headingRef, extraButton, isLogged, location,
  } = props;
  const allowExtraActions = ~location.pathname.indexOf('view-article');
  const { author, comment } = content;
  return (
    <div className={classNames(['comment', className])}>
      <div ref={headingRef} className="comment__top">
        {!!author.length && <p>{author[0].name}</p>}
        {!!allowExtraActions && isLogged && extraButton}
      </div>
      <div className="comment__body">
        <p>{comment}</p>
      </div>
    </div>
  );
};

SingleComment.propTypes = {
  content: PropTypes.object.isRequired,
  className: PropTypes.string,
  headingRef: PropTypes.func,
  extraButton: PropTypes.element,
  isLogged: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
};

SingleComment.defaultProps = {
  className: '',
  headingRef: () => {},
  extraButton: null,
};

export default {
  default: withRouter(SingleComment),
  withModal: withRouter(withModal(SingleComment)),
};
