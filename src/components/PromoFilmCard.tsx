import {JSX} from 'react';
import FilmCardPanel from './FilmCardPanel.tsx';
import {FilmInfo} from '../Types/FilmInfo.ts';
import WTWLogo from './WTWLogo.tsx';
import UserBlock from './UserBlock.tsx';
import {AuthorizationStatuses} from '../consts/AuthorizationStatuses.ts';

function PromoFilmCard({title, genre, releaseDate, authStatus}: FilmInfo &
  { authStatus: AuthorizationStatuses }): JSX.Element {
  let backGroundImage: JSX.Element;
  let filmCardWrap: JSX.Element;

  if (authStatus === AuthorizationStatuses.AUTH) {
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
  } else {
    backGroundImage = <img src="img/bg-header.jpg"/>;
    filmCardWrap = <> </>;
  }

  return (
    <section className="film-card">
      <div className="film-card__bg">
        {backGroundImage}
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <WTWLogo isLight={false}/>
        <UserBlock authStatus={authStatus}/>
      </header>

      {filmCardWrap}
    </section>
  );
}

export default PromoFilmCard;
