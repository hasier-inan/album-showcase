import React from 'react';
import albumType from './album-type';
import './album-showcase.scss';

class AlbumShowcase extends React.Component {

  constructor() {
    super();
    this.state = {
      artworkView: 'artwork--front-view',
      artworkViewHover: ''
    };
  }

  updateView(view) {
    this.setState({ artworkView: `artwork--${view}-view` });
  }

  flipToSpinner(hover) {
    this.setState({ artworkViewHover: hover ? 'artwork--front-view-hover' : '' });
  }

  box() {
    return albumType()[this.props.type].box;
  }

  back() {
    const backCover = albumType()[this.props.type].back;
    return { WebkitTransform: `rotateY(-179deg) translateZ(${backCover.spine / 2}px)`,
      transform: `rotateY(-179deg) translateZ(${backCover.spine / 2}px)` };
  }

  front() {
    const backCover = albumType()[this.props.type].back;
    return { WebkitTransform: `translateZ(${backCover.spine / 2}px)`,
      transform: `translateZ(${backCover.spine / 2}px)`
    };
  }

  spine() {
    const backCover = albumType()[this.props.type].back;
    return { height: `${backCover.height}px`,
      width: `${backCover.spine}px`,
      left: `${-backCover.spine / 2}px` };
  }

  render() {
    return (
      <div className="showcase-container" style={{ width: `${this.box().width}px` }}>
        <div
          className={`artwork ${this.state.artworkView} ${this.state.artworkViewHover}`}
          style={{ height: `${this.box().height}px`, width: `${this.box().width}px` }}
        >
          <div
            className="artwork--hover artwork--hover-left"
            style={this.front()}
            onMouseEnter={() => this.flipToSpinner(true)}
            onMouseLeave={() => this.flipToSpinner(false)}
            onClick={() => this.updateView('back')}
          />
          <div
            className="artwork--hover artwork--hover-right"
            style={this.front()}
            onClick={() => this.updateView('inside')}
          />
          <div className="artwork-cover artwork__front" style={this.front()}>
            <div
              className="artwork-cover artwork__front-inlay"
              onClick={() => this.updateView('front')}
            />
            <div className="artwork-cover artwork__front-cover" />
          </div>
          <div
            className="artwork-cover artwork__back"
            style={this.back()}
            onClick={() => this.updateView('front')}
          />
          <div className="artwork__spine artwork__spine-right" style={this.spine()} />
          <div className="artwork__spine artwork__spine-left" style={this.spine()} />
        </div>
      </div>
    );
  }
}


AlbumShowcase.propTypes = {
  type: React.PropTypes.string.isRequired

  // dimensions: React.PropTypes.shape({
  //   width: React.PropTypes.string,
  //   height: React.PropTypes.string.isRequired,
  //   depth: React.PropTypes.string.isRequired
  // }),

  // artwork: React.PropTypes.shape({
  //   front: React.PropTypes.string,
  //   back: React.PropTypes.string.isRequired
  // }),

  //  onClick: React.PropTypes.func
};

export default AlbumShowcase;
