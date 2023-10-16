import {JSX} from 'react';
import MainPage from './MainPage.tsx';
import {FilmInfo} from '../Types/FilmInfo.ts';
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
import ReviewsComponent from '../components/FilmPage/ReviewsComponent.tsx';
import OverviewComponent from '../components/FilmPage/OverviewComponent.tsx';
import DetailsComponent from '../components/FilmPage/DetailsComponent.tsx';

type AppProps = FilmInfo;

function App(promoFilmCardProps: AppProps): JSX.Element {
  const authorizationStatus = AuthorizationStatuses.NO_AUTH;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main}
          element={<MainPage {...promoFilmCardProps} authStatus={authorizationStatus}/>}
        />
        <Route path={AppRoutes.SignIn} element={<SignInPage/>}/>
        <Route path={AppRoutes.MyList} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <MyListPage/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoutes.Film} element={<FilmPage {...promoFilmCardProps} authStatus={authorizationStatus}/>}>
          <Route index element={<OverviewComponent/>}/>
          <Route path={'details'} element={<DetailsComponent/>}/>
          <Route path={'reviews'} element={<ReviewsComponent/>}/>
        </Route>
        <Route path={AppRoutes.AddReview} element={<ReviewPage {...promoFilmCardProps} />}/>
        <Route path={AppRoutes.Player} element={<PlayerPage/>}/>
        <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
