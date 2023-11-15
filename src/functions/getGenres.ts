import {Genre} from '../consts/genre.ts';
import {FilmPreview} from '../types/film-data.ts';

export function getGenres(films: FilmPreview[]): Genre[] {
  const genres = new Set(films.map((film) => film.genre));
  return [Genre.AllGenres, ...genres];
}
