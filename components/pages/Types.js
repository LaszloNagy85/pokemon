import React, { Component } from 'react';
import Type from '../items/Type';

class Types extends Component {
    render() {
        return this.props.types.map(type => 
          <Type key={type.name} type={type}/>
        );
      }
}

export default Types;