import {JSX, useCallback, useEffect, useRef, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppSelector} from '../store';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../types/state.ts';
import {fetchFilm} from '../store/api-actions.ts';
import PlayerControls from '../components/PlayerBar.tsx';
import {getFilm} from '../store/film/selectors.ts';
import ErrorPage from './ErrorPage.tsx';
import {getDurationFormat} from '../functions/derationTimeFormat.ts';

function PlayerPage(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressBar, setProgressBar] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleSetIsPlaying = useCallback(setIsPlaying, [setIsPlaying]);
  const navigate = useNavigate();

  const id = useParams().id || '';
  const fetchFilmInfo = useAppSelector(getFilm);
  const film = fetchFilmInfo.data;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!film || film.id !== id) {
      dispatch(fetchFilm(id));
    }
  }, [id, film, dispatch]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  const handleFullScreenButtonClick = useCallback(() => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current?.requestFullscreen();
    }
  }, [videoRef.current]);

  if (!film || fetchFilmInfo.hasError) {
    return (<ErrorPage message={'Не удалось загрузить фильм :('}/>);
  }

  function handleProgressUpdate() {
    const durationTime = videoRef.current?.duration || 0;
    const currentTime = videoRef.current?.currentTime || 0;
    if (durationTime && currentTime) {
      setProgressBar(currentTime / durationTime * 100);
      setDuration(durationTime - currentTime);
    }
  }

  return (
    <div className="player">
      <Helmet><title>{film.name} player</title></Helmet>
      <video poster={film.posterImage}
        className='player__video' ref={videoRef} onTimeUpdate={handleProgressUpdate}
      >
        <source src={film.videoLink} type='video/mp4'/>
      </video>

      <button type="button" className="player__exit" onClick={() => navigate(-1)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progressBar} max="100"></progress>
            <div className="player__toggler" style={{left: `${progressBar}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getDurationFormat(duration)}</div>
        </div>

        <PlayerControls isPlaying={isPlaying} setIsPlaying={handleSetIsPlaying}
          handleFullScreenButtonClick={handleFullScreenButtonClick}
        />
      </div>
    </div>
  );
}

export default PlayerPage;
