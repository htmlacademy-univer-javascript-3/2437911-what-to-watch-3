import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import {Provider, TypedUseSelectorHook, useSelector} from 'react-redux';
import {store} from './store';
import {State} from './types/state.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
