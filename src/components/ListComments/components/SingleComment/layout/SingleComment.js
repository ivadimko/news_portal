import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withModal from '@/components/hoc/with-modal/index';
import '../_SingleComment.scss';

const SingleComment = (props) => {
  const {
    className, content, headingRef, extraButton, unsafeMode,
  } = props;
  const { author, comment } = content;
  return (
    <div className={classNames(['comment', className])}>
      <div ref={headingRef} className="comment__top">
        {!!author.length && <p>{author[0].name}</p>}
        {unsafeMode && extraButton}
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
  unsafeMode: PropTypes.bool,
};

SingleComment.defaultProps = {
  className: '',
  headingRef: () => {},
  extraButton: null,
  unsafeMode: false,
};

export default {
  default: SingleComment,
  withModal: withModal(SingleComment),
};
