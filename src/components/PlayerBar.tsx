import {JSX, memo} from 'react';

type PlayerBarProps = {
  isPlaying: boolean;
  setIsPlaying: (b: boolean) => void;
}

function PlayerBar({isPlaying, setIsPlaying}: PlayerBarProps): JSX.Element {
  return (

    <div className="player__controls-row">

      {isPlaying
        ? (
          <button type="button" className="player__play" onClick={() => setIsPlaying(false)}>
            <svg viewBox="0 0 14 21" width="14" height="21">
              <use xlinkHref="#pause"></use>
            </svg>
            <span>Pause</span>
          </button>
        )
        : (
          <button type="button" className="player__play" onClick={() => setIsPlaying(false)}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
        )}

      <div className="player__name">Transpotting</div>

      <button type="button" className="player__full-screen">
        <svg viewBox="0 0 27 27" width="27" height="27">
          <use xlinkHref="#full-screen"></use>
        </svg>
        <span>Full screen</span>
      </button>
    </div>
  );
}

export default memo(PlayerBar);
