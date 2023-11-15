import {JSX} from 'react';
import {AuthorizationStatus} from '../consts/authorization-status.ts';
import {Navigate} from 'react-router-dom';
import {AppRoute} from '../consts/app-route.ts';
import {useAppSelector} from '../store';

type PrivateRoutesProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRoutesProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authStatus);
  const {children} = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn}/>
  );
}

export default PrivateRoute;
