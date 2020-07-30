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
      opacity: 1,
    },
  },

  dynamicTextColor: {
    color: props => (chroma.contrast(props.background, 'white') < 4.5 ? 'black' : 'white'),
  },

  seeMore: {
    color: props =>
      chroma.contrast(props.background, 'white') < 4.5 ? 'rgb(0, 0, 0, 0.7)' : 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 60,
    height: 30,
    lineHeight: '30px',
    border: 'none',
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  copyButton: {
    color: props =>
      chroma.contrast(props.background, 'white') < 4.5 ? 'rgb(0, 0, 0, 0.7)' : 'white',
    padding: 0,
    width: 100,
    height: 30,
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    textTransform: 'uppercase',
    textDecoration: 'none',
    opacity: 0,
    transition: '0.5s',
  },

  boxContent: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    padding: '0 0 0.6rem 0.6rem',
    color: 'black',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: '0.75rem',
  },

  copyOverlay: {
    opacity: 0,
    zIndex: '-1',
    width: '100%',
    height: '100%',
    position: 'absolute',
    transform: 'scale(0.1)',
  },

  showOverlay: {
    opacity: 1,
    zIndex: 1,
    transform: 'scale(10)',
    transition: 'transform 0.3s ease-in-out',
  },

  copyMessage: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4rem',
    color: 'white',
    transform: 'scaleX(0)',
    opacity: 0,
    zIndex: '-1',
    '& h1': {
      alignSelf: 'stretch',
      fontWeight: 400,
      textShadow: '1px 2px black',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      textAlign: 'center',
      marginBottom: 0,
      padding: '1rem',
      textTransform: 'uppercase',
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: 100,
    },
  },

  showMessage: {
    opacity: 1,
    transform: 'scaleX(1)',
    zIndex: 2,
    transition: 'transform 0.4s ease-in-out, opacity 0.6s ease',
    transitionDelay: '0.1s',
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
          <div
            style={{ background }}
            className={`${classes.copyOverlay} ${copied ? classes.showOverlay : undefined}`}
          ></div>
          <div className={`${classes.copyMessage} ${copied ? classes.showMessage : undefined}`}>
            <h1>Copied!</h1>
            <p className={classes.dynamicTextColor}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
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
