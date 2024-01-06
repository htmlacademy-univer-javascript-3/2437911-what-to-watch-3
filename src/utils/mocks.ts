import {datatype, internet, name, random, system} from 'faker';
import {
  AllFetchFilmInfo,
  FetchAllFilms,
  FetchFilm,
  FetchFilms,
  FetchPromoFilm,
  FetchReviews,
  MyListInfo,
  UserProcess
} from '../types/state.ts';
import {Film, FilmPreview, PromoFilm} from '../types/film-data.ts';
import {Genre} from '../consts/genre.ts';
import {Review} from '../types/review.ts';
import {AuthorizationStatus} from '../consts/authorization-status.ts';

export const emptyAction = {type: ''};

export const makeFakeFilm = (): Film => ({
  id: datatype.uuid(),
  name: name.findName(),
  posterImage: internet.avatar(),
  backgroundImage: internet.avatar(),
  backgroundColor: internet.color(),
  videoLink: system.filePath(),
  description: random.words(),
  rating: datatype.number(10),
  scoresCount: datatype.number(),
  director: name.findName(),
  starring: [name.findName()],
  runTime: datatype.number(90),
  genre: Genre.AllGenres,
  released: datatype.datetime().toString(),
  isFavorite: false,
} as Film);

export const makeFakeFilmPreview = (): FilmPreview => ({
  id: datatype.uuid(),
  name: name.findName(),
  previewImage: internet.avatar(),
  previewVideoLink: system.filePath(),
  genre: Genre.AllGenres
} as FilmPreview);

export const makeFakePromoFilm = (): PromoFilm => ({
  id: datatype.uuid(),
  name: name.findName(),
  posterImage: internet.avatar(),
  backgroundImage: internet.avatar(),
  videoLink: system.filePath(),
  genre: Genre.AllGenres,
  released: datatype.datetime().toString(),
  isFavorite: false
} as PromoFilm);

export const makeFakeFetchFilm = (): FetchFilm => ({
  hasError: false,
  isLoading: false,
  data: makeFakeFilm()
} as FetchFilm);

export const makeFakeFetchFilms = (): FetchFilms => ({
  hasError: false,
  isLoading: false,
  films: [makeFakeFilmPreview()]
} as FetchFilms);

export const makeFakeReview = (): Review => ({
  id: datatype.uuid(),
  rating: datatype.number(10),
  user: name.findName(),
  date: datatype.datetime().toString(),
  comment: random.words()
} as Review);

export const makeFakeFetchReviews = (): FetchReviews => ({
  hasError: false,
  isLoading: false,
  data: [makeFakeReview()]
} as FetchReviews);

export const makeFakeAllFetchFilmInfo = (): AllFetchFilmInfo => ({
  film: makeFakeFetchFilm(),
  reviews: makeFakeFetchReviews(),
  similarFilms: makeFakeFetchFilms()
} as AllFetchFilmInfo);

export const makeFakeUserProcess = (): UserProcess => ({
  authorizationStatus: AuthorizationStatus.Unknown,
  error: ''
} as UserProcess);

export const makeFakeFetchPromoFilm = (): FetchPromoFilm => ({
  data: makeFakePromoFilm(),
  isLoading: false,
  hasError: false
} as FetchPromoFilm);

export const makeFakeFetchAllFilms = (): FetchAllFilms => ({
  films: makeFakeFetchFilms(),
  promoFilm: makeFakeFetchPromoFilm(),
  genreFilms: [makeFakeFilmPreview()],
  currentGenre: Genre.AllGenres
} as FetchAllFilms);

export const makeFakeMyListInfo = (): MyListInfo => ({
  films: makeFakeFetchFilms(),
} as MyListInfo);
