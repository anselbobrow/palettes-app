import React, { Component } from 'react';
import Swatch from './Swatch';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: 'hex' };

    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const swatches = colors[level].map(color => (
      <Swatch background={color[format]} name={color.name} />
    ));

    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
        {/* navbar */}
        <div className="Palette-swatches">{swatches}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
