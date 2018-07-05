import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { hasErrors } from '@/helpers/helper';

const FormItem = Form.Item;

class EditArticle extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    getArticlesList: PropTypes.func.isRequired,
    editArticle: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { form, location, history } = this.props;
    if (location.state) {
      const { title, text } = location.state;

      return form.setFieldsValue({
        title,
        text,
      }, form.validateFields());
    }

    return history.push('/home');
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      editArticle, getArticlesList, form, history, match,
    } = this.props;
    const { slug } = match.params;
    form.validateFields((err, values) => {
      if (!err) {
        form.resetFields();
        console.log('Received values of form: ', values); // eslint-disable-line no-console
        editArticle({ slug, ...values })
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
                  Update Article
                </Button>
              </FormItem>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default withRouter(Form.create()(EditArticle));
