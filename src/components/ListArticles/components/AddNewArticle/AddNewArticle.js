import React from 'react';
import PropTypes from 'prop-types';
import withModal from '@/components/hoc/with-modal';
import './_AddNewArticle.scss';

const AddNewArticle = (props) => {
  const { extraButton } = props;

  return (
    <div className="add-new-toolbar">
      {extraButton}
    </div>
  );
};

AddNewArticle.propTypes = {
  extraButton: PropTypes.element.isRequired,
};

export default withModal(AddNewArticle);
