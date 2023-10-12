import {JSX} from 'react';
import MainPage from './MainPage.tsx';
import {FilmInfo} from '../Types/FilmInfo.ts';

function App(promoFilmCardProps: FilmInfo): JSX.Element {
  const isGuest = false;
  return (
    <MainPage {...promoFilmCardProps} isGuest={isGuest}/>
  );
}

export default App;
