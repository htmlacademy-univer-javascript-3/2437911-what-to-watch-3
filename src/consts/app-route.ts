export const AppRoute = {
  Main: '/',
  SignIn: '/login',
  MyList: '/mylist',
  Film: (id?: string) => `/films/${id || ':id'}`,
  AddReview: (id?: string) => `/films/${id || ':id'}/review`,
  Player: (id?: string) => `/player/${id || ':id'}`,
} as const;
