import React, { Component } from 'react';
import Context from '@/helpers/context';
import ArticlesList from '@/containers/articles-list';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import './_home.scss';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      unsafeMode: false,
    };
  }

  toggleUnsafeMode = () => {
    this.setState(prev => ({ unsafeMode: !prev.unsafeMode }));
  }

  render() {
    const { unsafeMode } = this.state;
    return (
      <div className="page">
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell">
              <div className="page__title">
                <h1>News Portal</h1>
                <label className="page__toggle">
                  <Toggle
                    defaultChecked={unsafeMode}
                    onChange={this.toggleUnsafeMode}/>
                  <span>Unsafe mode</span>
                </label>
              </div>
            </div>
            <div className="cell">
              <Context.Provider value={{ unsafeMode }}>
                <ArticlesList/>
              </Context.Provider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
