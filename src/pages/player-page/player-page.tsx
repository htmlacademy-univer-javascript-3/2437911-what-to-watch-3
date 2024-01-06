import {JSX, useCallback, useEffect, useRef, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppSelector} from '../../store';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../types/state.ts';
import {fetchFilm} from '../../store/actions/api-actions.ts';
import PlayerControls from '../../components/video-player-bar/video-player-bar.tsx';
import {getFilm} from '../../store/film/selectors.ts';
import ErrorPage from '../error-page/error-page.tsx';
import {getDurationFormat} from '../../functions/deration-time-format.ts';
import LoadingScreen from '../loading-page/loading-screen.tsx';

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
    let isMounted = true;

    if (isMounted) {
      if (!film || film.id !== id) {
        dispatch(fetchFilm(id));
      }
    }

    return () => {
      isMounted = false;
    };
  }, [id, film, dispatch]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (isPlaying) {
        videoRef.current?.play();
      } else {
        videoRef.current?.pause();
      }
    }

    return () => {
      isMounted = false;
    };
  }, [videoRef, isPlaying]);

  const handleFullScreenButtonClick = useCallback(() => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current?.requestFullscreen();
    }
  }, []);

  if (!film || fetchFilmInfo.hasError) {
    return (<ErrorPage message={'Не удалось загрузить фильм :('}/>);
  }

  if (fetchFilmInfo.isLoading) {
    return <LoadingScreen/>;
  }

  const handleTimeUpdate = () => {
    const durationTime = videoRef.current?.duration || 0;
    const currentTime = videoRef.current?.currentTime || 0;
    if (durationTime && currentTime) {
      setProgressBar(currentTime / durationTime * 100);
      setDuration(durationTime - currentTime);
    }
  };

  return (
    <div className="player">
      <Helmet><title>{film.name} player</title></Helmet>
      <video poster={film.posterImage}
        className='player__video' ref={videoRef} onTimeUpdate={handleTimeUpdate}
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

        <PlayerControls isPlaying={isPlaying} onSetIsPlaying={handleSetIsPlaying}
          onFullScreenButtonClick={handleFullScreenButtonClick}
        />
      </div>
    </div>
  );
}

export default PlayerPage;
