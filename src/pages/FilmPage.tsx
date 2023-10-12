import {JSX} from 'react';
import Footer from '../components/Footer.tsx';
import CatalogLikeThis from '../components/CatalogLikeThis.tsx';
import FilmCardPanel from '../components/FilmCardPanel.tsx';
import {FilmInfo} from '../Types/FilmInfo.ts';
import DetailsComponent from '../components/FilmPage/DetailsComponent.tsx';
import ReviewsComponent from '../components/FilmPage/ReviewsComponent.tsx';
import OverviewComponent from '../components/FilmPage/OverviewComponent.tsx';
import WTWLogo from '../components/WTWLogo.tsx';
import UserBlock from '../components/UserBlock.tsx';

enum FilmPageComponents { Overview, Details, Reviews}

function FilmPage({title, releaseDate, genre, isGuest, filmPageComponent: filmPageComponent}: FilmInfo &
  { isGuest: boolean } & { filmPageComponent: FilmPageComponents }): JSX.Element {
  let component: JSX.Element;
  switch (filmPageComponent) {
    case FilmPageComponents.Details:
      component = <DetailsComponent/>;
      break;
    case FilmPageComponents.Overview:
      component = <OverviewComponent/>;
      break;
    case FilmPageComponents.Reviews:
      component = <ReviewsComponent/>;
      break;
  }

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
            <UserBlock isGuest={isGuest}/>
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

            {component}
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
