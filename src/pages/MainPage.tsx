import {JSX, useState} from 'react';
import Footer from '../components/Footer.tsx';
import PromoFilmCard from '../components/PromoFilmCard.tsx';
import FilmsList from '../components/FilmsList.tsx';
import {Helmet} from 'react-helmet-async';
import GenresList from '../components/GenresList.tsx';
import {useAppSelector} from '../store';
import NotFoundPage from './NotFoundPage.tsx';
import {genreFilmsSelector, promoFilmSelector} from '../store/selectors/selectors.ts';

const PAGE_FILMS_COUNT = 8;

function MainPage(): JSX.Element {
  const promoFilm = useAppSelector(promoFilmSelector);
  const genreFilms = useAppSelector(genreFilmsSelector);
  const [pageCountFilms, setPageCountFilms] = useState(PAGE_FILMS_COUNT);

  if (!promoFilm.data) {
    return (<NotFoundPage/>);
  }

  return (
    <>
      <Helmet><title>WTW</title></Helmet>
      <PromoFilmCard film={promoFilm.data}/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList onClickAction={() => setPageCountFilms(PAGE_FILMS_COUNT)}/>

          <FilmsList films={genreFilms.slice(0, pageCountFilms)}/>

          {
            pageCountFilms < genreFilms.length &&
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
