import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Date from '@/components/Date';
import ListComments from '@/components/ListComments';
import { NavLink, withRouter } from 'react-router-dom';
import { Input, Form, Button } from 'antd';
import { hasErrors } from '@/helpers/helper';

const FormItem = Form.Item;

class ViewArticle extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    getArticleInfo: PropTypes.func.isRequired,
    addNewComment: PropTypes.func.isRequired,
    currentArticle: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    isLogged: PropTypes.bool.isRequired,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      addNewComment, form, getArticleInfo, currentArticle,
    } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        form.resetFields();
        console.log('Received values of form: ', values); // eslint-disable-line no-console
        addNewComment({ article_id: currentArticle._id, ...values })
          .then(() => getArticleInfo({ slug: currentArticle.slug }));
      }
    });
  }

  componentDidMount() {
    const { match, getArticleInfo } = this.props;
    const { slug } = match.params;
    this.props.form.validateFields();
    return getArticleInfo({ slug });
  }

  render() {
    const {
      currentArticle, isLogged, form,
    } = this.props;
    const {
      title, author, createAt, text, comments, _id, slug,
    } = currentArticle;

    const {
      getFieldDecorator,
      getFieldError,
      getFieldsError,
      isFieldTouched,
    } = form;
    const hasError = name => (isFieldTouched(name) && getFieldError(name) ? 'error' : '');
    const config = {
      text: {
        rules: [{ type: 'string', required: true, message: 'Required field' }],
      },
    };

    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell">
            {_id &&
            <article className="article article_single">
              <header className="article__top">
                <h4 title={title}>{title}</h4>
                <div className="article__info">
                  {!!author.length && <p className="author">{author[0].name}</p>}
                  <Date className="date" date={createAt} format={'DD[.]MM[.]YYYY'}/>
                </div>
              </header>
              <div className="article__main">
                <div className="article__body">
                  <p>{text}</p>
                </div>
                <footer className="article__footer">
                  <Date className="date" date={createAt}/>
                  {!!comments.length &&
                  <div className="article__comments-toggle">
                    <p>
                      {/*
              plural form for comments count can be replaced with i18n module but not now :)
              */}
                      <b>{comments.length}</b> Comment{comments.length > 1 ? 's' : ''}
                    </p>
                  </div>
                  }
                  {isLogged &&
                  <NavLink to={{ pathname: `/edit-article/${slug}`, state: { title, text } }}>Edit Article</NavLink>}
                </footer>
              </div>
              {isLogged && (
                <Form onSubmit={this.handleSubmit}>
                  <div className="grid-x grid-margin-x">
                    <div className="cell form__item">
                      <FormItem
                        label="Text"
                        validateStatus={hasError('text')}
                      >
                        {getFieldDecorator('comment', config.text)(<Input.TextArea
                          autosize={{ minRows: 8, maxRows: 25 }}
                        />)}
                      </FormItem>
                    </div>
                    <div className="cell form__item">
                      <FormItem>
                        <Button
                          type="primary"
                          htmlType="submit"
                          disabled={hasErrors(getFieldsError())}
                        >
                          Add Comment
                        </Button>
                      </FormItem>
                    </div>
                  </div>
                </Form>
              )}
              <div className="article__comments">
                <ListComments list={comments} slug={slug}/>
              </div>
            </article>}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Form.create()(ViewArticle));
