import React from 'react';
import CoreLayout from '@/layouts/CoreLayout/index';
import { HashRouter, Route } from 'react-router-dom';

const App = () => (
  <HashRouter>
    <Route path="/" component={CoreLayout}/>
  </HashRouter>
);


export default App;
