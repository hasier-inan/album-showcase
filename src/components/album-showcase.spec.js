import { expect } from 'chai';
import { mount } from 'enzyme';
import React from 'react';
import jsdom from 'mocha-jsdom';

import AlbumShowcase from '../';

describe('<AlbumShowcase />', () => {
  jsdom();
  let albumShowcase;

  const config = { };

  const mountAlbumShowcase = function mountAlbumShowcase() {
    albumShowcase = mount(<AlbumShowcase {...config} />);
  };

  beforeEach(() => {
    mountAlbumShowcase();
  });

  describe('Default display', () => {
    it('should show case details', () => {
      expect(albumShowcase).to.have.length(1);
    });
  });
});
