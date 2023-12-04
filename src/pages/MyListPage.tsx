import {JSX} from 'react';
import Footer from '../components/Footer.tsx';
import WTWLogo from '../components/WTWLogo.tsx';
import UserBlock from '../components/UserBlock.tsx';
import FilmsList from '../components/FilmsList.tsx';
import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../store';
import {getFavoriteFilms} from '../store/my-list/selectors.ts';
import ErrorPage from './ErrorPage.tsx';

function MyListPage(): JSX.Element {
  const fetchFavoriteFilm = useAppSelector(getFavoriteFilms);
  const films = fetchFavoriteFilm.films;

  if (fetchFavoriteFilm.hasError) {
    return <ErrorPage message={'Не удалось загрузить фильмы :('}/>;
  }

  return (
    <div className="user-page">
      <Helmet><title>My list</title></Helmet>

      <header className="page-header user-page__head">
        <WTWLogo isLight={false}/>
        <h1 className="page-title user-page__title">
                    My List
          <span className="user-page__film-count">{films.length}</span>
        </h1>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={films}/>
      </section>

      <Footer/>
    </div>
  );
}

export default MyListPage;
