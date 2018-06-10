import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.message = 'Hello React';
  }
  render() {
    return <h1>{this.message}</h1>;
  }
}
