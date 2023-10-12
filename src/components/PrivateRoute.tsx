import {JSX} from 'react';
import {AuthorizationStatuses} from '../consts/AuthorizationStatuses.ts';
import {Navigate} from 'react-router-dom';
import {AppRoutes} from '../consts/AppRoutes.ts';

type PrivateRoutesProps = {
  authorizationStatus: AuthorizationStatuses;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRoutesProps): JSX.Element {
  const {authorizationStatus, children} = props;
  return (
    authorizationStatus === AuthorizationStatuses.AUTH
      ? children
      : <Navigate to={AppRoutes.SignIn}/>
  );
}

export default PrivateRoute;
