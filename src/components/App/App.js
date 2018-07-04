import React from 'react';
import CoreLayout from '@/layouts/CoreLayout/index';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Route component={CoreLayout}/>
  </BrowserRouter>
);


export default App;
