import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import SwatchDetail from './SwatchDetail';

class App extends Component {
  findPalette(id) {
    return seedColors.find(palette => palette.id === id);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/palette/new" render={() => <NewPaletteForm />} />
        <Route
          exact
          path="/"
          render={routeProps => <PaletteList palettes={seedColors} {...routeProps} />}
        />
        <Route
          exact
          path="/palette/:palette"
          render={routeProps => (
            <Palette palette={generatePalette(this.findPalette(routeProps.match.params.palette))} />
          )}
        />
        <Route
          exact
          path="/palette/:palette/:color"
          render={routeProps => (
            <SwatchDetail
              palette={generatePalette(this.findPalette(routeProps.match.params.palette))}
              color={routeProps.match.params.color}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
