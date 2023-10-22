import {JSX} from 'react';
import {Helmet} from 'react-helmet-async';
import Footer from '../components/Footer.tsx';
import CatalogLikeThis from '../components/CatalogLikeThis.tsx';
import FilmCardPanel from '../components/FilmCardPanel.tsx';
import WTWLogo from '../components/WTWLogo.tsx';
import UserBlock from '../components/UserBlock.tsx';
import {imageDirectory} from '../consts/SrcPath.ts';
import {FilmData} from '../types/FilmData.ts';
import Tabs from '../components/Tabs.tsx';
import {AuthorizationStatuses} from '../consts/AuthorizationStatuses.ts';

type FilmPageProps = {
  filmInfo: FilmData;
  filmsLikeThis: FilmData[];
  authStatus: AuthorizationStatuses;
};

function FilmPage({authStatus, filmInfo, filmsLikeThis}: FilmPageProps): JSX.Element {
  const {title} = filmInfo;
  return (
    <>
      <section className="film-card film-card--full">
        <Helmet><title>{title}</title></Helmet>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={`img/${filmInfo.backgroundImage}`} alt={title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <WTWLogo isLight={false}/>
            <UserBlock authStatus={authStatus}/>
          </header>

          <div className="film-card__wrap">
            <FilmCardPanel id={filmInfo.id} title={title} releaseDate={filmInfo.releaseDate} genre={filmInfo.genre}
              hasReviewButton
            />
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={`${imageDirectory}/${filmInfo.posterImage}`} alt={title} width="218" height="327"/>
            </div>

            <Tabs {...filmInfo}/>
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
