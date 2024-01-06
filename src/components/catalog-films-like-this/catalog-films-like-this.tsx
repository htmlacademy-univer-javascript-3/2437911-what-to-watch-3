import {JSX} from 'react';
import FilmsList from '../films-list/films-list.tsx';
import {FilmPreview} from '../../types/film-data.ts';

type CatalogLikeThisProps = {
  films: FilmPreview[];
}

const SIMILAR_FILMS_COUNT = 4;

function CatalogFilmsLikeThis({films}: CatalogLikeThisProps): JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmsList films={films.slice(0, SIMILAR_FILMS_COUNT)}/>
    </section>
  );
}

export default CatalogFilmsLikeThis;
