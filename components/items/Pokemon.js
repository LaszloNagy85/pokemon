import React, { Component } from 'react'
import Axios from 'axios';

export class Pokemons extends Component {
    state = {
        imageUrl: "",
    };

    getImageUrl = sourceUrl => {
        Axios.get(sourceUrl)
          .then(res => {  
            this.setState({ imageUrl: res.data.sprites.front_default});
      })}

    render() {
        const { name, url } = this.props.pokemon;
        this.getImageUrl(url)
        return (
            <div style={card}>
                <p>{name}</p>
                <img src={this.state.imageUrl} alt=""></img>
                
            </div>
        )
    }
}

 const card = {
    margin: '10px 10px',
    background: '#999',
    float: 'left',
    borderRadius: 10,
    padding: '5px 5px',
 }

export default Pokemons
