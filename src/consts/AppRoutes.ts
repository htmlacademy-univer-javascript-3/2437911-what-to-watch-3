export const AppRoutes = {
  Main: '/',
  SignIn: '/login',
  MyList: '/mylist',
  Film: (id?: number) => `/films/${id || ':id'}`,
  AddReview: (id?: number) => `/films/${id || ':id'}/review`,
  Player: (id?: number) => `/player/${id || ':id'}`,
};
