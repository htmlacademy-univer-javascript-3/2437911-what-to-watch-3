import {JSX} from 'react';
import {AuthorizationStatus} from '../consts/authorization-status.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '../consts/app-route.ts';
import {imageDirectory} from '../consts/src-path.ts';
import {useAppSelector} from '../store';
import {AppDispatch} from '../types/state.ts';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../store/api-actions.ts';

function UserBlock(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authStatus);
  const dispatch = useDispatch<AppDispatch>();

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={`${imageDirectory}/avatar.jpg`} alt="User avatar" width="63" height="63"/>
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link"
            onClick={() => {
              dispatch(logoutAction());
            }}
          >
            Sign out
          </a>
        </li>
      </ul>
    );
  } else {
    return (
      <div className="user-block">
        <Link to={AppRoute.SignIn} className="user-block__link">Sign In</Link>
      </div>
    );

  }
}

export default UserBlock;
