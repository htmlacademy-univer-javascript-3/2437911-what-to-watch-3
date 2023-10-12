import {JSX} from 'react';
import FilmCardPanel from './FilmCardPanel.tsx';
import {FilmInfo} from '../Types/FilmInfo.ts';
import WTWLogo from './WTWLogo.tsx';
import UserBlock from './UserBlock.tsx';

function PromoFilmCard({title, genre, releaseDate, isGuest}: FilmInfo & { isGuest: boolean }): JSX.Element {
  let backGroundImage: JSX.Element;
  let filmCardWrap: JSX.Element;

  if (isGuest) {
    backGroundImage = <img src="img/bg-header.jpg"/>;
    filmCardWrap = <> </>;
  } else {
    backGroundImage = <img src="img/bg-the-grand-budapest-hotel.jpg" alt={title}/>;
    filmCardWrap = (
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt={title} width="218" height="327"/>
          </div>

          <FilmCardPanel title={title} releaseDate={releaseDate} genre={genre} reviewButton={false}/>
        </div>
      </div>
    );
  }

  return (
    <section className="film-card">
      <div className="film-card__bg">
        {backGroundImage}
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <WTWLogo isLight={false}/>
        <UserBlock isGuest={isGuest}/>
      </header>

      {filmCardWrap}
    </section>
  );
}

export default PromoFilmCard;
