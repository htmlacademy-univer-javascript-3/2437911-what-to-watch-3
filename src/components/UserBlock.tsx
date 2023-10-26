import {JSX} from 'react';
import {AuthorizationStatuses} from '../consts/AuthorizationStatuses.ts';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../consts/AppRoutes.ts';
import {imageDirectory} from '../consts/SrcPath.ts';
import {useAppSelector} from '../index.tsx';

function UserBlock(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authStatus);

  if (authorizationStatus === AuthorizationStatuses.AUTH) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={`${imageDirectory}/avatar.jpg`} alt="User avatar" width="63" height="63"/>
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>
    );
  } else {
    return (
      <div className="user-block">
        <Link to={AppRoutes.SignIn} className="user-block__link">Sign In</Link>
      </div>
    );

  }
}

export default UserBlock;
