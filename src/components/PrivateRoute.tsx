import {JSX} from 'react';
import {AuthorizationStatuses} from '../consts/AuthorizationStatuses.ts';
import {Navigate} from 'react-router-dom';
import {AppRoutes} from '../consts/AppRoutes.ts';
import {useAppSelector} from '../index.tsx';

type PrivateRoutesProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRoutesProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authStatus);
  const {children} = props;
  return (
    authorizationStatus === AuthorizationStatuses.AUTH
      ? children
      : <Navigate to={AppRoutes.SignIn}/>
  );
}

export default PrivateRoute;
