import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/SwatchStyles';

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
