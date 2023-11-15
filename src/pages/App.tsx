import {JSX} from 'react';
import MainPage from './MainPage.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignInPage from './SignInPage.tsx';
import NotFoundPage from './NotFoundPage.tsx';
import {AppRoute} from '../consts/app-route.ts';
import {HelmetProvider} from 'react-helmet-async';
import ScrollToTop from '../functions/ScrollToTop.ts';
import {useAppSelector} from '../store';
import {AuthorizationStatus} from '../consts/authorization-status.ts';
import LoadingScreen from './loading-page/loading-screen.tsx';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authStatus);
  const isFilmsDataLoading = useAppSelector((state) => state.isFilmsLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isFilmsDataLoading) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
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
          {/*<Route path={AppRoute.Film()}*/}
          {/*  element={*/}
          {/*    <FilmPage/>*/}
          {/*  }*/}
          {/*/>*/}
          {/*<Route path={AppRoute.AddReview()} element={*/}
          {/*  <ReviewPage/>*/}
          {/*}*/}
          {/*/>*/}
          {/*<Route path={AppRoute.Player()}*/}
          {/*  element={*/}
          {/*    <PlayerPage/>*/}
          {/*  }*/}
          {/*/>*/}
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
