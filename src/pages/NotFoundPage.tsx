import {JSX} from 'react';
import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div>
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
