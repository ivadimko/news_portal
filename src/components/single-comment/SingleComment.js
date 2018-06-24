import React from 'react';
import PropTypes from 'prop-types';
import Context from '@/helpers/context';
import classNames from 'classnames';
import Date from '@/components/date';
import withModal from '@/components/hoc/with-modal';
import './_single-comment.scss';

const SingleComment = (props) => {
  const {
    className, content, mainRef, headingRef, extraButton,
  } = props;
  const { author, text, date } = content;
  return (
    <div ref={mainRef} className={classNames(['comment', className])}>
      <div ref={headingRef} className="comment__top">
        <p>{author}</p>
        <Date date={date} format={'DD[.]MM[.]YYYY'}/>
        <Context.Consumer>
          {({ unsafeMode }) => unsafeMode && extraButton}
        </Context.Consumer>
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
  mainRef: PropTypes.func,
  headingRef: PropTypes.func,
  extraButton: PropTypes.element,
};

SingleComment.defaultProps = {
  className: '',
  mainRef: () => {},
  headingRef: () => {},
  extraButton: null,
};

export default {
  default: SingleComment,
  withModal: withModal(SingleComment),
};
