import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import {films} from './mocks/films.ts';
import {Genres} from './consts/Genres.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const genres = Object.values(Genres);

root.render(
  <React.StrictMode>
    <App films={films} genres={genres}/>
  </React.StrictMode>
);
