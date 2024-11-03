import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import VerseList from '../components/VerseList';
import { fetchVerses } from '../services/api';

const BibleQuotesPage = () => {
    const [verses, setVerses] = useState([]);
    const [filteredVerses, setFilteredVerses] = useState([]);

    // Busca inicial de versículos ao carregar a página
    useEffect(() => {
        fetchVerses().then(data => setVerses(data));
    }, []);

    const handleSearch = (searchTerm) => {
        const filtered = verses.filter(verse => 
            verse.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
            verse.reference.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredVerses(filtered);
    };

    return (
        <div>
            <Header />
            <SearchBar onSearch={handleSearch} />
            <VerseList verses={filteredVerses.length ? filteredVerses : verses} />
        </div>
    );
};

export default BibleQuotesPage;
