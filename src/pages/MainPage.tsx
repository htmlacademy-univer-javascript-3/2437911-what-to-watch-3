import {JSX, useState} from 'react';
import Footer from '../components/Footer.tsx';
import PromoFilmCard from '../components/PromoFilmCard.tsx';
import {FilmData} from '../types/filmData.ts';
import FilmsList from '../components/FilmsList.tsx';
import {Helmet} from 'react-helmet-async';
import GenresList from '../components/GenresList.tsx';

type MainPageProps = {
  films: FilmData[];
  promoFilm: FilmData;
};

const PAGE_FILMS_COUNT = 8;

function MainPage({films, promoFilm}: MainPageProps): JSX.Element {
  const [pageCountFilms, setPageCountFilms] = useState(PAGE_FILMS_COUNT);

  return (
    <>
      <Helmet><title>WTW</title></Helmet>
      <PromoFilmCard film={promoFilm}/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList onClickAction={() => setPageCountFilms(PAGE_FILMS_COUNT)}/>

          <FilmsList films={films.slice(0, pageCountFilms)}/>

          {
            pageCountFilms < films.length &&
            <div className="catalog__more">
              <button className="catalog__button" type="button"
                onClick={() => setPageCountFilms(pageCountFilms + PAGE_FILMS_COUNT)}
              >
                Show more
              </button>
            </div>
          }

        </section>

        <Footer/>
      </div>
    </>);
}

export default MainPage;
