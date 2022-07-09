import './CardList.style.css';
import Card from '../card/Card';

const CardList = ({ monsters }) =>{
    return (
        <div className='card-list'>
            {monsters.map((monster) =>{
                return (
                    <Card stylies={'card-container'} monster={monster}/>
                )
            })}
        </div>
    );
}

export default CardList;