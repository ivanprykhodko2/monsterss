import './SearchBox.style.css';

const SearchBox = ({ onChangeHandler, placeholder, inputStyle }) => {
    return (
        <div>
            <input 
            type='search' 
            className={ `search-box ${inputStyle}` }
            placeholder={ placeholder }
            onChange={ onChangeHandler }
            />

        </div>
    );
}

export default SearchBox;