import {Genres} from '../consts/Genres.ts';
import {films} from '../mocks/films.ts';

export function getGenres(): Genres[] {
  const genres = new Set(films.map((film) => film.genre));
  return [Genres.AllGenres, ...genres];
}
