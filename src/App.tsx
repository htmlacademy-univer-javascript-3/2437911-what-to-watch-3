import {JSX} from 'react';
import MainPage from './pages/main-page/main-page.tsx';
import {Route, Routes} from 'react-router-dom';
import SignInPage from './pages/sign-in-page/sign-in-page.tsx';
import NotFoundPage from './pages/not-found-page/not-found-page.tsx';
import {AppRoute} from './consts/app-route.ts';
import {HelmetProvider} from 'react-helmet-async';
import {useAppSelector} from './store';
import {AuthorizationStatus} from './consts/authorization-status.ts';
import LoadingScreen from './pages/loading-page/loading-screen.tsx';
import HistoryRouter from './browser-history/history-route.tsx';
import browserHistory from './browser-history/browser-history.ts';
import FilmPage from './pages/film-page/film-page.tsx';
import ReviewPage from './pages/review-page/review-page.tsx';
import PlayerPage from './pages/player-page/player-page.tsx';
import {getAuthStatus} from './store/auth/selectors.ts';
import {getFilms} from './store/main-page/selectors.ts';
import PrivateRoute from './components/private-route/private-route.tsx';
import MyListPage from './pages/my-list-page/my-list-page.tsx';
import ScrollToTop from './functions/scroll-to-top.ts';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const isFilmsDataLoading = useAppSelector(getFilms).isLoading;

  if (authorizationStatus === AuthorizationStatus.Unknown || isFilmsDataLoading) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop/>
        <Routes>
          <Route path={AppRoute.Main}
            element={
              <MainPage/>
            }
          />
          <Route path={AppRoute.SignIn} element={<SignInPage/>}/>
          <Route path={AppRoute.MyList} element={
            <PrivateRoute>
              <MyListPage/>
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Film()}
            element={
              <FilmPage/>
            }
          />
          <Route path={AppRoute.AddReview()} element={
            <PrivateRoute>
              <ReviewPage/>
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Player()}
            element={
              <PlayerPage/>
            }
          />
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
