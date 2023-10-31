import {JSX} from 'react';
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

function MainPage({films, promoFilm}: MainPageProps): JSX.Element {
  return (
    <>
      <Helmet><title>WTW</title></Helmet>
      <PromoFilmCard film={promoFilm}/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList/>

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
