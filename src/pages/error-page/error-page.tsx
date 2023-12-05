import {JSX} from 'react';
import {Link} from 'react-router-dom';

type ErrorPageProps = {
    message: string;
}

function ErrorPage({message}: ErrorPageProps): JSX.Element {
  return (
    <>
      <p className="error__text">{message}</p>
      <Link to="/">Перейти на главную</Link>
    </>
  );
}

export default ErrorPage;
