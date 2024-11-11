import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedBook, setSelectedChapter, setSelectedVerse } from '../slices/bibleSlice';
import bible from '../data/bible.json';

const Verses = () => {
  const dispatch = useDispatch();

  // Seleção do estado no Redux
  const selectedBook = useSelector((state) => state.bible.selectedBook);
  const selectedChapter = useSelector((state) => state.bible.selectedChapter);
  const selectedVerse = useSelector((state) => state.bible.selectedVerse);

  // Função para selecionar um livro
  const handleBookSelect = (book) => {
    dispatch(setSelectedBook(book));
  };

  // Função para selecionar um capítulo
  const handleChapterSelect = (chapter) => {
    dispatch(setSelectedChapter(chapter));
  };

  // Função para selecionar um versículo
  const handleVerseSelect = (verse) => {
    dispatch(setSelectedVerse(verse));
  };

  return (
    <div>
      <h1>Versículos</h1>

      {/* Dropdown para os livros */}
      <div className="testaments">
        <h2>Antigo Testamento</h2>
        <ul>
          {Object.keys(bible['Old Testament']).map((book) => (
            <li key={book}>
              <span onClick={() => handleBookSelect(book)}>{book}</span>
              {selectedBook === book && (
                <ul>
                  {bible['Old Testament'][book].map((chapter) => (
                    <li key={chapter.chapter}>
                      <span onClick={() => handleChapterSelect(chapter)}>
                        Capítulo {chapter.chapter}
                      </span>
                      {selectedChapter && selectedChapter.chapter === chapter.chapter && (
                        <ul>
                          {[...Array(chapter.verses)].map((_, index) => (
                            <li key={index}>
                              <span onClick={() => handleVerseSelect(index + 1)}>
                                Versículo {index + 1}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <h2>Novo Testamento</h2>
        <ul>
          {Object.keys(bible['New Testament']).map((book) => (
            <li key={book}>
              <span onClick={() => handleBookSelect(book)}>{book}</span>
              {selectedBook === book && (
                <ul>
                  {bible['New Testament'][book].map((chapter) => (
                    <li key={chapter.chapter}>
                      <span onClick={() => handleChapterSelect(chapter)}>
                        Capítulo {chapter.chapter}
                      </span>
                      {selectedChapter && selectedChapter.chapter === chapter.chapter && (
                        <ul>
                          {[...Array(chapter.verses)].map((_, index) => (
                            <li key={index}>
                              <span onClick={() => handleVerseSelect(index + 1)}>
                                Versículo {index + 1}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Exibir versículos se um capítulo for selecionado */}
      {selectedChapter && (
        <div className="verses">
          <h4>Versículos do Capítulo {selectedChapter.chapter}</h4>
          <p>Selecione um versículo</p>
          {selectedVerse && <p>Você selecionou o versículo {selectedVerse}</p>}
        </div>
      )}
    </div>
  );
};

export default Verses;
