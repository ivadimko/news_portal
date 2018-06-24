import 'antd/dist/antd.min.css';
import '@/styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import loadFonts from '@/scripts/utils/loadfonts';
import App from '@/components/App';
import store from '@/store/createStore';

loadFonts(['Prata:400:latin', 'Montserrat:300,400,700:latin']);

document.addEventListener('DOMContentLoaded', () => {
  const main = document.createElement('div');
  main.id = 'app';
  document.body.insertBefore(main, document.body.firstChild);
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    main,
  );
  Modal.setAppElement(main);
});
