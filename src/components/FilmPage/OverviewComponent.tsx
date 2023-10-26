import {JSX} from 'react';
import {Person} from '../../types/person.ts';

export type OverviewProps = {
  ratingScore: number;
  overview: string;
  ratingsCount: number;
  director: Person;
  starring: Person[];
}

function setRatingText(ratingScore: number): string {
  if (ratingScore < 3) {
    return 'Bad';
  }

  if (ratingScore < 5) {
    return 'Normal';
  }

  if (ratingScore < 8) {
    return 'Good';
  }

  if (ratingScore < 10) {
    return 'Very Good';
  }

  return 'Awesome';
}

function OverviewComponent({ratingScore, ratingsCount, overview, director, starring}: OverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{ratingScore.toString().replace('.', ',')}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{setRatingText(ratingScore)}</span>
          <span className="film-rating__count">{ratingsCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {overview
          .split('\n')
          .map((over) => (<p key={over.slice(0, 10)}>{over}</p>))}

        <p className="film-card__director">
          <strong>
            Director: {`${director.firstName} ${director.lastName}`}
          </strong>
        </p>

        <p className="film-card__starring">
          <strong>
            Starring: {starring
              .map((p) => `${p.firstName} ${p.lastName}`)
              .join(', ')}
          </strong>
        </p>
      </div>
    </>
  );
}

export default OverviewComponent;
