/* global window */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom';
import AlbumShowcase from './src/preview';
const Preview = () =>
  <div>
    <AlbumShowcase />
  </div>;

ReactDOM.render(React.createElement(Preview), window.container);
