import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const ITEMS = [
  { id: 0, name: "Item #1", complete: false },
  { id: 1, name: "Item #2", complete: false },
  { id: 2, name: "Item #3", complete: true },
  { id: 3, name: "Item #4", complete: false },
];

ReactDOM.render(<App items={ITEMS} />, document.getElementById('app'));
