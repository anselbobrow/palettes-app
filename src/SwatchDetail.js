import React, { Component } from 'react';
import Swatch from './Swatch';

class SwatchDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this._shades = this.getShades(this.props.palette, this.props.color);
  }

  getShades(palette, color) {
    let shades = [];

    for (let key in palette.colors) {
      shades.push(palette.colors[key].find(c => c.id === color));
    }

    return shades.slice(1);
  }

  render() {
    const swatches = this._shades.map(swatch => (
      <Swatch key={swatch.id} name={swatch.name} background={swatch.hex} showLink={false} />
    ));
    return (
      <div className="Palette">
        <h1>Single color detail component</h1>
        <div className="Palette-swatches">{swatches}</div>
      </div>
    );
  }
}

export default SwatchDetail;
