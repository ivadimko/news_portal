import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { hasErrors } from '@/helpers/helper';

const FormItem = Form.Item;

class AddNewArticle extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    getArticlesList: PropTypes.func.isRequired,
    addNewArticle: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.form.validateFields();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      addNewArticle, getArticlesList, form, history,
    } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        form.resetFields();
        console.log('Received values of form: ', values); // eslint-disable-line no-console
        addNewArticle({ ...values })
          .then(() => getArticlesList())
          .then(() => history.push('/home'));
      }
    });
  }

  render() {
    const { form } = this.props;
    const {
      getFieldDecorator,
      getFieldError,
      getFieldsError,
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
      <div className="grid-container">
        <Form onSubmit={this.handleSubmit}>
          <div className="grid-x grid-margin-x">
            <div className="cell large-6 large-offset-3 form__item">
              <FormItem
                label="Title"
                validateStatus={hasError('text')}
              >
                {getFieldDecorator('title', config.text)(<Input />)}
              </FormItem>
            </div>
            <div className="cell large-6 large-offset-3 form__item">
              <FormItem
                label="Text"
                validateStatus={hasError('text')}
              >
                {getFieldDecorator('text', config.text)(<Input.TextArea
                  autosize={{ minRows: 8, maxRows: 25 }}
                />)}
              </FormItem>
            </div>
            <div className="cell small-6 large-offset-3 form__item">
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={hasErrors(getFieldsError())}
                >
                  Log In
                </Button>
              </FormItem>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default withRouter(Form.create()(AddNewArticle));
