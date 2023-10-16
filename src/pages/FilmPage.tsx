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

type FilmPageProps = FilmInfo & { authStatus: AuthorizationStatuses };

type FilmPageLinksProps = {
  title: string;
  to: string;
}

function FilmPage({title, releaseDate, genre, authStatus}: FilmPageProps): JSX.Element {
  const links: FilmPageLinksProps[] = [
    {
      title: 'Overview',
      to: AppRoutes.Film
    },
    {
      title: 'Details',
      to: `${AppRoutes.Film}/details`
    },
    {
      title: 'Reviews',
      to: `${AppRoutes.Film}/reviews`
    }
  ];

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
            <FilmCardPanel title={title} releaseDate={releaseDate} genre={genre} hasReviewButton/>
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
                  {
                    links.map((link) => (
                      <li className="film-nav__item film-nav__item--active" key={link.title}>
                        <NavLink to={link.to} className='film-nav__link'>
                          {link.title}
                        </NavLink>
                      </li>
                    ))
                  }
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
