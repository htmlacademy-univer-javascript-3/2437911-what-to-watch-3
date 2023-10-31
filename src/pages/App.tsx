import {JSX} from 'react';
import MainPage from './MainPage.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignInPage from './SignInPage.tsx';
import MyListPage from './MyListPage.tsx';
import FilmPage from './FilmPage.tsx';
import ReviewPage from './ReviewPage.tsx';
import PlayerPage from './PlayerPage.tsx';
import NotFoundPage from './NotFoundPage.tsx';
import PrivateRoute from '../components/PrivateRoute.tsx';
import {AppRoutes} from '../consts/AppRoutes.ts';
import {HelmetProvider} from 'react-helmet-async';
import ScrollToTop from '../functions/ScrollToTop.ts';
import {useAppSelector} from '../index.tsx';

function App(): JSX.Element {
  const films = useAppSelector((state) => state.genreFilms);
  const currentFilm = films[0];

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path={AppRoutes.Main}
            element={
              <MainPage films={films} promoFilm={currentFilm}/>
            }
          />
          <Route path={AppRoutes.SignIn} element={<SignInPage/>}/>
          <Route path={AppRoutes.MyList} element={
            <PrivateRoute>
              <MyListPage films={films}/>
            </PrivateRoute>
          }
          />
          <Route path={AppRoutes.Film()}
            element={
              <FilmPage film={currentFilm} similarFilms={films.slice(4, 8)}/>
            }
          />
          <Route path={AppRoutes.AddReview()} element={
            <ReviewPage id={currentFilm.id} title={currentFilm.title} posterImage={currentFilm.posterImage}
              backgroundImage={currentFilm.backgroundImage}
            />
          }
          />
          <Route path={AppRoutes.Player()}
            element={
              <PlayerPage title={currentFilm.title} posterSrc={currentFilm.posterImage}
                videoSrc={currentFilm.videoSrc}
              />
            }
          />
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
