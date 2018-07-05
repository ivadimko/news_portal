import React from 'react';
import CoreLayout from '@/layouts/CoreLayout/index';
import { HashRouter, Route } from 'react-router-dom';

const App = () => (
  <HashRouter>
    <Route component={CoreLayout}/>
  </HashRouter>
);


export default App;
