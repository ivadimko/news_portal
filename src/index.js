import '@/styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import loadFonts from '@/scripts/utils/loadfonts';
import App from '@/components/app';

loadFonts(['Prata:400:latin', 'Montserrat:300,400,700:latin']);

ReactDOM.render(<App />, document.querySelector('#app'));
