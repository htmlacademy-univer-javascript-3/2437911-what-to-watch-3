import {JSX} from 'react';
import WTWLogo from '../components/WTWLogo.tsx';
import UserBlock from '../components/UserBlock.tsx';
import {AuthorizationStatuses} from '../consts/AuthorizationStatuses.ts';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../consts/AppRoutes.ts';
import {Helmet} from 'react-helmet-async';
import ReviewForm from '../components/ReviewForm.tsx';
import {imageDirectory} from '../consts/SrcPath.ts';

const MINRATING = 1;
const MAXRATING = 10;

type ReviewPageProps = {
  id: number;
  backgroundImage: string;
  title: string;
  posterImage: string;
}

function ReviewPage({id, title, posterImage, backgroundImage}: ReviewPageProps): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <Helmet><title>Review {title}</title></Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={`${imageDirectory}/${backgroundImage}`} alt={title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <WTWLogo isLight={false}/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoutes.Film(id)} className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock authStatus={AuthorizationStatuses.AUTH}/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={`${imageDirectory}/${posterImage}`} alt={title} width="218" height="327"/>
        </div>
      </div>

      <ReviewForm minRating={MINRATING} maxRating={MAXRATING}/>
    </section>
  );
}

export default ReviewPage;
