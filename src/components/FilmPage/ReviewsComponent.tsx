import {JSX} from 'react';
import {Review} from '../../types/review.ts';

export type ReviewsProps = {
  reviews: Review[];
}

function ReviewsComponent({reviews}: ReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviews.map((r) => (
            <div className="review" key={`${r.author.firstName} ${r.author.lastName}`}>
              <blockquote className="review__quote">
                <p className="review__text">{r.text} </p>

                <footer className="review__details">
                  <cite className="review__author">{r.author.firstName} {r.author.lastName}</cite>
                  <time className="review__date" dateTime="2016-12-24">{r.publicisedDate}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{r.ratingScore.toString().replace('.', ',')}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ReviewsComponent;
