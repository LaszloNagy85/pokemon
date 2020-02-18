import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class type extends Component {
    render() {
        const { name, url } = this.props.type;
        return (
            <div style={typeCard}>
                <Link style={linkStyle} to={url}>{name}</Link>
                
            </div>
        )
    }
}

const typeCard = {
    margin: '10px 10px',
    background: '#999',
    float: 'left',
    borderRadius: 10,
    padding: '20px 20px',
    cursor: 'pointer',
 }

 const linkStyle = {
     textDecoration: 'none',
 }
export default type
