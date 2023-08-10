import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import { NavigationProvider } from './context/navigation';
import { faker } from "@faker-js/faker/locale/en";
import {store} from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <NavigationProvider>
        <Provider store={store}>
          <App />
        </Provider>
    </NavigationProvider>
);


export const createRandomMovie = () => {
    return `${faker.word.adjective()} ${faker.word.noun()}`;
  };
  
  export const createRandomSong = () => {
    return faker.music.songName();
  };
  