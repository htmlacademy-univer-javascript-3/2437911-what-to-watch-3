import {JSX} from 'react';
import FilmsList from './FilmsList.tsx';
import {FilmData} from '../types/FilmData.ts';

type CatalogLikeThisProps = {
  films: FilmData[];
}

function CatalogLikeThis({films}: CatalogLikeThisProps): JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmsList films={films}/>
    </section>
  );
}

export default CatalogLikeThis;
