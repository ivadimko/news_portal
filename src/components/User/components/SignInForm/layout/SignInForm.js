import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Button } from 'antd';
import { hasErrors } from '@/helpers/helper';

const FormItem = Form.Item;


class SignInForm extends Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  static propTypes = {
    form: PropTypes.object.isRequired,
    signIn: PropTypes.func.isRequired,
  }

  handleSubmit = (e) => {
    const { form, signIn } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        form.resetFields();
        console.log('Received values of form: ', values); // eslint-disable-line no-console
        signIn({
          email: values['sign-in_email'],
          password: values['sign-in_password'], // min 6 symbols
        });
      }
    });
  }

  render() {
    const { form } = this.props;
    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    } = form;
    const config = {
      email: {
        rules: [{
          type: 'email',
          required: true,
        }],
      },
      password: {
        rules: [{ type: 'string', min: 6, required: true }],
      },
    };
    const hasError = name => (isFieldTouched(name) && getFieldError(name) ? 'error' : '');
    return (
      <Form className="form-sign-in" onSubmit={this.handleSubmit}>
        <div className="grid-x grid-margin-x align-bottom">
          <div className="cell small-5">
            <FormItem
              label="Email"
              validateStatus={hasError('email')}
            >
              {getFieldDecorator('sign-in_email', config.email)(<Input
                type={'email'}
              />)}
            </FormItem>
          </div>
          <div className="cell small-4">
            <FormItem
              label="Password"
              validateStatus={hasError('password')}
            >
              {getFieldDecorator('sign-in_password', config.password)(<Input
                type={'password'}
              />)}
            </FormItem>
          </div>
          <div className="cell small-3">
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
    );
  }
}

export default Form.create()(SignInForm);
