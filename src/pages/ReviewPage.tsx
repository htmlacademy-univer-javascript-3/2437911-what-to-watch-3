import {JSX, useEffect} from 'react';
import WTWLogo from '../components/WTWLogo.tsx';
import UserBlock from '../components/UserBlock.tsx';
import {Link, useParams} from 'react-router-dom';
import {AppRoute} from '../consts/app-route.ts';
import {Helmet} from 'react-helmet-async';
import ReviewForm from '../components/ReviewForm.tsx';
import {useAppSelector} from '../store';
import NotFoundPage from './NotFoundPage.tsx';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../types/state.ts';
import {fetchFilm} from '../store/api-actions.ts';
import {filmSelector} from '../store/selectors/selectors.ts';

const MINRATING = 1;
const MAXRATING = 10;

function ReviewPage(): JSX.Element {
  const id = useParams().id || '';
  const film = useAppSelector(filmSelector);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (!film.data || film.data.id !== id) {
      dispatch(fetchFilm(id));
    }
  }, [id, film, dispatch]);

  if (!film.data) {
    return (<NotFoundPage/>);
  }

  const {name, backgroundImage, posterImage} = film.data;

  return (
    <section className="film-card film-card--full">
      <Helmet><title>Review {name}</title></Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={`${backgroundImage}`} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <WTWLogo isLight={false}/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film(id)} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={`${posterImage}`} alt={name} width="218" height="327"/>
        </div>
      </div>

      <ReviewForm id={id} minRating={MINRATING} maxRating={MAXRATING}/>
    </section>
  );
}

export default ReviewPage;
