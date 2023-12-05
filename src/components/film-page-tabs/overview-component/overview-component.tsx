import {JSX} from 'react';
import {Rating} from '../../../consts/rating.ts';

export type OverviewProps = {
  rating: number;
  description: string;
  scoresCount: number;
  director: string;
  starring: string[];
}

enum RatingText {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very Good',
  Awesome = 'Awesome'
}

function setRatingText(ratingScore: number): string {
  if (ratingScore < Rating.Normal) {
    return RatingText.Bad;
  }

  if (ratingScore < Rating.Good) {
    return RatingText.Normal;
  }

  if (ratingScore < Rating.VeryGood) {
    return RatingText.Good;
  }

  if (ratingScore < Rating.Awesome) {
    return RatingText.VeryGood;
  }

  return RatingText.Awesome;
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
