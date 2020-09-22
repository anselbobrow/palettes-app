import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

class PaletteList extends Component {
  constructor() {
    super();

    this.state = { openDeleteDialog: false, deletingId: '' };

    this.goToPalette = this.goToPalette.bind(this);
    this.toggleDeleteDialog = this.toggleDeleteDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleDeleteDialog(id) {
    this.setState(st => ({
      openDeleteDialog: !st.openDeleteDialog,
      deletingId: id,
    }));
  }

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  handleDelete() {
    this.props.deletePalette(this.state.deletingId);
    this.toggleDeleteDialog();
  }

  render() {
    const { palettes, classes } = this.props;
    const { openDeleteDialog } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>
              <span className={classes.react}>React</span> Colors
            </h1>
            <Link to="/palette/new">
              <Button className={classes.newPalette} variant="outlined">
                Create New
              </Button>
            </Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map(palette => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPalette
                  {...palette}
                  handleClick={() => this.goToPalette(palette.id)}
                  openDialog={this.toggleDeleteDialog}
                  key={palette.id}
                  id={palette.id}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={openDeleteDialog}
          aria-labelledby="delete-dialog-title"
          onClose={this.toggleDeleteDialog}
        >
          <DialogTitle id="delete-dialog-title">
            Delete this palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem button onClick={this.toggleDeleteDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
