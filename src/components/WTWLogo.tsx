import classNames from 'classnames';
import {JSX} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../consts/app-route.ts';

function WTWLogo({isLight}: { isLight: boolean }): JSX.Element {
  return (
    <Link to={AppRoute.Main} style={{textDecoration: 'none'}}>
      <div className="logo">
        <div className={classNames('logo__link', {'logo__link--light': isLight})}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </div>
      </div>
    </Link>
  );
}

export default WTWLogo;
