import React, { Component } from 'react';
import './SearchBox.style.css';

class SearchBox extends Component {
    render() {
    
        const { onChangeHandler, placeholder, inputStyle } = this.props
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
}

export default SearchBox;