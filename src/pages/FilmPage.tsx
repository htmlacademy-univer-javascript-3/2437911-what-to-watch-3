import {JSX} from 'react';
import {Helmet} from 'react-helmet-async';
import Footer from '../components/Footer.tsx';
import CatalogLikeThis from '../components/CatalogLikeThis.tsx';
import FilmCardPanel from '../components/FilmCardPanel.tsx';
import WTWLogo from '../components/WTWLogo.tsx';
import UserBlock from '../components/UserBlock.tsx';
import {imageDirectory} from '../consts/SrcPath.ts';
import {FilmData} from '../types/filmData.ts';
import Tabs from '../components/Tabs.tsx';

type FilmPageProps = {
  film: FilmData;
  filmsLikeThis: FilmData[];
};

function FilmPage({film, filmsLikeThis}: FilmPageProps): JSX.Element {
  return (
    <>
      <section className="film-card film-card--full">
        <Helmet><title>{film.title}</title></Helmet>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={`img/${film.backgroundImage}`} alt={film.title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <WTWLogo isLight={false}/>
            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <FilmCardPanel id={film.id} title={film.title} releaseDate={film.releaseDate} genre={film.genre}
              hasReviewButton
            />
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={`${imageDirectory}/${film.posterImage}`} alt={film.title} width="218" height="327"/>
            </div>

            <Tabs {...film}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <CatalogLikeThis films={filmsLikeThis}/>
        <Footer/>
      </div>
    </>
  );
}

export default FilmPage;
