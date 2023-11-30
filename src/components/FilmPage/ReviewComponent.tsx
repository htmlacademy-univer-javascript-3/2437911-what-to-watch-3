import {JSX} from 'react';
import {Review} from '../../types/review.ts';
import {convertDate} from '../../functions/convertDate.ts';

type ReviewProps = {
  review: Review;
}

function ReviewComponent({review}: ReviewProps): JSX.Element {

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment} </p>

        <footer className="review__details">
          <cite className="review__author">{review.user}</cite>
          <time className="review__date" dateTime="2016-12-24">{convertDate(review.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating.toString().replace('.', ',')}</div>
    </div>
  );
}

export default ReviewComponent;
