import {JSX} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AppRoutes} from '../consts/AppRoutes.ts';
import {FilmShortData} from '../types/filmTypes.ts';

type FilmCardPanelProps = FilmShortData & {
  hasReviewButton: boolean;
};

function FilmCardPanel({id, title, genre, releaseDate, hasReviewButton}: FilmCardPanelProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{title}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{releaseDate}</span>
      </p>

      <div className="film-card__buttons">
        <button className="btn btn--play film-card__button" type="button"
          onClick={() => navigate(AppRoutes.Player(id))}
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <button className="btn btn--play film-card__button" type="button"
          onClick={() => navigate(AppRoutes.MyList)}
        >
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
          <span className="film-card__count">9</span>
        </button>
        {hasReviewButton && (
          <Link to={AppRoutes.AddReview(id)} className="btn film-card__button">Add review</Link>
        )}
      </div>
    </div>
  );
}

export default FilmCardPanel;
