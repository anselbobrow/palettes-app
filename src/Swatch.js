import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/core/styles';
import './Swatch.css';

const styles = {
  Swatch: {
    flex: '20% 0',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover button': {
      opacity: '1',
    },
  },
  dynamicTextColor: {
    color: props => (chroma.contrast(props.background, 'white') < 4.5 ? 'black' : 'white'),
  },
  seeMore: {
    color: props =>
      chroma.contrast(props.background, 'white') < 4.5 ? 'rgb(0, 0, 0, 0.7)' : 'white',
    position: 'absolute',
    bottom: '0',
    right: '0',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '60px',
    height: '30px',
    lineHeight: '30px',
    border: 'none',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  copyButton: {
    color: props =>
      chroma.contrast(props.background, 'white') < 4.5 ? 'rgb(0, 0, 0, 0.7)' : 'white',
    padding: '0',
    width: '100px',
    height: '30px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    textTransform: 'uppercase',
    textDecoration: 'none',
    opacity: '0',
    transition: '0.5s',
  },
};

class Swatch extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1000);
    });
  }

  render() {
    const { classes, name, background, moreUrl, showLink } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.Swatch}>
          <div style={{ background }} className={`copy-overlay ${copied && 'show'}`}></div>
          <div className={`copy-message ${copied && 'show'}`}>
            <h1>Copied!</h1>
            <p className={classes.dynamicTextColor}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.dynamicTextColor}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(Swatch);
