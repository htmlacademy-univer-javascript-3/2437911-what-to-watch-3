export enum ApiRoute {
  Films = '/films',
  Film = '/films/:id',
  SimilarFilms = '/films/:id/similar',
  PromoFilm = '/promo',
  Favorite = '/favorite',
  UpdateFavoriteStatus = '/favorite/:id/:status',
  Comments = '/comments/:id',
  AddComment = '/comments/:id',
  CheckLogin = '/login',
  Login = '/login',
  Logout = '/logout'
}
