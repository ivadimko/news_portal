import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Date from '@/components/Date/index';
import withModal from '@/components/hoc/with-modal/index';
import '../_SingleComment.scss';

const SingleComment = (props) => {
  const {
    className, content, headingRef, extraButton, unsafeMode,
  } = props;
  const { author, text, date } = content;
  return (
    <div className={classNames(['comment', className])}>
      <div ref={headingRef} className="comment__top">
        <p>{author}</p>
        <Date date={date} format={'DD[.]MM[.]YYYY'}/>
        {unsafeMode && extraButton}
      </div>
      <div className="comment__body">
        <p>{text}</p>
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
