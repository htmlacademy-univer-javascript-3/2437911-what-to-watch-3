import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import {FilmInfo} from './Types/FilmInfo.ts';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const promoFilmCardProps: FilmInfo = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: '2014'
};

root.render(
  <React.StrictMode>
    <App {...promoFilmCardProps} />
  </React.StrictMode>
);
