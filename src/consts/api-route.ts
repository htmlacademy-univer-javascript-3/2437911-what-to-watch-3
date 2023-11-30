export const ApiRoute = {
  Films: '/films',
  Film: (id?: string) => `/films/${id || ':id'}`,
  SimilarFilms: (id?: string) => `/films/${id || ':id'}/similar`,
  PromoFilm: '/promo',
  Favorite: '/favorite',
  UpdateFavoriteStatus: (id?: string, status?: number) => `/favorite/${id || ':id'}/${status || ':status'}`,
  Comments: (id?: string) => `/comments/${id || ':id'}`,
  AddComment: (id?: string) => `/comments/${id || ':id'}`,
  CheckLogin: '/login',
  Login: '/login',
  Logout: '/logout'
};
