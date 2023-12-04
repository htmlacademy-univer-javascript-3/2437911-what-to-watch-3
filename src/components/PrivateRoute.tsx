import {JSX} from 'react';
import {AuthorizationStatus} from '../consts/authorization-status.ts';
import {Navigate} from 'react-router-dom';
import {AppRoute} from '../consts/app-route.ts';
import {useAppSelector} from '../store';
import {getAuthStatus} from '../store/auth/selector.ts';

type PrivateRoutesProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRoutesProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const {children} = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn}/>
  );
}

export default PrivateRoute;
