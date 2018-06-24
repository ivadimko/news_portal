import React from 'react';
import propTypes from 'prop-types';
import { Input, Form } from 'antd';

const FormItem = Form.Item;

const AddNewArticle = (props) => {
  const { form } = props;
  const {
    getFieldDecorator,
    getFieldError,
    isFieldTouched,
  } = form;

  const config = {
    text: {
      rules: [{ type: 'string', required: true, message: 'Required field' }],
    },
  };

  const hasError = name => (isFieldTouched(name) && getFieldError(name) ? 'error' : '');
  // Only show error after a field is touched.
  return (
    <Form>
      <div className="grid-x grid-margin-x">
        <div className="cell">
          <FormItem
            validateStatus={hasError('text')}
          >
            {getFieldDecorator('title', config.text)(<Input
              placeholder="Title"
            />)}
          </FormItem>
        </div>
        <div className="cell">
          <FormItem
            validateStatus={hasError('text')}
          >
            {getFieldDecorator('text', config.text)(<Input.TextArea
              autosize={{ minRows: 2, maxRows: 6 }}
              placeholder="Text"
            />)}
          </FormItem>
        </div>
      </div>
    </Form>

  );
};

AddNewArticle.propTypes = {
  form: propTypes.object.isRequired,
};

export default Form.create()(AddNewArticle);
