import {JSX, useState} from 'react';
import MainPage from './MainPage.tsx';
import {FilmData} from '../types/FilmData.ts';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignInPage from './SignInPage.tsx';
import MyListPage from './MyListPage.tsx';
import FilmPage from './FilmPage.tsx';
import ReviewPage from './ReviewPage.tsx';
import PlayerPage from './PlayerPage.tsx';
import NotFoundPage from './NotFoundPage.tsx';
import PrivateRoute from '../components/PrivateRoute.tsx';
import {AuthorizationStatuses} from '../consts/AuthorizationStatuses.ts';
import {AppRoutes} from '../consts/AppRoutes.ts';
import {HelmetProvider} from 'react-helmet-async';
import ScrollToTop from '../functions/ScrollToTop.ts';

type AppProps = { films: FilmData[] };

function App({films}: AppProps): JSX.Element {
  const authorizationStatus = AuthorizationStatuses.AUTH;

  const [filmId,] = useState(1);

  const [filmInfo] = films.filter((f) => f.id === filmId);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path={AppRoutes.Main}
            element={
              <MainPage films={films} promoFilm={filmInfo} authStatus={authorizationStatus}/>
            }
          />
          <Route path={AppRoutes.SignIn} element={<SignInPage/>}/>
          <Route path={AppRoutes.MyList} element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyListPage films={films}/>
            </PrivateRoute>
          }
          />
          <Route path={AppRoutes.Film()}
            element={
              <FilmPage filmInfo={filmInfo} authStatus={authorizationStatus} filmsLikeThis={films.slice(4, 8)}/>
            }
          />
          <Route path={AppRoutes.AddReview()} element={
            <ReviewPage id={filmInfo.id} title={filmInfo.title} posterImage={filmInfo.posterImage}
              backgroundImage={filmInfo.backgroundImage}
            />
          }
          />
          <Route path={AppRoutes.Player()}
            element={
              <PlayerPage title={filmInfo.title} posterSrc={filmInfo.posterImage}
                videoSrc={filmInfo.videoSrc}
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
