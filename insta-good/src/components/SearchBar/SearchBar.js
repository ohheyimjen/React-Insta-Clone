import React from 'react';
import './SearchBar.css'
import IGLogo from './instagram.png'

class SearchBar extends React.Component {
    

render () {
    return (
        <div className="searchBar">
            <img className="logo" alt="logo" src={IGLogo} />
        </div>
    );
};
}

export default SearchBar;