import React, { Component } from "react";
import Pokemon from "../items/Pokemon";

class PokemonsList extends Component {

  render() {
    return this.props.pokemons.map(pokemon => 
      <Pokemon key={pokemon.id} pokemon={pokemon}/>
    );
  }
} 

export default PokemonsList;
