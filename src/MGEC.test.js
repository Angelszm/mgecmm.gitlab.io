import React from 'react';
import ReactDOM from 'react-dom';
import App from './MGEC';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MGEC />, div);
  ReactDOM.unmountComponentAtNode(div);
});
