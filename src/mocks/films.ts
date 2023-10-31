import {FilmData} from '../types/filmData.ts';
import {Genres} from '../consts/Genres.ts';

export const films: FilmData[] = [
  {
    id: 1,
    listImage: 'bg-the-grand-budapest-hotel.jpg',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    videoSrc: 'sintel_trailer-480p.mp4',
    title: 'The Grand Budapest Hotel',
    genre: Genres.Dramas,
    releaseDate: '2014',
    ratingScore: 8.9,
    ratingsCount: 240,
    overview: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n\nGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director:
      {
        firstName: 'Wes',
        lastName: 'Anderson'
      }
    ,
    starring: [
      {
        firstName: 'Bill',
        lastName: 'Murray'
      },
      {
        firstName: 'Edward',
        lastName: 'Norton'
      }, {
        firstName: 'Jude',
        lastName: 'Law'
      }, {
        firstName: 'Willem',
        lastName: 'Dafoe'
      }, {
        firstName: 'Saoirse',
        lastName: 'Ronan'
      },
    ],
    runTimeMinute: 99,
    reviews: [
      {
        author: {
          firstName: 'Kate',
          lastName: 'Muir'
        },
        ratingScore: 8.9,
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
        publicisedDate: 'December 24, 2016'
      }
    ]
  },
  {
    id: 2,
    listImage: 'fantastic-beasts-the-crimes-of-grindelwald.jpg',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    videoSrc: 'sintel_trailer-480p.mp4',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: Genres.Dramas,
    releaseDate: '2018',
    ratingScore: 6.7,
    ratingsCount: 241,
    overview: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n\nGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director:
      {
        firstName: 'Wes',
        lastName: 'Anderson'
      }
    ,
    starring: [
      {
        firstName: 'Bill',
        lastName: 'Murray'
      },
      {
        firstName: 'Edward',
        lastName: 'Norton'
      }, {
        firstName: 'Jude',
        lastName: 'Law'
      }, {
        firstName: 'Willem',
        lastName: 'Dafoe'
      }, {
        firstName: 'Saoirse',
        lastName: 'Ronan'
      },
    ],
    runTimeMinute: 134,
    reviews: [
      {
        author: {
          firstName: 'Kate',
          lastName: 'Muir'
        },
        ratingScore: 8.9,
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
        publicisedDate: 'December 24, 2016'
      }
    ]
  },
  {
    id: 3,
    listImage: 'bohemian-rhapsody.jpg',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    videoSrc: 'sintel_trailer-480p.mp4',
    title: 'Bohemian Rhapsody',
    genre: Genres.Documentary,
    releaseDate: '2018',
    ratingScore: 6.7,
    ratingsCount: 241,
    overview: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n\nGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director:
      {
        firstName: 'Wes',
        lastName: 'Anderson'
      }
    ,
    starring: [
      {
        firstName: 'Bill',
        lastName: 'Murray'
      },
      {
        firstName: 'Edward',
        lastName: 'Norton'
      }, {
        firstName: 'Jude',
        lastName: 'Law'
      }, {
        firstName: 'Willem',
        lastName: 'Dafoe'
      }, {
        firstName: 'Saoirse',
        lastName: 'Ronan'
      },
    ],
    runTimeMinute: 134,
    reviews: [
      {
        author: {
          firstName: 'Kate',
          lastName: 'Muir'
        },
        ratingScore: 8.9,
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
        publicisedDate: 'December 24, 2016'
      }
    ]
  },
  {
    id: 4,
    listImage: 'macbeth.jpg',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    videoSrc: 'sintel_trailer-480p.mp4',
    title: 'Macbeth',
    genre: Genres.Documentary,
    releaseDate: '2018',
    ratingScore: 6.7,
    ratingsCount: 241,
    overview: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n\nGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director:
      {
        firstName: 'Wes',
        lastName: 'Anderson'
      }
    ,
    starring: [
      {
        firstName: 'Bill',
        lastName: 'Murray'
      },
      {
        firstName: 'Edward',
        lastName: 'Norton'
      }, {
        firstName: 'Jude',
        lastName: 'Law'
      }, {
        firstName: 'Willem',
        lastName: 'Dafoe'
      }, {
        firstName: 'Saoirse',
        lastName: 'Ronan'
      },
    ],
    runTimeMinute: 134,
    reviews: [
      {
        author: {
          firstName: 'Kate',
          lastName: 'Muir'
        },
        ratingScore: 8.9,
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
        publicisedDate: 'December 24, 2016'
      }
    ]
  },
  {
    id: 5,
    listImage: 'aviator.jpg',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    videoSrc: 'sintel_trailer-480p.mp4',
    title: 'Aviator',
    genre: Genres.Documentary,
    releaseDate: '2018',
    ratingScore: 6.7,
    ratingsCount: 241,
    overview: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n\nGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director:
      {
        firstName: 'Wes',
        lastName: 'Anderson'
      }
    ,
    starring: [
      {
        firstName: 'Bill',
        lastName: 'Murray'
      },
      {
        firstName: 'Edward',
        lastName: 'Norton'
      }, {
        firstName: 'Jude',
        lastName: 'Law'
      }, {
        firstName: 'Willem',
        lastName: 'Dafoe'
      }, {
        firstName: 'Saoirse',
        lastName: 'Ronan'
      },
    ],
    runTimeMinute: 134,
    reviews: [
      {
        author: {
          firstName: 'Kate',
          lastName: 'Muir'
        },
        ratingScore: 8.9,
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
        publicisedDate: 'December 24, 2016'
      }
    ]
  },
  {
    id: 6,
    listImage: 'we-need-to-talk-about-kevin.jpg',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    videoSrc: 'sintel_trailer-480p.mp4',
    title: 'We need to talk about Kevin',
    genre: Genres.Documentary,
    releaseDate: '2018',
    ratingScore: 6.7,
    ratingsCount: 241,
    overview: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n\nGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director:
      {
        firstName: 'Wes',
        lastName: 'Anderson'
      }
    ,
    starring: [
      {
        firstName: 'Bill',
        lastName: 'Murray'
      },
      {
        firstName: 'Edward',
        lastName: 'Norton'
      }, {
        firstName: 'Jude',
        lastName: 'Law'
      }, {
        firstName: 'Willem',
        lastName: 'Dafoe'
      }, {
        firstName: 'Saoirse',
        lastName: 'Ronan'
      },
    ],
    runTimeMinute: 134,
    reviews: [
      {
        author: {
          firstName: 'Kate',
          lastName: 'Muir'
        },
        ratingScore: 8.9,
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
        publicisedDate: 'December 24, 2016'
      }
    ]
  },
  {
    id: 7,
    listImage: 'what-we-do-in-the-shadows.jpg',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    videoSrc: 'sintel_trailer-480p.mp4',
    title: 'What We Do in the Shadows',
    genre: Genres.Documentary,
    releaseDate: '2018',
    ratingScore: 6.7,
    ratingsCount: 241,
    overview: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n\nGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director:
      {
        firstName: 'Wes',
        lastName: 'Anderson'
      }
    ,
    starring: [
      {
        firstName: 'Bill',
        lastName: 'Murray'
      },
      {
        firstName: 'Edward',
        lastName: 'Norton'
      }, {
        firstName: 'Jude',
        lastName: 'Law'
      }, {
        firstName: 'Willem',
        lastName: 'Dafoe'
      }, {
        firstName: 'Saoirse',
        lastName: 'Ronan'
      },
    ],
    runTimeMinute: 134,
    reviews: [
      {
        author: {
          firstName: 'Kate',
          lastName: 'Muir'
        },
        ratingScore: 8.9,
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
        publicisedDate: 'December 24, 2016'
      }
    ]
  },
  {
    id: 8,
    listImage: 'revenant.jpg',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    videoSrc: 'sintel_trailer-480p.mp4',
    title: 'Revenant',
    genre: Genres.Documentary,
    releaseDate: '2018',
    ratingScore: 6.7,
    ratingsCount: 241,
    overview: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n\nGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director:
      {
        firstName: 'Wes',
        lastName: 'Anderson'
      }
    ,
    starring: [
      {
        firstName: 'Bill',
        lastName: 'Murray'
      },
      {
        firstName: 'Edward',
        lastName: 'Norton'
      }, {
        firstName: 'Jude',
        lastName: 'Law'
      }, {
        firstName: 'Willem',
        lastName: 'Dafoe'
      }, {
        firstName: 'Saoirse',
        lastName: 'Ronan'
      },
    ],
    runTimeMinute: 134,
    reviews: [
      {
        author: {
          firstName: 'Kate',
          lastName: 'Muir'
        },
        ratingScore: 8.9,
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
        publicisedDate: 'December 24, 2016'
      }
    ]
  },
  {
    id: 9,
    listImage: 'revenant.jpg',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    videoSrc: 'sintel_trailer-480p.mp4',
    title: 'Revenant',
    genre: Genres.Documentary,
    releaseDate: '2018',
    ratingScore: 6.7,
    ratingsCount: 241,
    overview: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n\nGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director:
      {
        firstName: 'Wes',
        lastName: 'Anderson'
      }
    ,
    starring: [
      {
        firstName: 'Bill',
        lastName: 'Murray'
      },
      {
        firstName: 'Edward',
        lastName: 'Norton'
      }, {
        firstName: 'Jude',
        lastName: 'Law'
      }, {
        firstName: 'Willem',
        lastName: 'Dafoe'
      }, {
        firstName: 'Saoirse',
        lastName: 'Ronan'
      },
    ],
    runTimeMinute: 134,
    reviews: [
      {
        author: {
          firstName: 'Kate',
          lastName: 'Muir'
        },
        ratingScore: 8.9,
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
        publicisedDate: 'December 24, 2016'
      }
    ]
  },
  {
    id: 10,
    listImage: 'revenant.jpg',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    videoSrc: 'sintel_trailer-480p.mp4',
    title: 'Revenant',
    genre: Genres.Documentary,
    releaseDate: '2018',
    ratingScore: 6.7,
    ratingsCount: 241,
    overview: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n\nGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director:
      {
        firstName: 'Wes',
        lastName: 'Anderson'
      }
    ,
    starring: [
      {
        firstName: 'Bill',
        lastName: 'Murray'
      },
      {
        firstName: 'Edward',
        lastName: 'Norton'
      }, {
        firstName: 'Jude',
        lastName: 'Law'
      }, {
        firstName: 'Willem',
        lastName: 'Dafoe'
      }, {
        firstName: 'Saoirse',
        lastName: 'Ronan'
      },
    ],
    runTimeMinute: 134,
    reviews: [
      {
        author: {
          firstName: 'Kate',
          lastName: 'Muir'
        },
        ratingScore: 8.9,
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
        publicisedDate: 'December 24, 2016'
      }
    ]
  },
  {
    id: 11,
    listImage: 'revenant.jpg',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    videoSrc: 'sintel_trailer-480p.mp4',
    title: 'Revenant',
    genre: Genres.Documentary,
    releaseDate: '2018',
    ratingScore: 6.7,
    ratingsCount: 241,
    overview: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n\nGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director:
      {
        firstName: 'Wes',
        lastName: 'Anderson'
      }
    ,
    starring: [
      {
        firstName: 'Bill',
        lastName: 'Murray'
      },
      {
        firstName: 'Edward',
        lastName: 'Norton'
      }, {
        firstName: 'Jude',
        lastName: 'Law'
      }, {
        firstName: 'Willem',
        lastName: 'Dafoe'
      }, {
        firstName: 'Saoirse',
        lastName: 'Ronan'
      },
    ],
    runTimeMinute: 134,
    reviews: [
      {
        author: {
          firstName: 'Kate',
          lastName: 'Muir'
        },
        ratingScore: 8.9,
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
        publicisedDate: 'December 24, 2016'
      }
    ]
  },
  {
    id: 12,
    listImage: 'revenant.jpg',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    videoSrc: 'sintel_trailer-480p.mp4',
    title: 'Revenant',
    genre: Genres.Documentary,
    releaseDate: '2018',
    ratingScore: 6.7,
    ratingsCount: 241,
    overview: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n\nGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director:
      {
        firstName: 'Wes',
        lastName: 'Anderson'
      }
    ,
    starring: [
      {
        firstName: 'Bill',
        lastName: 'Murray'
      },
      {
        firstName: 'Edward',
        lastName: 'Norton'
      }, {
        firstName: 'Jude',
        lastName: 'Law'
      }, {
        firstName: 'Willem',
        lastName: 'Dafoe'
      }, {
        firstName: 'Saoirse',
        lastName: 'Ronan'
      },
    ],
    runTimeMinute: 134,
    reviews: [
      {
        author: {
          firstName: 'Kate',
          lastName: 'Muir'
        },
        ratingScore: 8.9,
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
        publicisedDate: 'December 24, 2016'
      }
    ]
  },
  {
    id: 13,
    listImage: 'revenant.jpg',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    videoSrc: 'sintel_trailer-480p.mp4',
    title: 'Revenant',
    genre: Genres.Documentary,
    releaseDate: '2018',
    ratingScore: 6.7,
    ratingsCount: 241,
    overview: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n\nGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director:
      {
        firstName: 'Wes',
        lastName: 'Anderson'
      }
    ,
    starring: [
      {
        firstName: 'Bill',
        lastName: 'Murray'
      },
      {
        firstName: 'Edward',
        lastName: 'Norton'
      }, {
        firstName: 'Jude',
        lastName: 'Law'
      }, {
        firstName: 'Willem',
        lastName: 'Dafoe'
      }, {
        firstName: 'Saoirse',
        lastName: 'Ronan'
      },
    ],
    runTimeMinute: 134,
    reviews: [
      {
        author: {
          firstName: 'Kate',
          lastName: 'Muir'
        },
        ratingScore: 8.9,
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
        publicisedDate: 'December 24, 2016'
      }
    ]
  },
  {
    id: 14,
    listImage: 'revenant.jpg',
    posterImage: 'the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'bg-the-grand-budapest-hotel.jpg',
    videoSrc: 'sintel_trailer-480p.mp4',
    title: 'Revenant',
    genre: Genres.Documentary,
    releaseDate: '2018',
    ratingScore: 6.7,
    ratingsCount: 241,
    overview: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n\nGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director:
      {
        firstName: 'Wes',
        lastName: 'Anderson'
      }
    ,
    starring: [
      {
        firstName: 'Bill',
        lastName: 'Murray'
      },
      {
        firstName: 'Edward',
        lastName: 'Norton'
      }, {
        firstName: 'Jude',
        lastName: 'Law'
      }, {
        firstName: 'Willem',
        lastName: 'Dafoe'
      }, {
        firstName: 'Saoirse',
        lastName: 'Ronan'
      },
    ],
    runTimeMinute: 134,
    reviews: [
      {
        author: {
          firstName: 'Kate',
          lastName: 'Muir'
        },
        ratingScore: 8.9,
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
        publicisedDate: 'December 24, 2016'
      }
    ]
  }
];
