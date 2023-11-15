import {films} from '../mocks/films.ts';
import {Genre} from '../consts/genre.ts';

export function getGenres(): Genre[] {
  const genres = new Set(films.map((film) => film.genre));
  return [Genre.AllGenres, ...genres];
}
