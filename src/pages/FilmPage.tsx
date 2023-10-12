import {JSX} from 'react';
import Footer from '../components/Footer.tsx';
import CatalogLikeThis from '../components/CatalogLikeThis.tsx';
import FilmCardPanel from '../components/FilmCardPanel.tsx';
import {FilmInfo} from '../Types/FilmInfo.ts';
import WTWLogo from '../components/WTWLogo.tsx';
import UserBlock from '../components/UserBlock.tsx';
import {AuthorizationStatuses} from '../consts/AuthorizationStatuses.ts';
import OverviewComponent from '../components/FilmPage/OverviewComponent.tsx';

function FilmPage({title, releaseDate, genre, authStatus}: FilmInfo &
  { authStatus: AuthorizationStatuses }): JSX.Element {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt={title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <WTWLogo isLight={false}/>
            <UserBlock authStatus={authStatus}/>
          </header>

          <div className="film-card__wrap">
            <FilmCardPanel title={title} releaseDate={releaseDate} genre={genre} reviewButton/>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt={title} width="218" height="327"/>
            </div>

            {<OverviewComponent/>}
          </div>
        </div>
      </section>

      <div className="page-content">
        <CatalogLikeThis/>
        <Footer/>
      </div>
    </>
  );
}

export default FilmPage;
