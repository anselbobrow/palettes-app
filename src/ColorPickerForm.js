import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import chroma from 'chroma-js';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const styles = {
  root: {
    width: '100%',
  },
  picker: {
    width: '100% !important',
    margin: '2rem 0',
  },
  addColor: {
    width: '100%',
    padding: '1rem',
    marginTop: '1rem',
    fontSize: '2rem',
  },
  colorNameInput: {
    width: '100%',
  },
};

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: '#3f51b5',
      newColorName: '',
    };

    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );

    ValidatorForm.addValidationRule('isColorUnique', () =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };

    this.props.addNewColor(newColor);
    this.setState({ newColorName: '' });
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;

    return (
      <div className={classes.root}>
        <ChromePicker
          className={classes.picker}
          color={currentColor}
          onChange={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            className={classes.colorNameInput}
            value={newColorName}
            label="Color Name"
            name="newColorName"
            variant="filled"
            onChange={this.handleChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={['Enter a color name', 'Name already taken', 'Color already used']}
          />
          <Button
            className={classes.addColor}
            variant="contained"
            color="primary"
            style={{
              backgroundColor: paletteIsFull ? 'grey' : currentColor,
              color:
                paletteIsFull || chroma.contrast(currentColor, 'white') >= 4.5 ? 'white' : 'black',
            }}
            type="submit"
            disabled={paletteIsFull}
          >
            {paletteIsFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
