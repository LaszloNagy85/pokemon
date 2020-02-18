import React, { Component } from "react";
import Axios from "axios";

import Header from "./components/layout/Header";
import PokemonsList from "./components/pages/PokemonsList";
import Types from "./components/pages/Types";
import DetailedView from "./components/pages/DetailerView";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import logo from './logo.svg';

import "./App.css";

class App extends Component {
  state = {
    pokemons: [],
    types: []
  };

  componentDidMount() {
    Axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
      this.setState({
        pokemons: res.data.results.map(
          pokemon => (pokemon = { id: pokemon.url.split("/")[6], ...pokemon })
        )
      });
    });
    Axios.get("https://pokeapi.co/api/v2/type").then(res => {
      this.setState({ types: res.data.results });
    });
  }

  getPokemonById = (choosenId) => {
    console.log(choosenId);
    return (
      this.state.pokemons.filter(
      pokemon => pokemon.id === choosenId)
    )}

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/pokemons"
            render={props => (
              <React.Fragment>
                <PokemonsList pokemons={this.state.pokemons} />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/types"
            render={props => (
              <React.Fragment>
                <Types types={this.state.types} />
              </React.Fragment>
            )}
          />
          <Route path="/pokemon/:id" 
            render={props => (
              <React.Fragment>
                <DetailedView getPokemon={this.getPokemonById} id={this.params}
                 />
              </React.Fragment>
            )} />
        </div>
      </Router>
    );
  }
}

export default App;
