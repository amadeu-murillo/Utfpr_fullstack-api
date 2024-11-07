import React, { useState } from 'react';
import './css/SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchClick = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Pesquise um versículo (Ex: João 3:16)."
                className="search-bar__input"
            />
            <button
                className="search-bar__button"
                onClick={handleSearchClick}
            >
                Buscar
            </button>
        </div>
    );
};

export default SearchBar;
