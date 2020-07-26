import React, { Component } from 'react';
import Swatch from './Swatch';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };

    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const swatches = colors[level].map(color => (
      <Swatch background={color.hex} name={color.name} />
    ));

    return (
      <div className="Palette">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
        />
        {/* navbar */}
        <div className="Palette-swatches">{swatches}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
