import {configureStore } from '@reduxjs/toolkit';
import { songsReducer, addSong, removeSong } from './slices/songsSlices';
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlices';

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer
    }
})

export {store, addSong, removeSong, addMovie, removeMovie};