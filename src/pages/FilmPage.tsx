import {JSX} from 'react';
import {Helmet} from 'react-helmet-async';
import Footer from '../components/Footer.tsx';
import CatalogLikeThis from '../components/CatalogLikeThis.tsx';
import FilmCardPanel from '../components/FilmCardPanel.tsx';
import WTWLogo from '../components/WTWLogo.tsx';
import UserBlock from '../components/UserBlock.tsx';
import {imageDirectory} from '../consts/src-path.ts';
import Tabs from '../components/Tabs.tsx';
import {FilmData} from '../types/film-data.ts';

type FilmPageProps = {
  film: FilmData;
  similarFilms: FilmData[];
};

function FilmPage({film, similarFilms}: FilmPageProps): JSX.Element {
  return (
    <>
      <section className="film-card film-card--full">
        <Helmet><title>{film.name}</title></Helmet>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={`img/${film.backgroundImage}`} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <WTWLogo isLight={false}/>
            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <FilmCardPanel id={film.id} title={film.name} releaseDate={film.released} genre={film.genre}
              hasReviewButton
            />
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={`${imageDirectory}/${film.posterImage}`} alt={film.name} width="218" height="327"/>
            </div>

            <Tabs {...film}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <CatalogLikeThis films={similarFilms}/>
        <Footer/>
      </div>
    </>
  );
}

export default FilmPage;
