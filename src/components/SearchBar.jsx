import React, { useState } from 'react';
import './css/SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [searchTermVersiculo, setSearchTermVersiculo] = useState('');
    const [searchTermLivro, setSearchTermLivro] = useState('');

    const livrosNT = [
        "mateus", "marcos", "lucas", "joao", "atos", "romanos",
        "1corintios", "2corintios", "galatas", "efesios", "filipenses",
        "colossenses", "1tessalonicenses", "2tessalonicenses", "1timoteo",
        "2timoteo", "tito", "filemom", "hebreus", "tiago", "1pedro",
        "2pedro", "1joao", "2joao", "3joao", "judas", "apocalipse"
    ];

    const handleInputChange = (e) => {
        setSearchTermVersiculo(e.target.value);
    };

    const handleSelectChange = (e) => {
        setSearchTermLivro(e.target.value);
    };

    const handleSearchClick = () => {
        const searchQuery = `${searchTermLivro} ${searchTermVersiculo}`;
        onSearch(searchQuery);
    };

    const handleRandomClick = () => {
        const randomLivro = livrosNT[Math.floor(Math.random() * livrosNT.length)];
        const randomVersiculo = `${Math.ceil(Math.random() * 28)}:${Math.ceil(Math.random() * 40)}`;
        setSearchTermLivro(randomLivro);
        setSearchTermVersiculo(randomVersiculo);
    };

    return (
        <div className="search-bar">
            <header className="search-bar__header">
                <h1 className="search-bar__title">Mensagem do Dia</h1>
                <p className="search-bar__subtitle">Escolha um livro e busque um versículo ou gere aleatoriamente uma mensagem de Deus para você!</p>
            </header>

            <div className="search-bar__form">
                <div className="search-bar__group">
                    <label htmlFor="livros-nt" className="search-bar__label">Selecione um livro:</label>
                    <select 
                        id="livros-nt" 
                        name="livros-nt" 
                        onChange={handleSelectChange}
                        value={searchTermLivro}
                        className="search-bar__select"
                    >
                        <option value="" disabled>Escolha um livro</option>
                        {livrosNT.map(livro => (
                            <option key={livro} value={livro}>
                                {livro.charAt(0).toUpperCase() + livro.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="search-bar__group">
                    <label htmlFor="versiculo" className="search-bar__label">Versículo:</label>
                    <input
                        id="versiculo"
                        type="text"
                        value={searchTermVersiculo}
                        onChange={handleInputChange}
                        placeholder="Ex: 3:16 (Capítulo:Versículo)"
                        className="search-bar__input"
                    />
                </div>

                <div className="search-bar__actions">
                    <button
                        className="search-bar__button"
                        onClick={handleSearchClick}
                    >
                        Buscar
                    </button>

                    <button
                        className="search-bar__button search-bar__button--secondary"
                        onClick={handleRandomClick}
                    >
                        Aleatório
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
