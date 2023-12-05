import {JSX} from 'react';
import WtwLogo from '../wtw-logo/wtw-logo.tsx';
import Copyright from '../copyright/copyright.tsx';

function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <WtwLogo isLight/>
      <Copyright/>
    </footer>
  );
}

export default Footer;
