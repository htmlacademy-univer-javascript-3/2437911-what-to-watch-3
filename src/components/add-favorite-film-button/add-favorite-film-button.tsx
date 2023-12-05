import {JSX} from 'react';
import {AppRoute} from '../../consts/app-route.ts';
import {useAppSelector} from '../../store';
import {getFavoriteFilms} from '../../store/my-list/selectors.ts';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../types/state.ts';
import {updateFilmFavoriteStatus} from '../../store/actions/api-actions.ts';
import {getAuthStatus} from '../../store/auth/selector.ts';
import {AuthorizationStatus} from '../../consts/authorization-status.ts';

type AddFavoriteFilmButtonProps = {
  filmId: string;
}

function AddFavoriteFilmButton({filmId}: AddFavoriteFilmButtonProps): JSX.Element {
  const favoriteFilms = useAppSelector(getFavoriteFilms).films;
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const isFavorite = favoriteFilms.map((film) => film.id).includes(filmId);
  const isAuth = useAppSelector(getAuthStatus) === AuthorizationStatus.Auth;

  const handleOnClickAddFavorite = () => {
    if (isAuth) {
      const action = isFavorite ? 0 : 1;
      dispatch(updateFilmFavoriteStatus({filmId, status: action}));
      navigate(AppRoute.MyList);
    } else {
      navigate(AppRoute.SignIn);
    }
  };

  return (
    <button className="btn btn--play film-card__button" type="button"
      onClick={handleOnClickAddFavorite}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
}

export default AddFavoriteFilmButton;
