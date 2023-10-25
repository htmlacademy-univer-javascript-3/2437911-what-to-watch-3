import {Review} from './review.ts';
import {Person} from './person.ts';
import {Genres} from '../consts/Genres.ts';

export type FilmPreview = {
  id: number;
  title: string;
  listImage: string;
}

export type PromoFilm = FilmShortData & {
  backgroundImage: string;
  posterImage: string;
}

export type FilmShortData = {
  id: number;
  title: string;
  genre: Genres;
  releaseDate: string;
}

export type FilmDetails = {
  director: Person;
  starring: Person[];
  genre: Genres;
  releaseDate: string;
  runTimeMinute: number;
}

export type FilmOverview = {
  ratingScore: number;
  ratingsCount: number;
  overview: string;
  director: Person;
  starring: Person[];
}
export type FilmReviews = {
  reviews: Review[];
}

export type FilmTypes = FilmPreview & FilmOverview & FilmDetails & FilmReviews & FilmShortData & PromoFilm & {
  videoSrc: string;
};
