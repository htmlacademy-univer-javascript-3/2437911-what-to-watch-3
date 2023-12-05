import {JSX} from 'react';
import {Rating} from '../../consts/rating.ts';

export type OverviewProps = {
  rating: number;
  description: string;
  scoresCount: number;
  director: string;
  starring: string[];
}

function setRatingText(ratingScore: number): string {
  if (ratingScore < Rating.Normal) {
    return 'Bad';
  }

  if (ratingScore < Rating.Good) {
    return 'Normal';
  }

  if (ratingScore < Rating.VeryGood) {
    return 'Good';
  }

  if (ratingScore < Rating.Awesome) {
    return 'Very Good';
  }

  return 'Awesome';
}

function OverviewComponent({rating, scoresCount, description, director, starring}: OverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating.toString().replace('.', ',')}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{setRatingText(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {description
          .split('\n')
          .map((over) => (<p key={over.slice(0, 10)}>{over}</p>))}

        <p className="film-card__director">
          <strong>
            Director: {director}
          </strong>
        </p>

        <p className="film-card__starring">
          <strong>
            Starring: {starring.join(', ')}
          </strong>
        </p>
      </div>
    </>
  );
}

export default OverviewComponent;
