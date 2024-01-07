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

export type Film = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: StarringData;
  runTime: number;
  genre: Genre;
  released: string;
  isFavorite: boolean;
}

export type StarringData = string[];
