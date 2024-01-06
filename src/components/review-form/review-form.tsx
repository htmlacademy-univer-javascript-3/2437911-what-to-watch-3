import {FormEvent, Fragment, JSX, useState} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../types/state.ts';
import {addReview} from '../../store/actions/api-actions.ts';

type ReviewFormProps = {
  id: string;
  minRating: number;
  maxRating: number;
}

export type sendReviewData = {
  id: string;
  rating: number;
  comment: string;
}

const CommentConstraints = {
  MaxLength: 400,
  MinLength: 50,
} as const;

const MIN_RATING = 0;

function ReviewForm({id, minRating, maxRating}: ReviewFormProps): JSX.Element {
  const ratings: number[] = Array.from(Array(maxRating - minRating + 1).keys()).map((num) => num + 1);
  const dispatch = useDispatch<AppDispatch>();
  const [isFormActive, setIsFormActive] = useState(true);
  const [shouldDisplayError, setShouldDisplayError] = useState(false);

  const [formData, setFormData] = useState<sendReviewData>({
    id: id,
    rating: MIN_RATING,
    comment: ''
  });

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsFormActive(false);
    dispatch(addReview(formData)).catch(() => setShouldDisplayError(true)).finally(() => setIsFormActive(true));
  };

  return (
    <div className="add-review">
      {shouldDisplayError && <div>Что-то пошло не так! Попробуйте отправить ревью позже</div>}
      <form className="add-review__form" onSubmit={handleFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {ratings.reverse().map((ratingNumber) =>
              (
                <Fragment key={ratingNumber}>
                  <input className="rating__input" id={`star-${ratingNumber}`} type="radio" name="rating"
                    disabled={!isFormActive}
                    value={ratingNumber}
                    onChange={(evt) => setFormData({...formData, rating: Number(evt.target.value)})}
                  />
                  <label className="rating__label" htmlFor={`star-${ratingNumber}`}>Rating {ratingNumber}</label>
                </Fragment>
              ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="ReviewPage text"
            disabled={!isFormActive}
            value={formData.comment}
            onChange={(evt) => setFormData({...formData, comment: evt.target.value})}
          >
          </textarea>

          <div className="add-review__submit">
            <button className="add-review__btn" type="submit"
              disabled={formData.comment.length <= CommentConstraints.MinLength || formData.comment.length >= CommentConstraints.MaxLength || formData.rating === MIN_RATING}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
