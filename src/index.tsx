import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchFilms, fetchPromoFilm} from './store/actions/api-actions.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchFilms());
store.dispatch(fetchPromoFilm());
store.dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
