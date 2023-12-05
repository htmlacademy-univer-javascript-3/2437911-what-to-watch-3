import {JSX} from 'react';
import FilmsList from '../films-list/films-list.tsx';
import {FilmPreview} from '../../types/film-data.ts';

type CatalogLikeThisProps = {
  films: FilmPreview[];
}

function CatalogFilmsLikeThis({films}: CatalogLikeThisProps): JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmsList films={films}/>
    </section>
  );
}

export default CatalogFilmsLikeThis;
