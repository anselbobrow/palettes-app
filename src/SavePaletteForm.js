import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class SavePaletteForm extends Component {
  constructor(props) {
    super(props);

    this.state = { newPaletteName: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteUnique', value =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(emoji) {
    this.props.savePalette({
      name: this.state.newPaletteName,
      emoji: emoji.native,
    });
  }

  render() {
    const { showEmojiPicker, closeForm, formState } = this.props;
    const { newPaletteName } = this.state;

    return (
      <div>
        <Dialog open={formState === 'name'} onClose={closeForm} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
          <ValidatorForm onSubmit={showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Save your newly created palette. Make sure to give it a unique name!
              </DialogContentText>
              <TextValidator
                fullWidth
                margin="normal"
                label="Palette Name"
                name="newPaletteName"
                value={newPaletteName}
                onChange={this.handleChange}
                validators={['required', 'isPaletteUnique']}
                errorMessages={['Enter a palette name', 'Name already taken']}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={closeForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
        <Dialog open={formState === 'emoji'} onClose={closeForm}>
          <DialogTitle id="form-dialog-title">Choose a palette emoji...</DialogTitle>
          <Picker title="Pick an emoji" onSelect={this.handleSubmit} />
        </Dialog>
      </div>
    );
  }
}

export default SavePaletteForm;
