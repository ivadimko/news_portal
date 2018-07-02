import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Button } from 'antd';
import { hasErrors } from '@/helpers/helper';

const FormItem = Form.Item;

class SignUpForm extends Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  static propTypes = {
    form: PropTypes.object.isRequired,
    signUp: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
  }

  handleSubmit = (e) => {
    const { form, signUp, signIn } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        form.resetFields();
        console.log('Received values of form: ', values); // eslint-disable-line no-console
        signUp({
          email: values['sign-up_email'],
          name: values['sign-up_name'], // min 2 symbols
          password: values['sign-up_password'], // min 6 symbols
          password_confirm: values['sign-up_repassword'],
        })
          .then(() => signIn({
            email: values['sign-up_email'],
            password: values['sign-up_password'], // min 6 symbols
          }));
      }
    });
  }

  render() {
    const { form } = this.props;
    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, getFieldValue,
    } = form;
    const config = {
      name: {
        rules: [{ type: 'string', required: true, min: 2 }],
      },
      email: {
        rules: [{ type: 'email', required: true }],
      },
      password: {
        rules: [{ type: 'string', min: 6, required: true }],
      },
      repassword: {
        rules: [{
          required: true,
          validator(rule, value, callback) {
            if (value) {
              // eslint-disable-next-line no-nested-ternary
              return (value.length >= 6 && value === getFieldValue('sign-up_password')) ? callback()
                : value.length < 6 ? callback('sign-up_repassword must be at least 6 symbols')
                  : callback('passwords must be equal');
            }
            return callback('sign-up_repassword is required');
          },
        }],
      },
    };
    const hasError = name => (isFieldTouched(name) && getFieldError(name) ? 'error' : '');
    return (
      <Form className="form-sign-up" onSubmit={this.handleSubmit}>
        <div className="grid-x grid-margin-x align-bottom">
          <div className="cell small-2">
            <FormItem
              label="Name"
              validateStatus={hasError('name')}
            >
              {getFieldDecorator('sign-up_name', config.name)(<Input
                type={'text'}
              />)}
            </FormItem>
          </div>
          <div className="cell large-2">
            <FormItem
              label="Email"
              validateStatus={hasError('email')}
            >
              {getFieldDecorator('sign-up_email', config.email)(<Input
                type={'email'}
              />)}
            </FormItem>
          </div>
          <div className="cell small-3">
            <FormItem
              label="Password"
              validateStatus={hasError('password')}
            >
              {getFieldDecorator('sign-up_password', config.password)(<Input
                type={'password'}
              />)}
            </FormItem>
          </div>
          <div className="cell small-3">
            <FormItem
              label="Password confirm"
              validateStatus={hasError('repassword')}
            >
              {getFieldDecorator('sign-up_repassword', config.repassword)(<Input
                type={'password'}
              />)}
            </FormItem>
          </div>
          <div className="cell small-2">
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

export default Form.create()(SignUpForm);
