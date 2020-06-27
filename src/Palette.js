import React, { Component } from 'react';
import Swatch from './Swatch';
import './Palette.css';

class Palette extends Component {
  render() {
    const swatches = this.props.colors.map(color => (
      <Swatch background={color.color} name={color.name} />
    ));

    return (
      <div className="Palette">
        {/* navbar */}
        <div className="Palette-swatches">{swatches}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
