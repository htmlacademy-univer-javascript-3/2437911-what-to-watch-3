import {JSX} from 'react';
import {Review} from '../../types/review.ts';
import ReviewComponent from './ReviewComponent.tsx';

export type ReviewComponentProps = {
  reviews: Review[];
}

function ReviewsComponent({reviews}: ReviewComponentProps): JSX.Element {
  const ColumnLength = reviews.length / 2;

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviews.slice(0, ColumnLength).map((review) => (
            <ReviewComponent review={review} key={review.user + review.date}/>
          ))
        }
      </div>
      <div className="film-card__reviews-col">
        {
          reviews.slice(ColumnLength, reviews.length).map((review) => (
            <ReviewComponent review={review} key={review.user + review.date}/>
          ))
        }
      </div>
    </div>
  );
}

export default ReviewsComponent;
