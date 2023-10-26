import {JSX} from 'react';
import Footer from '../components/Footer.tsx';
import PromoFilmCard from '../components/PromoFilmCard.tsx';
import {FilmTypes} from '../types/filmTypes.ts';
import {AuthorizationStatuses} from '../consts/AuthorizationStatuses.ts';
import FilmsList from '../components/FilmsList.tsx';
import {Genres} from '../consts/Genres.ts';
import {Helmet} from 'react-helmet-async';

type MainPageProps = {
  films: FilmTypes[];
  genres: Genres[];
  promoFilm: FilmTypes;
  authStatus: AuthorizationStatuses;
};

function MainPage({films, genres, promoFilm, authStatus}: MainPageProps): JSX.Element {
  return (
    <>
      <Helmet><title>WTW</title></Helmet>
      <PromoFilmCard {...promoFilm} authStatus={authStatus}/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {
              genres.map((genre) =>
                (
                  // catalog__genres-item--active
                  <li className="catalog__genres-item " key={genre}>
                    <a href="#" className="catalog__genres-link">{genre}</a>
                  </li>
                ))
            }
          </ul>

          <FilmsList films={films}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </>);
}

export default MainPage;
