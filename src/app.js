import React, { useState } from 'react';
import Header from './components/Header';
import VerseList from './components/VerseList';
import SearchBar from './components/SearchBar';
import './components/css/app.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
    const [verses, setVerses] = useState([
        { reference: 'João 3:16', text: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito...' },
        { reference: 'Salmos 23:1', text: 'O Senhor é o meu pastor; nada me faltará.' },
        
    ]);

    // Função de busca para filtrar versículos ou buscar em uma API
    const handleSearch = (searchTerm) => {
        const filteredVerses = verses.filter(verse =>
            verse.text.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setVerses(filteredVerses);
    };

    return (
        <div className="app">
            <Navbar />
            <Header />
            <SearchBar onSearch={handleSearch} />
            <VerseList verses={verses} />
            <Footer />
        </div>
    );
};

export default App;
