import {JSX} from 'react';
import MainPage from './MainPage.tsx';
import {Route, Routes} from 'react-router-dom';
import SignInPage from './SignInPage.tsx';
import NotFoundPage from './NotFoundPage.tsx';
import {AppRoute} from '../consts/app-route.ts';
import {HelmetProvider} from 'react-helmet-async';
import ScrollToTop from '../functions/ScrollToTop.ts';
import {useAppSelector} from '../store';
import {AuthorizationStatus} from '../consts/authorization-status.ts';
import LoadingScreen from './loading-page/loading-screen.tsx';
import HistoryRouter from '../browser-history/history-route.tsx';
import browserHistory from '../browser-history/browser-history.ts';
import FilmPage from './FilmPage.tsx';
import ReviewPage from './ReviewPage.tsx';
import PlayerPage from './PlayerPage.tsx';
import {getAuthStatus} from '../store/auth/selector.ts';
import {getFilms} from '../store/main-page/selectors.ts';

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
          {/*<Route path={AppRoute.MyList} element={*/}
          {/*  <PrivateRoute>*/}
          {/*    <MyListPage/>*/}
          {/*  </PrivateRoute>*/}
          {/*}*/}
          {/*/>*/}
          <Route path={AppRoute.Film()}
            element={
              <FilmPage/>
            }
          />
          <Route path={AppRoute.AddReview()} element={
            <ReviewPage/>
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
