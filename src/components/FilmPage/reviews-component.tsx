import {JSX} from 'react';
import {Review} from '../../types/review.ts';
import ReviewComponent from './review-component.tsx';

export type ReviewComponentProps = {
  reviews: Review[];
}

function ReviewsComponent({reviews}: ReviewComponentProps): JSX.Element {
  const firstColumnLength = reviews.length / 2 + reviews.length % 2;

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviews.slice(0, firstColumnLength).map((review) => (
            <ReviewComponent review={review} key={review.user + review.date}/>
          ))
        }
      </div>
      <div className="film-card__reviews-col">
        {
          reviews.slice(firstColumnLength, reviews.length).map((review) => (
            <ReviewComponent review={review} key={review.user + review.date}/>
          ))
        }
      </div>
    </div>
  );
}

export default ReviewsComponent;
