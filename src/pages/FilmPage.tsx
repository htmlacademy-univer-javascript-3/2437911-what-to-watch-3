import {JSX, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import Footer from '../components/Footer.tsx';
import CatalogLikeThis from '../components/CatalogLikeThis.tsx';
import FilmCardPanel from '../components/FilmCardPanel.tsx';
import WTWLogo from '../components/WTWLogo.tsx';
import UserBlock from '../components/UserBlock.tsx';
import Tabs from '../components/Tabs.tsx';
import NotFoundPage from './NotFoundPage.tsx';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../store';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../types/state.ts';
import {fetchFilm, fetchReviews, fetchSimilarFilms} from '../store/api-actions.ts';
import {filmSelector, reviewsSelector, similarFilmsSelector} from '../store/selectors/selectors.ts';

function FilmPage(): JSX.Element {
  const id = useParams().id || '';
  const film = useAppSelector(filmSelector);
  const similarFilms = useAppSelector(similarFilmsSelector);
  const reviews = useAppSelector(reviewsSelector);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (!film.data || film.data.id !== id) {
      dispatch(fetchFilm(id));
      dispatch(fetchSimilarFilms(id));
      dispatch(fetchReviews(id));
    }
  }, [id, film, dispatch]);

  if (!film.data) {
    return <NotFoundPage/>;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <Helmet><title>{film.data.name}</title></Helmet>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={`${film.data.backgroundImage}`} alt={film.data.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <WTWLogo isLight={false}/>
            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <FilmCardPanel film={film.data} hasReviewButton/>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={`${film.data.posterImage}`} alt={film.data.name} width="218" height="327"/>
            </div>

            <Tabs {...film.data} reviews={reviews.data}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <CatalogLikeThis films={similarFilms.data}/>
        <Footer/>
      </div>
    </>
  );
}

export default FilmPage;
