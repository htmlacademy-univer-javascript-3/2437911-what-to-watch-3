import {JSX, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import Footer from '../../components/footer/footer.tsx';
import CatalogFilmsLikeThis from '../../components/catalog-films-like-this/catalog-films-like-this.tsx';
import FilmCardPanel from '../../components/film-card-panel/film-card-panel.tsx';
import WtwLogo from '../../components/wtw-logo/wtw-logo.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import Tabs from '../../components/tabs/tabs.tsx';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../store';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../types/state.ts';
import {fetchFilm, fetchReviews, fetchSimilarFilms} from '../../store/actions/api-actions.ts';
import {getFilm, getReviews, getSimilarFilms} from '../../store/film/selectors.ts';
import ErrorPage from '../error-page/error-page.tsx';

function FilmPage(): JSX.Element {
  const id = useParams().id || '';
  const fetchFilmInfo = useAppSelector(getFilm);
  const film = fetchFilmInfo.data;
  const similarFilms = useAppSelector(getSimilarFilms);
  const reviews = useAppSelector(getReviews);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (!film || film.id !== id) {
      dispatch(fetchFilm(id));
      dispatch(fetchSimilarFilms(id));
      dispatch(fetchReviews(id));
    }
  }, [id, film, dispatch]);

  if (!film || fetchFilmInfo.hasError) {
    return <ErrorPage message={'Не удалось загрузить фильм :('}/>;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <Helmet><title>{film.name}</title></Helmet>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={`${film.backgroundImage}`} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <WtwLogo isLight={false}/>
            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <FilmCardPanel film={film} hasReviewButton/>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={`${film.posterImage}`} alt={film.name} width="218" height="327"/>
            </div>

            <Tabs {...film} reviews={reviews}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <CatalogFilmsLikeThis films={similarFilms}/>
        <Footer/>
      </div>
    </>
  );
}

export default FilmPage;
