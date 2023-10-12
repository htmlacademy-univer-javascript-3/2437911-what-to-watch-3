import classNames from 'classnames';
import {JSX} from 'react';

function WTWLogo({isLight}: { isLight: boolean }): JSX.Element {
  return (
    <div className="logo">
      <a className={classNames('logo__link', {'logo__link--light': isLight})}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
}

export default WTWLogo;
