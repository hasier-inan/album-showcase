/* global window */
/* eslint-disable no-console */
import React, { Component } from 'react';
import AlbumShowcase from './';

class Preview extends Component {
  state = { };

  render() {
    return (
      <section>
        <AlbumShowcase />
      </section>
    );
  }
}

export default Preview;
