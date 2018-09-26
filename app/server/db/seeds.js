use vocabulary;
db.dropDatabase();

db.questions.insertMany([

  // ----------- FRUIT ----------- \\\

  {
    word: 'Apfel',
    category: 'fruit',
    answers:
    [
      {
        answer: 'apple',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/red-apple_1f34e.png'
      },
      {
        answer: 'banana',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/banana_1f34c.png'
      },
      {
        answer: 'pear',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/pear_1f350.png'
      }
    ]
  },

  {
    word:'Banane',
    category: 'fruit',
    answers:
    [
      {
        answer: 'apple',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/red-apple_1f34e.png'
      },
      {
        answer: 'banana',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/banana_1f34c.png'
      },
      {
        answer: 'pear',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/pear_1f350.png'
      }
    ]
  },

  {
    word: 'Birne',
    category: 'fruit',
    answers:
    [
      {
        answer: 'apple',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/red-apple_1f34e.png'
      },
      {
        answer: 'banana',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/banana_1f34c.png'
      },
      {
        answer: 'pear',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/pear_1f350.png'
      }
    ]
  },

  {
    word:'Ananas',
    category: 'fruit',
    answers:
    [
      {
        answer: 'pineapple',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/pineapple_1f34d.png'
      },
      {
        answer: 'banana',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/banana_1f34c.png'
      },
      {
        answer: 'pear',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/pear_1f350.png'
      }
    ]
  },

  {
    word:'Erdbeere',
    category: 'fruit',
    answers:
    [
      {
        answer: 'strawberry',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/strawberry_1f353.png'
      },
      {
        answer: 'peach',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/peach_1f351.png'
      },
      {
        answer: 'grape',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/grapes_1f347.png'
      }
    ]
  },

  {
    word:'Traube',
    category: 'fruit',
    answers:
    [
      {
        answer: 'strawberry',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/strawberry_1f353.png'
      },
      {
        answer: 'apple',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/red-apple_1f34e.png'
      },
      {
        answer: 'grape',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/grapes_1f347.png'
      }
    ]
  },

  // ----------- ANIMALS ----------- \\\

  {
    word: 'Pferd',
    category: 'animals',
    answers:
    [
      {
        answer: 'horse',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/horse_1f40e.png'
      },
      {
        answer: 'goat',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/146/goat_1f410.png'
      },
      {
        answer: 'sheep',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojione/151/sheep_1f411.png'
      }
    ]
  },

  {
    word:  'Zeige',
    category: 'animals',
    answers:
    [
      {
        answer: 'sheep',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojione/151/sheep_1f411.png'
      },
      {
        answer: 'fox',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/fox-face_1f98a.png'
      },
      {
        answer: 'goat',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/146/goat_1f410.png'
      }
    ]
  },

  {
    word: 'Schaf',
    category: 'animals',
    answers:
    [
      {
        answer: 'sheep',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojione/151/sheep_1f411.png'
      },
      {
        answer: 'rabbit',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/65/rabbit_1f407.png'
      },
      {
        answer: 'horse',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/horse_1f40e.png'
      }
    ]
  },

  {
    word: 'Kaninchen',
    category: 'animals',
    answers:
    [
      {
        answer: 'rabbit',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/65/rabbit_1f407.png'
      },
      {
        answer: 'dog',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/dog_1f415.png'
      },
      {
        answer: 'goat',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/146/goat_1f410.png'
      }
    ]
  },

  {
    word: 'Ente',
    category: 'animals',
    answers:
    [
      {
        answer: 'fox',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/fox-face_1f98a.png'
      },
      {
        answer: 'duck',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/duck_1f986.png'
      },
      {
        answer: 'rabbit',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/65/rabbit_1f407.png'
      }
    ]
  },

  {
    word: 'Affe',
    category: 'animals',
    answers:
    [
      {
        answer: 'duck',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/duck_1f986.png'
      },
      {
        answer: 'monkey',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/monkey_1f412.png'
      },
      {
        answer: 'goat',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/146/goat_1f410.png'
      }
    ]
  },

  {
    word: 'Schwein',
    category: 'animals',
    answers: [
      {
        answer: 'pig',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/pig-face_1f437.png'
      },
      {
        answer: 'horse',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/horse_1f40e.png'
      },
      {
        answer: 'snake',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojione/151/snake_1f40d.png'
      }
    ]
  },

  {
    word: 'Schlange',
    category: 'animals',
    answers: [
      {
        answer: 'snake',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojione/151/snake_1f40d.png'
      },
      {
        answer: 'shark',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/shark_1f988.png'
      },
      {
        answer: 'squid',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojione/151/squid_1f991.png'
      }
    ]
  },

  {
    word: 'Hai',
    category: 'animals',
    answers: [
      {
        answer: 'shark',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/shark_1f988.png'
      },
      {
        answer: 'fish',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/fish_1f41f.png'
      },
      {
        answer: 'squid',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojione/151/squid_1f991.png'
      }
    ]
  },

  {
    word: 'Truthahn',
    category: 'animals',
    answers: [
      {
        answer: 'turkey',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/turkey_1f983.png'
      },
      {
        answer: 'chicken',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/146/chicken_1f414.png'
      },
      {
        answer: 'rooster',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/rooster_1f413.png'
      }
    ]
  },

  {
    word: 'Katze',
    category: 'animals',
    answers: [
      {
        answer: 'cat',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/146/cat_1f408.png'
      },
      {
        answer: 'dog',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/dog_1f415.png'
      },
      {
        answer: 'turtle',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojione/151/turtle_1f422.png'
      }
    ]
  },

  {
    word: 'Schildkröte',
    category: 'animals',
    answers: [
      {
        answer: 'turtle',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojione/151/turtle_1f422.png'
      },
      {
        answer: 'shark',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/shark_1f988.png'
      },
      {
        answer: 'snail',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/146/snail_1f40c.png'
      }
    ]
  },

  {
    word: 'Schnecke',
    category: 'animals',
    answers: [
      {
        answer: 'snail',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/146/snail_1f40c.png'
      },
      {
        answer: 'snake',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojione/151/snake_1f40d.png'
      },
      {
        answer: 'squid',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojione/151/squid_1f991.png'
      }
    ]
  },

  {
    word: 'Tintenfisch',
    category: 'animals',
    answers: [
      {
        answer: 'octopus',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/octopus_1f419.png'
      },
      {
        answer: 'fish',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/fish_1f41f.png'
      },
      {
        answer: 'shark',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/shark_1f988.png'
      }
    ]
  },

  {
    word: 'Kuh',
    category: 'animals',
    answers: [
      {
        answer: 'cow',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/146/cow_1f404.png'
      },
      {
        answer: 'koala',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/146/koala_1f428.png'
      },
      {
        answer: 'crocodile',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/crocodile_1f40a.png'
      }
    ]
  },

  {
    word: 'Eidechse',
    category: 'animals',
    answers: [
      {
        answer: 'lizard',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/lizard_1f98e.png'
      },
      {
        answer: 'horse',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/horse_1f40e.png'
      },
      {
        answer: 'giraffe',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/giraffe-face_1f992.png'
      }
    ]
  },

  // ----------- SPORTS ----------- \\\

  {
    word: 'Radfahren',
    category: 'sports',
    answers: [
      {
        answer: 'cycling',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/146/bicyclist_1f6b4.png'
      },
      {
        answer: 'wrestling',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/wrestlers_1f93c.png'
      },
      {
        answer: 'tennis',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/tennis-racquet-and-ball_1f3be.png'
      }
    ]
  },

  {
    word: 'Schwimmen',
    category: 'sports',
    answers: [
      {
        answer: 'swimming',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/man-swimming_1f3ca-200d-2642-fe0f.png'
      },
      {
        answer: 'surfing',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/man-surfing_1f3c4-200d-2642-fe0f.png'
      },
      {
        answer: 'climbing',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/person-climbing_1f9d7.png'
      }
    ]
  },

  {
    word: 'Klettern',
    category: 'sports',
    answers: [
      {
        answer: 'climbing',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/person-climbing_1f9d7.png'
      },
      {
        answer: 'surfing',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/man-surfing_1f3c4-200d-2642-fe0f.png'
      },
      {
        answer: 'golf',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/man-golfing_1f3cc-fe0f-200d-2642-fe0f.png'
      }
    ]
  },

  {
    word: 'Surfen',
    category: 'sports',
    answers: [
      {
        answer: 'surfing',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/man-surfing_1f3c4-200d-2642-fe0f.png'
      },
      {
        answer: 'swimming',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/man-swimming_1f3ca-200d-2642-fe0f.png'
      },
      {
        answer: 'golf',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/man-golfing_1f3cc-fe0f-200d-2642-fe0f.png'
      }
    ]
  },

  {
    word: 'Fußball',
    category: 'sports',
    answers: [
      {
        answer: 'football',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/soccer-ball_26bd.png'
      },
      {
        answer: 'rugby',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/rugby-football_1f3c9.png'
      },
      {
        answer: 'tennis',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/tennis-racquet-and-ball_1f3be.png'
      }
    ]
  },

  {
    word: 'Skifahren',
    category: 'sports',
    answers: [
      {
        answer: 'skiing',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/skier_26f7.png'
      },
      {
        answer: 'snowboarding',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/snowboarder_1f3c2.png'
      },
      {
        answer: 'surfing',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/man-surfing_1f3c4-200d-2642-fe0f.png'
      }
    ]
  },

  {
    word: 'Gewichtheben',
    category: 'sports',
    answers: [
      {
        answer: 'weightlifting',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/man-weight-lifting_1f3cb-fe0f-200d-2642-fe0f.png'
      },
      {
        answer: 'golf',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/man-golfing_1f3cc-fe0f-200d-2642-fe0f.png'
      },
      {
        answer: 'cycling',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/146/bicyclist_1f6b4.png'
      }
    ]
  },

  {
    word: 'Wasser Polo',
    category: 'sports',
    answers: [
      {
        answer: 'water polo',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/water-polo_1f93d.png'
      },
      {
        answer: 'surfing',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/man-surfing_1f3c4-200d-2642-fe0f.png'
      },
      {
        answer: 'cycling',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/146/bicyclist_1f6b4.png'
      }
    ]
  },

  {
    word: 'Pferde-Reiten',
    category: 'sports',
    answers: [
      {
        answer: 'horse riding',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/horse-racing_1f3c7.png'
      },
      {
        answer: 'surfing',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/man-surfing_1f3c4-200d-2642-fe0f.png'
      },
      {
        answer: 'mountain biking',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/man-mountain-biking_1f6b5-200d-2642-fe0f.png'
      }
    ]
  },

  // ----------- COUNTRIES ----------- \\\

  {
    word: 'Schottland',
    category: 'countries',
    answers: [
      {
        answer: 'scotland',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-scotland_1f3f4-e0067-e0062-e0073-e0063-e0074-e007f.png'
      },
      {
        answer: 'switzerland',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-switzerland_1f1e8-1f1ed.png'
      },
      {
        answer: 'sweden',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-sweden_1f1f8-1f1ea.png'
      }
    ]
  },

  {
    word: 'Schweiz',
    category: 'countries',
    answers: [
      {
        answer: 'switzerland',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-switzerland_1f1e8-1f1ed.png'
      },
      {
        answer: 'sweden',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-sweden_1f1f8-1f1ea.png'
      },
      {
        answer: 'scotland',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-scotland_1f3f4-e0067-e0062-e0073-e0063-e0074-e007f.png'
      }
    ]
  },

  {
    word: 'Neuseeland',
    category: 'countries',
    answers: [
      {
        answer: 'new zealand',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-new-zealand_1f1f3-1f1ff.png'
      },
      {
        answer: 'switzerland',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-switzerland_1f1e8-1f1ed.png'
      },
      {
        answer: 'scotland',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-scotland_1f3f4-e0067-e0062-e0073-e0063-e0074-e007f.png'
      }
    ]
  },

  {
    word: 'Rumänien',
    category: 'countries',
    answers: [
      {
        answer: 'romania',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-romania_1f1f7-1f1f4.png'
      },
      {
        answer: 'rwanda',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-rwanda_1f1f7-1f1fc.png'
      },
      {
        answer: 'russia',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-russia_1f1f7-1f1fa.png'
      }
    ]
  },

  {
    word: 'Polen',
    category: 'countries',
    answers: [
      {
        answer: 'poland',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-poland_1f1f5-1f1f1.png'
      },
      {
        answer: 'papua new guinea',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-papua-new-guinea_1f1f5-1f1ec.png'
      },
      {
        answer: 'pakistan',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-pakistan_1f1f5-1f1f0.png'
      }
    ]
  },

  {
    word: 'Kroatien',
    category: 'countries',
    answers: [
      {
        answer: 'croatia',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-croatia_1f1ed-1f1f7.png'
      },
      {
        answer: 'congo',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-congo-brazzaville_1f1e8-1f1ec.png'
      },
      {
        answer: 'canada',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-canada_1f1e8-1f1e6.png'
      }
    ]
  },

  {
    word: 'Kanada',
    category: 'countries',
    answers: [
      {
        answer: 'canada',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-canada_1f1e8-1f1e6.png'
      },
      {
        answer: 'croatia',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-croatia_1f1ed-1f1f7.png'
      },
      {
        answer: 'congo',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/flag-for-congo-brazzaville_1f1e8-1f1ec.png'
      }
    ]
  },

  // ----------- MISCELLANEOUS ----------- \\\

  {
    word: 'Juwel',
    category: 'miscellaneous',
    answers: [
      {
        answer: 'gem',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/gem-stone_1f48e.png'
      },
      {
        answer: 'joystick',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/joystick_1f579.png'
      },
      {
        answer: 'balloon',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/balloon_1f388.png'
      }
    ]
  },

  {
    word: 'Ballon',
    category: 'miscellaneous',
    answers: [
      {
        answer: 'balloon',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/balloon_1f388.png'
      },
      {
        answer: 'bomb',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/bomb_1f4a3.png'
      },
      {
        answer: 'ribbon',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/ribbon_1f380.png'
      }
    ]
  },

  {
    word: 'Bombe',
    category: 'miscellaneous',
    answers: [
      {
        answer: 'bomb',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/bomb_1f4a3.png'
      },
      {
        answer: 'balloon',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/balloon_1f388.png'
      },
      {
        answer: 'ribbon',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/ribbon_1f380.png'
      }
    ]
  },

  {
    word: 'Band',
    category: 'miscellaneous',
    answers: [
      {
        answer: 'ribbon',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/ribbon_1f380.png'
      },
      {
        answer: 'balloon',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/balloon_1f388.png'
      },
      {
        answer: 'watch',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/watch_231a.png'
      }
    ]
  },

  {
    word: 'Uhr',
    category: 'miscellaneous',
    answers: [
      {
        answer: 'watch',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/watch_231a.png'
      },
      {
        answer: 'clock',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/mantelpiece-clock_1f570.png'
      },
      {
        answer: 'ribbon',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/ribbon_1f380.png'
      }
    ]
  },

  {
    word: 'Glühbirne',
    category: 'miscellaneous',
    answers: [
      {
        answer: 'lightbulb',
        correct: true,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/electric-light-bulb_1f4a1.png'
      },
      {
        answer: 'camera',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/154/camera_1f4f7.png'
      },
      {
        answer: 'candle',
        correct: false,
        image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/candle_1f56f.png'
      }
    ]
  }

]);

db.history.insertMany(
  [
    {
      category: 'animals',
      results: [0,1,1,1,1,1]
    },

    {
      category: 'fruit',
      results: [1,0,0,1,1,1]
    }
  ]
);
