import './Card.style.css'

const Card = (props) => {
    const {stylies} = props
    const {id, email, name} = props.monster
    return (
        <div className={stylies} key={id}>
            <img alt='monster'  src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
    </div>
    );
}

export default Card;