import React from 'react';
import './album-showcase.scss';

class AlbumShowcase extends React.Component {

  constructor() {
    super();
    this.state = {
      artworkView: 'artwork--front-view'
    };
  }

  updateView(view) {
    this.setState({ artworkView: `artwork--${view}-view` });
  }

  render() {
    return (
      <div className="showcase-container ">
        <div className={`artwork ${this.state.artworkView}`}>
          <div className="artwork-cover artwork__front">
            <div className="artwork-cover artwork__front-inlay" />
            <div className="artwork-cover artwork__front-cover" />
          </div>
          <div className="artwork-cover artwork__back" />
          <div className="artwork__spine artwork__spine-right" />
          <div className="artwork__spine artwork__spine-left" />
        </div>
        <div style={{ position: 'absolute', top: 0 }}>
          <button onClick={() => this.updateView('front')}>front</button>
          <button onClick={() => this.updateView('inside')}>inside</button>
          <button onClick={() => this.updateView('back')}>back</button>
        </div>
      </div>
    );
  }
}


AlbumShowcase.propTypes = {
  // artwork: React.PropTypes.shape({
  //   front: React.PropTypes.string,
  //   back: React.PropTypes.string.isRequired
  // }),
  //  onClick: React.PropTypes.func
};

export default AlbumShowcase;
