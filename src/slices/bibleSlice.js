import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedBook: null,
  selectedChapter: null,
  selectedVerse: null,
};

const bibleSlice = createSlice({
  name: 'bible',
  initialState,
  reducers: {
    setSelectedBook: (state, action) => {
      state.selectedBook = action.payload;
      state.selectedChapter = null; // Reset chapter and verse when a new book is selected
      state.selectedVerse = null;
    },
    setSelectedChapter: (state, action) => {
      state.selectedChapter = action.payload;
      state.selectedVerse = null; // Reset verse when a new chapter is selected
    },
    setSelectedVerse: (state, action) => {
      state.selectedVerse = action.payload;
    },
  },
});

export const { setSelectedBook, setSelectedChapter, setSelectedVerse } = bibleSlice.actions;

export default bibleSlice.reducer;
