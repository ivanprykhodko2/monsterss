import React, { Component } from 'react';
import './Card.style.css'
class Card extends Component {
    render() {
        const {stylies} = this.props
        const {id, email, name} = this.props.monster
        return (
            <div className={stylies} key={id}>
                <img alt='monster'  src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                <h2>{name}</h2>
                <p>{email}</p>
        </div>
        );
    }
}

export default Card;