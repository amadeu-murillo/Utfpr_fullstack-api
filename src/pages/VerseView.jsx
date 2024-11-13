import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedVerse } from '../slices/bibleSlice';
import { fetchVerses } from '../services/api';

const VerseView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedBook = useSelector((state) => state.bible.selectedBook);
  const selectedChapter = useSelector((state) => state.bible.selectedChapter);
  const selectedVerse = useSelector((state) => state.bible.selectedVerse);

  const [verseContent, setVerseContent] = useState('');

  // Fetch conteúdo do versículo
  useEffect(() => {
    if (selectedBook && selectedChapter && selectedVerse) {
      const searchTerm = `${selectedBook} ${selectedChapter.chapter}:${selectedVerse}`;
      fetchVerses(searchTerm).then((data) => {
        setVerseContent(data.text || 'Conteúdo não encontrado.');
      });
    }
  }, [selectedBook, selectedChapter, selectedVerse]);

  if (!selectedBook || !selectedChapter || !selectedVerse) {
    return <p>Selecione um versículo na lista para visualizar.</p>;
  }

  const isFirstVerse = selectedVerse === 1;
  const isLastVerse = selectedVerse === selectedChapter.verses;

  const handleNextVerse = () => {
    if (!isLastVerse) {
      dispatch(setSelectedVerse(selectedVerse + 1));
    }
  };

  const handlePrevVerse = () => {
    if (!isFirstVerse) {
      dispatch(setSelectedVerse(selectedVerse - 1));
    }
  };

  return (
    <div>
      <h1>{selectedBook}</h1>
      <h2>Capítulo {selectedChapter.chapter}, Versículo {selectedVerse}</h2>
      <p>{verseContent}</p>

      <div>
        {!isFirstVerse && <button onClick={handlePrevVerse}>Versículo Anterior</button>}
        {!isLastVerse && <button onClick={handleNextVerse}>Próximo Versículo</button>}
      </div>

      <button onClick={() => navigate('/')}>Voltar</button>
    </div>
  );
};

export default VerseView;
