import {JSX} from 'react';
import FilmCardPanel from './FilmCardPanel.tsx';
import WTWLogo from './WTWLogo.tsx';
import UserBlock from './UserBlock.tsx';
import {AuthorizationStatuses} from '../consts/AuthorizationStatuses.ts';
import {defaultBackground, imageDirectory} from '../consts/SrcPath.ts';
import {PromoFilm} from '../types/FilmData.ts';

type PromoFIlmCardProps = PromoFilm & {
  authStatus: AuthorizationStatuses;
};

function PromoFilmCard({
  id,
  title,
  backgroundImage,
  posterImage,
  releaseDate,
  genre,
  authStatus
}: PromoFIlmCardProps): JSX.Element {
  const isAuth = authStatus === AuthorizationStatuses.AUTH;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        {isAuth
          ? <img src={`${imageDirectory}/${backgroundImage}`} alt={title}/>
          : <img src={`${defaultBackground}`} alt='background-image'/>}
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <WTWLogo isLight={false}/>
        <UserBlock authStatus={authStatus}/>
      </header>

      {isAuth && (
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={`${imageDirectory}/${posterImage}`} alt={title} width="218" height="327"/>
            </div>

            <FilmCardPanel id={id} title={title} releaseDate={releaseDate} genre={genre} hasReviewButton={false}/>
          </div>
        </div>
      )}
    </section>
  );
}

export default PromoFilmCard;
