import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Swatch from './Swatch';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import PaletteFooter from './PaletteFooter';

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexFlow: 'column',
  },

  swatches: {
    height: '90%',
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap',
  },

  goBack: {
    flex: '20% 0',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'black',
    textDecoration: 'none',

    '& button': {
      padding: 0,
      width: 100,
      height: 30,
      cursor: 'pointer',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      color: 'white',
      textTransform: 'uppercase',
      border: 'none',
      outline: 'none',
      transition: '0.5s',
    },
  },
};

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
    const { classes } = this.props;
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;

    const swatches = this._shades.map(swatch => (
      <Swatch key={swatch.name} name={swatch.name} background={swatch[format]} showLink={false} />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar handleFormatChange={this.changeFormat} swatchDetail />
        <div className={classes.swatches}>
          {swatches}
          <Link to={`/palette/${id}`} className={classes.goBack}>
            <button>Go Back</button>
          </Link>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SwatchDetail);
