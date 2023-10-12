import {JSX} from 'react';
import WTWLogo from './WTWLogo.tsx';
import Copyright from './Copyright.tsx';

function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <WTWLogo isLight/>
      <Copyright/>
    </footer>
  );
}

export default Footer;
