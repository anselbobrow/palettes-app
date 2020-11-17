import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import SwatchDetail from './SwatchDetail';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = { palettes: savedPalettes || seedColors };

    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find(palette => palette.id === id);
  }

  savePalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] }, this.syncLocalStorage);
  }

  deletePalette(id) {
    this.setState(prevState => {
      return {
        palettes: prevState.palettes.filter(palette => palette.id !== id),
      };
    }, this.syncLocalStorage);
  }

  syncLocalStorage() {
    // save palettes to local storage
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
  }

  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path="/"
                  render={routeProps => (
                    <div className="page">
                      <PaletteList
                        deletePalette={this.deletePalette}
                        palettes={this.state.palettes}
                        {...routeProps}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/palette/new"
                  render={routeProps => (
                    <div className="page">
                      <NewPaletteForm
                        palettes={this.state.palettes}
                        savePalette={this.savePalette}
                        {...routeProps}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/palette/:palette"
                  render={routeProps => (
                    <div className="page">
                      <Palette
                        palette={generatePalette(this.findPalette(routeProps.match.params.palette))}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/palette/:palette/:color"
                  render={routeProps => (
                    <div className="page">
                      <SwatchDetail
                        palette={generatePalette(this.findPalette(routeProps.match.params.palette))}
                        color={routeProps.match.params.color}
                      />
                    </div>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
