import {JSX} from 'react';
import WTWLogo from '../components/WTWLogo.tsx';
import UserBlock from '../components/UserBlock.tsx';
import {FilmInfo} from '../Types/FilmInfo.ts';
import {AuthorizationStatuses} from '../consts/AuthorizationStatuses.ts';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../consts/AppRoutes.ts';

const MINRATING = 1;
const MAXRATING = 10;

function ReviewPage({title}: FilmInfo): JSX.Element {
  const ratings: number[] = Array.from(Array(MAXRATING - MINRATING + 1).keys());
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <WTWLogo isLight={false}/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoutes.Film} className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock authStatus={AuthorizationStatuses.AUTH}/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt={title} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {ratings.map((x) =>
                (
                  <>
                    <input className="rating__input" id={`star-${x}`} type="radio" name="rating"
                      value={x}
                    />
                    <label className="rating__label" htmlFor={`star-${x}`}>Rating {x}</label>
                  </>
                ))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text"
              placeholder="ReviewPage text"
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}

export default ReviewPage;
