import {JSX} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AppRoute} from '../../consts/app-route.ts';
import {useAppSelector} from '../../store';
import {PromoFilm} from '../../types/film-data.ts';
import {AuthorizationStatus} from '../../consts/authorization-status.ts';
import {getAuthStatus} from '../../store/auth/selector.ts';
import AddFavoriteFilmButton from '../add-favorite-film-button/add-favorite-film-button.tsx';

type FilmCardPanelProps = {
  film: PromoFilm;
  hasReviewButton: boolean;
};

function FilmCardPanel({film, hasReviewButton}: FilmCardPanelProps): JSX.Element {
  const {id, name, genre, released} = film;
  const navigate = useNavigate();
  const isAuth = useAppSelector(getAuthStatus) === AuthorizationStatus.Auth;

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{released}</span>
      </p>

      <div className="film-card__buttons">
        <button className="btn btn--play film-card__button" type="button"
          onClick={() => navigate(AppRoute.Player(id))}
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>

        <AddFavoriteFilmButton filmId={id}/>

        {hasReviewButton && isAuth && (
          <Link to={AppRoute.AddReview(id)} className="btn film-card__button">Add review</Link>
        )}
      </div>
    </div>
  );
}

export default FilmCardPanel;
