import {JSX, useState} from 'react';
import Footer from '../../components/footer/footer.tsx';
import PromoFilmCard from '../../components/promo-film-card/promo-film-card.tsx';
import FilmsList from '../../components/films-list/films-list.tsx';
import {Helmet} from 'react-helmet-async';
import GenresList from '../../components/genres-list/genres-list.tsx';
import {useAppSelector} from '../../store';
import {getGenreFilms, getPromoFilm} from '../../store/main-page/selectors.ts';

const PAGE_FILMS_COUNT = 8;

function MainPage(): JSX.Element {
  const fetchPromoFilm = useAppSelector(getPromoFilm);
  const promoFilm = fetchPromoFilm.data;
  const genreFilms = useAppSelector(getGenreFilms);
  const [pageCountFilms, setPageCountFilms] = useState(PAGE_FILMS_COUNT);

  return (
    <>
      <Helmet><title>WTW</title></Helmet>
      {
        !fetchPromoFilm.hasError && promoFilm && <PromoFilmCard film={promoFilm}/>
      }


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
