import {JSX} from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div>
      <Helmet><title>Not Found</title></Helmet>
      <h1>
        404.
        <br/>
        <small>Page not found</small>
      </h1>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundPage;
