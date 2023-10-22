import {Review} from './Review.ts';
import {Person} from './Person.ts';
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
  directors: Person[];
  starring: Person[];
  genre: Genres;
  releaseDate: string;
  runTimeMinute: number;
}

export type FilmOverview = {
  ratingScore: number;
  ratingsCount: number;
  overview: string;
  directors: Person[];
  starring: Person[];
}
export type FilmReviews = {
  reviews: Review[];
}

export type FilmData = FilmPreview & FilmOverview & FilmDetails & FilmReviews & FilmShortData & PromoFilm & {
  videoSrc: string;
};


