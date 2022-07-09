import React, { Component } from 'react';
import './CardList.style.css';
import Card from '../card/Card';

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return (
            <div className='card-list'>
                {monsters.map((monster) =>{
                    const {name, id, email} = monster;
                    return (
                        <Card stylies={'card-container'} monster={monster}/>
                    )
                })}
            </div>
        );
    }
}

export default CardList;