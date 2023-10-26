import {Fragment, JSX, useState} from 'react';

type ReviewFormProps = {
  minRating: number;
  maxRating: number;
}

function ReviewForm({minRating, maxRating}: ReviewFormProps): JSX.Element {
  const ratings: number[] = Array.from(Array(maxRating - minRating + 1).keys()).map((num) => num + 1);

  const [formData, setFormData] = useState({
    rating: '',
    text: ''
  });

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {ratings.reverse().map((ratingNumber) =>
              (
                <Fragment key={ratingNumber}>
                  <input className="rating__input" id={`star-${ratingNumber}`} type="radio" name="rating"
                    value={ratingNumber}
                    onChange={(evt) => setFormData({...formData, rating: evt.target.value})}
                  />
                  <label className="rating__label" htmlFor={`star-${ratingNumber}`}>Rating {ratingNumber}</label>
                </Fragment>
              ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="ReviewPage text"
            value={formData.text}
            onChange={(evt) => setFormData({...formData, text: evt.target.value})}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
