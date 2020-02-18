import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Pokemon by Reactions</h1>
      <Link style={ linkStyle } to="/pokemons">Pokemons</Link>{' '}|{' '}
      <Link style={ linkStyle } to="/types">Types</Link> 
      
    </header>
  );
}

const linkStyle = {
  color: "#39FF14",
  textDecorations: "none"
};

const headerStyle = {
  opacity: 0.8,
  textAlign: "center",
  background: "#333",
  borderRadius: '50%',
  color: "#39FF14",
  padding: "40px"
};
