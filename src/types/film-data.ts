import {Review} from './review.ts';
import {Person} from './person.ts';
import {Genre} from '../consts/genre.ts';

export type FilmPreview = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: Genre;
}

export type PromoFilm = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  genre: Genre;
  released: string;
  isFavorite: boolean;
}

export type FilmShortData = {
  id: string;
  title: string;
  genre: Genre;
  releaseDate: string;
}

export type FilmDetails = {
  director: Person;
  starring: Person[];
  genre: Genre;
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

export type FilmData = FilmPreview & FilmOverview & FilmDetails & FilmReviews & FilmShortData & PromoFilm & {
  videoSrc: string;
};
