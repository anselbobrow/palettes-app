import React, { Component } from 'react';
import './Swatch.css';

class Swatch extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <div style={{ background: background }} className="Swatch">
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    );
  }
}

export default Swatch;
