import {JSX, useCallback, useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useNavigate, useParams} from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer.tsx';
import {useAppSelector} from '../store';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../types/state.ts';
import {fetchFilm} from '../store/api-actions.ts';
import PlayerControls from '../components/PlayerBar.tsx';
import {getFilm} from '../store/film/selectors.ts';
import ErrorPage from './ErrorPage.tsx';

function PlayerPage(): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
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

  if (!film || fetchFilmInfo.hasError) {
    return (<ErrorPage message={'Не удалось загрузить фильм :('}/>);
  }

  return (
    <div className="player">
      <Helmet><title>{film.name} player</title></Helmet>
      <VideoPlayer videoSrc={film.videoLink} posterSrc={film.posterImage}
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

        <PlayerControls isPlaying={isPlaying} setIsPlaying={handleSetIsPlaying}/>
      </div>
    </div>
  );
}

export default PlayerPage;
