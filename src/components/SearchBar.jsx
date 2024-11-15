import React, { useState } from 'react';
import './css/SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const[searchTermVersiculo,setSearchTermVersiculo] = useState('');
    const[searchTermlivro, setSearchTermLivro] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTermVersiculo(e.target.value);
    };

    const handleSelectChange = (e) => {

        setSearchTermLivro(e.target.value); // Atualiza o searchTerm com o valor selecionado
    };

    const handleSearchClick = () => {
        setSearchTerm(searchTermlivro+' '+searchTermVersiculo);
        onSearch(searchTerm);
    };

    return (
        <div className="search-bar">
            <label htmlFor="livros-nt">Selecione um livro do Novo Testamento:</label>
            <select 
                id="livros-nt" 
                name="livros-nt" 
                onChange={handleSelectChange}
                value={searchTermlivro} // Define o valor do select como o searchTerm
            >
                <option value="" disabled>Escolha um livro</option>
                <option value="mateus">Mateus</option>
                <option value="marcos">Marcos</option>
                <option value="lucas">Lucas</option>
                <option value="joao">João</option>
                <option value="atos">Atos dos Apóstolos</option>
                <option value="romanos">Romanos</option>
                <option value="1corintios">1 Coríntios</option>
                <option value="2corintios">2 Coríntios</option>
                <option value="galatas">Gálatas</option>
                <option value="efesios">Efésios</option>
                <option value="filipenses">Filipenses</option>
                <option value="colossenses">Colossenses</option>
                <option value="1tessalonicenses">1 Tessalonicenses</option>
                <option value="2tessalonicenses">2 Tessalonicenses</option>
                <option value="1timoteo">1 Timóteo</option>
                <option value="2timoteo">2 Timóteo</option>
                <option value="tito">Tito</option>
                <option value="filemom">Filemom</option>
                <option value="hebreus">Hebreus</option>
                <option value="tiago">Tiago</option>
                <option value="1pedro">1 Pedro</option>
                <option value="2pedro">2 Pedro</option>
                <option value="1joao">1 João</option>
                <option value="2joao">2 João</option>
                <option value="3joao">3 João</option>
                <option value="judas">Judas</option>
                <option value="apocalipse">Apocalipse</option>
            </select>

            <input
                type="text"
                value={searchTermVersiculo}
                onChange={handleInputChange}
                placeholder="Pesquise um versículo (Ex: 3:16)."
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
