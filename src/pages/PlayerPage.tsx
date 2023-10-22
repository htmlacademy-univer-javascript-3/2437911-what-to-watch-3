import {JSX, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useNavigate} from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer.tsx';

type PlayerProps = {
  videoSrc: string;
  posterSrc: string;
  title: string;
}

function PlayerPage({videoSrc, posterSrc, title}: PlayerProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="player">
      <Helmet><title>{title} player</title></Helmet>
      <VideoPlayer videoSrc={videoSrc} posterSrc={posterSrc}
        className='player__video' isMuted={false} isPlaying={isPlaying}
      />

      <button type="button" className="player__exit" onClick={() => navigate(-1)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

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
              <button type="button" className="player__play" onClick={() => setIsPlaying(true)}>
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
      </div>
    </div>
  );
}

export default PlayerPage;
