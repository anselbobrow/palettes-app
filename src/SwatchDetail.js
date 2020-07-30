import React, { Component } from 'react';
import Swatch from './Swatch';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class SwatchDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex' };

    this._shades = this.getShades(this.props.palette, this.props.color);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  getShades(palette, color) {
    let shades = [];

    for (let key in palette.colors) {
      shades.push(palette.colors[key].find(c => c.id === color));
    }

    return shades.slice(1);
  }

  render() {
    const { format } = this.state;
    const {paletteName, emoji} = this.props.palette;
    const swatches = this._shades.map(swatch => (
      <Swatch key={swatch.id} name={swatch.name} background={swatch[format]} showLink={false} />
    ));
    return (
      <div className="Palette">
        <Navbar handleFormatChange={this.changeFormat} swatchDetail />
        <div className="Palette-swatches">{swatches}</div>\
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    );
  }
}

export default SwatchDetail;
