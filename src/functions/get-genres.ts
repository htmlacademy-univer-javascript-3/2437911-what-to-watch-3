import {Genre} from '../consts/genre.ts';
import {FilmPreview} from '../types/film-data.ts';

const MAX_GENRES = 10;

export function getGenres(films: FilmPreview[]): Genre[] {
  const genres = new Set(films.map((film) => film.genre));
  return [Genre.AllGenres, ...genres].slice(0, MAX_GENRES);
}
