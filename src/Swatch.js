import React, { Component } from 'react';
import './Swatch.css';

class Swatch extends Component {
  render() {
    return (
      <div style={{ background: this.props.background }} className="Swatch">
        <span>{this.props.name}</span>
        <span>More</span>
      </div>
    );
  }
}

export default Swatch;
