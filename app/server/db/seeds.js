use vocabulary;
db.dropDatabase();

db.questions.insertMany([
    {
      word: 'der Apfel',
      category: 'fruit',
      answers:
      [
        {
          answer: 'apple',
          correct: true,
          image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Red_apple_on_white_background.jpg'
        },
        {
          answer: 'banana',
          correct: false,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana_%28white_background%29.jpg/320px-Banana_%28white_background%29.jpg'
        },
        {
          answer: 'pear',
          correct: false,
          image: 'http://res.publicdomainfiles.com/pdf_view/1/13488708014929.png'
        }
      ]
    },
    {
      word:'die Banane',
      category: 'fruit',
      answers:
      [
        {
          answer: 'apple',
          correct: false,
          image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Red_apple_on_white_background.jpg'
        },
        {
          answer: 'banana',
          correct: true,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana_%28white_background%29.jpg/320px-Banana_%28white_background%29.jpg'
        },
        {
          answer: 'pear',
          correct: false,
          image: 'http://res.publicdomainfiles.com/pdf_view/1/13488708014929.png'
        }
      ]
    },
    {
      word: 'die Birne',
      category: 'fruit',
      answers:
      [
        {
          answer: 'apple',
          correct: false,
          image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Red_apple_on_white_background.jpg'
        },
        {
          answer: 'banana',
          correct: false,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana_%28white_background%29.jpg/320px-Banana_%28white_background%29.jpg'
        },
        {
          answer: 'pear',
          correct: true,
          image: 'http://res.publicdomainfiles.com/pdf_view/1/13488708014929.png'
        }
      ]
    },
    {
      word:'die Ananas',
      category: 'fruit',
      answers:
      [
        {
          answer: 'pineapple',
          correct: true,
          image: 'http://www.picserver.org/pictures/pineapple02-lg.jpg'
        },
        {
          answer: 'banana',
          correct: false,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana_%28white_background%29.jpg/320px-Banana_%28white_background%29.jpg'
        },
        {
          answer: 'pear',
          correct: false,
          image: 'http://res.publicdomainfiles.com/pdf_view/1/13488708014929.png'
        }
      ]
    },
    {
      word:'die Erdbeere',
      category: 'fruit',
      answers:
      [
        {
          answer: 'strawberry',
          correct: true,
          image: 'http://www.picserver.org/pictures/strawberry02-lg.jpg'
        },
        {
          answer: 'raspberry',
          correct: false,
          image: 'http://pngimg.com/uploads/raspberry/raspberry_PNG5070.png'
        },
        {
          answer: 'grape',
          correct: false,
          image: 'http://pngimg.com/uploads/grape/grape_PNG2959.png'
        }
      ]
    },
    {
      word:'die Traube',
      category: 'fruit',
      answers:
      [
        {
          answer: 'strawberry',
          correct: false,
          image: 'http://www.picserver.org/pictures/strawberry02-lg.jpg'
        },
        {
          answer: 'apple',
          correct: false,
          image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Red_apple_on_white_background.jpg'
        },
        {
          answer: 'grape',
          correct: true,
          image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/twitter/154/grapes_1f347.png'
        }
      ]
    },
    {
      word: 'das Pferd',
      category: 'animals',
      answers:
      [
        {
          answer: 'horse',
          correct: true,
          image: 'https://c1.staticflickr.com/1/192/440198755_45d3a9a9d3_b.jpg'
        },
        {
          answer: 'goat',
          correct: false,
          image: 'https://c.pxhere.com/photos/4f/f2/bighorn_animal_nature_wild_wildlife_mammal_horn_portrait-666665.jpg!d'
        },
        {
          answer: 'sheep',
          correct: false,
          image: 'https://images.pexels.com/photos/227691/pexels-photo-227691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
      ]
    },
    {
      word:  'die Zeige',
      category: 'animals',
      answers:
      [
        {
          answer: 'sheep',
          correct: false,
          image: 'https://images.pexels.com/photos/227691/pexels-photo-227691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          answer: 'fox',
          correct: false,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fox_study_6.jpg/399px-Fox_study_6.jpg'
        },
        {
          answer: 'goat',
          correct: true,
          image: 'https://c.pxhere.com/photos/4f/f2/bighorn_animal_nature_wild_wildlife_mammal_horn_portrait-666665.jpg!d'
        }
      ]
    },
    {
      word: 'das Schaf',
      category: 'animals',
      answers:
      [
        {
          answer: 'sheep',
          correct: true,
          image: 'https://images.pexels.com/photos/227691/pexels-photo-227691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          answer: 'rabbit',
          correct: false,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSEm5yS_pKnU5wn3nEZDY6UH3OocrczRJNoBOfge1YD5NRlT9'
        },
        {
          answer: 'horse',
          correct: false,
          image: 'https://c1.staticflickr.com/1/192/440198755_45d3a9a9d3_b.jpg'
        }
      ]
    },
    {
      word: 'das Kaninchen',
      category: 'animals',
      answers:
      [
        {
          answer: 'rabbit',
          correct: true,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSEm5yS_pKnU5wn3nEZDY6UH3OocrczRJNoBOfge1YD5NRlT9'
        },
        {
          answer: 'dog',
          correct: false,
          image: 'https://cdn12.picryl.com/photo/2016/12/31/dog-dogue-de-bordeaux-mastiff-animals-ab0954-1024.jpg'
        },
        {
          answer: 'goat',
          correct: false,
          image: 'https://c.pxhere.com/photos/4f/f2/bighorn_animal_nature_wild_wildlife_mammal_horn_portrait-666665.jpg!d'
        }
      ]
    },
    {
      word: 'die Ente',
      category: 'animals',
      answers:
      [
        {
          answer: 'fox',
          correct: false,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fox_study_6.jpg/399px-Fox_study_6.jpg'
        },
        {
          answer: 'duck',
          correct: true,
          image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Duck-293474_white_background.jpg'
        },
        {
          answer: 'rabbit',
          correct: false,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSEm5yS_pKnU5wn3nEZDY6UH3OocrczRJNoBOfge1YD5NRlT9'
        }
      ]
    },
    {
      word: 'die Gans',
      category: 'animals',
      answers:
      [
        {
          answer: 'duck',
          correct: false,
          image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Duck-293474_white_background.jpg'
        },
        {
          answer: 'goose',
          correct: true,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Goose_cartoon_04.svg/2000px-Goose_cartoon_04.svg.png'
        },
        {
          answer: 'goat',
          correct: false,
          image: 'https://c.pxhere.com/photos/4f/f2/bighorn_animal_nature_wild_wildlife_mammal_horn_portrait-666665.jpg!d'
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
