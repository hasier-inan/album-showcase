import chai, { expect } from 'chai';
import { mount } from 'enzyme';
import React from 'react';
import jsdom from 'mocha-jsdom';
import chaiEnzyme from 'chai-enzyme';
import AlbumShowcase from '../';
import albumType from './album-type';

chai.use(chaiEnzyme());
describe('<AlbumShowcase />', () => {
  jsdom();
  let albumShowcase;

  const config = { type: 'jewelcase' };

  const mountAlbumShowcase = function mountAlbumShowcase() {
    albumShowcase = mount(<AlbumShowcase {...config} />);
  };

  beforeEach(() => {
    mountAlbumShowcase();
  });

  describe('Jewelcase display', () => {
    it('should include box width', () => {
      expect(albumShowcase.find('.showcase-container')).to.have.style('width').equal(`${albumType().jewelcase.box.width}px`);
    });

    it('should include artwork size', () => {
      ['width', 'height'].forEach((property) => {
        expect(albumShowcase.find('.artwork')).to.have.style(property).equal(`${albumType().jewelcase.box[property]}px`);
      });
    });

    it('should include front properties', () => {
      const spineWidth = albumType().jewelcase.back.spine;
      expect(albumShowcase.find('.artwork__front')).to.have.style('-webkit-transform').equal(`translateZ(${spineWidth}px)`);
      expect(albumShowcase.find('.artwork__front')).to.have.style('transform').equal(`translateZ(${spineWidth}px)`);
    });

    it('should include back properties', () => {
      const spineWidth = albumType().jewelcase.back.spine;
      expect(albumShowcase.find('.artwork__back')).to.have.style('-webkit-transform').equal(`rotateY(-179deg) translateZ(${spineWidth}px)`);
      expect(albumShowcase.find('.artwork__back')).to.have.style('transform').equal(`rotateY(-179deg) translateZ(${spineWidth}px)`);
    });

    it('should include spine properties', () => {
      const backCover = albumType().jewelcase.back;
      [0, 1].forEach((index) => {
        expect(albumShowcase.find('.artwork__spine').at(index)).to.have.style('height').equal(`${backCover.height}px`);
        expect(albumShowcase.find('.artwork__spine').at(index)).to.have.style('width').equal(`${backCover.spine * 2}px`);
        expect(albumShowcase.find('.artwork__spine').at(index)).to.have.style('left').equal(`${-backCover.spine}px`);
      });
    });
  });

  describe('View changes', () => {
    it('changes to back view', () => {
      albumShowcase.find('.artwork--hover-left').simulate('click');
      expect(albumShowcase.find('.artwork.artwork--back-view')).to.have.length(1);
    });

    it('changes to inlay view', () => {
      albumShowcase.find('.artwork--hover-right').simulate('click');
      expect(albumShowcase.find('.artwork.artwork--inlay-view')).to.have.length(1);
    });

    it('changes back from back to front view', () => {
      albumShowcase.find('.artwork--hover-left').simulate('click');
      albumShowcase.find('.artwork__back').simulate('click');
      expect(albumShowcase.find('.artwork.artwork--front-view')).to.have.length(1);
    });

    it('changes back from back to front view', () => {
      albumShowcase.find('.artwork--hover-right').simulate('click');
      albumShowcase.find('.artwork__front-inside').simulate('click');
      expect(albumShowcase.find('.artwork.artwork--front-view')).to.have.length(1);
    });

    it('changes view to spinner', () => {
      expect(albumShowcase.find('..artwork--front-view-hover')).to.have.length(0);
      albumShowcase.find('.artwork--hover-left').simulate('mouseEnter');
      expect(albumShowcase.find('.artwork--front-view-hover')).to.have.length(1);
      albumShowcase.find('.artwork--hover-left').simulate('mouseLeave');
      expect(albumShowcase.find('..artwork--front-view-hover')).to.have.length(0);
    });
  });
});
