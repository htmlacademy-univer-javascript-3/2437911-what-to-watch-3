import {JSX} from 'react';
import Footer from '../components/Footer.tsx';
import CatalogLikeThis from '../components/CatalogLikeThis.tsx';
import FilmCardPanel from '../components/FilmCardPanel.tsx';
import {FilmInfo} from '../Types/FilmInfo.ts';
import WTWLogo from '../components/WTWLogo.tsx';
import UserBlock from '../components/UserBlock.tsx';
import {AuthorizationStatuses} from '../consts/AuthorizationStatuses.ts';
import {NavLink, Outlet} from 'react-router-dom';
import {AppRoutes} from '../consts/AppRoutes.ts';

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

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <NavLink to={AppRoutes.Film} className='film-nav__link'>
                      Overview
                    </NavLink>
                  </li>
                  <li className="film-nav__item">
                    <NavLink to={`${AppRoutes.Film}/details`} className="film-nav__link">
                      Details
                    </NavLink>
                  </li>
                  <li className="film-nav__item">
                    <NavLink to={`${AppRoutes.Film}/reviews`} className="film-nav__link">
                      Reviews
                    </NavLink>
                  </li>
                </ul>
              </nav>

              {<Outlet/>}
            </div>
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
