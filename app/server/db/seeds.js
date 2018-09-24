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
          image: 'https://cdn.pixabay.com/photo/2013/07/13/11/34/apple-158419_960_720.png'
        },
        {
          answer: 'banana',
          correct: false,
          image: 'https://cdn.pixabay.com/photo/2012/04/26/18/41/banana-42793_960_720.png'
        },
        {
          answer: 'pear',
          correct: false,
          image: 'https://cdn.pixabay.com/photo/2017/10/14/15/51/pear-2850843_960_720.png'
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
          image: 'https://cdn.pixabay.com/photo/2013/07/13/11/34/apple-158419_960_720.png'
        },
        {
          answer: 'banana',
          correct: true,
          image: 'https://cdn.pixabay.com/photo/2012/04/26/18/41/banana-42793_960_720.png'
        },
        {
          answer: 'pear',
          correct: false,
          image: 'https://cdn.pixabay.com/photo/2017/10/14/15/51/pear-2850843_960_720.png'
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
          image: 'https://cdn.pixabay.com/photo/2013/07/13/11/34/apple-158419_960_720.png'
        },
        {
          answer: 'banana',
          correct: false,
          image: 'https://cdn.pixabay.com/photo/2012/04/26/18/41/banana-42793_960_720.png'
        },
        {
          answer: 'pear',
          correct: true,
          image: 'https://cdn.pixabay.com/photo/2017/10/14/15/51/pear-2850843_960_720.png'
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
          image: 'https://cdn.pixabay.com/photo/2012/04/26/18/41/banana-42793_960_720.png'
        },
        {
          answer: 'pear',
          correct: false,
          image: 'https://cdn.pixabay.com/photo/2017/10/14/15/51/pear-2850843_960_720.png'
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
      word:'die Himbeere',
      category: 'fruit',
      answers:
      [
        {
          answer: 'strawberry',
          correct: false,
          image: 'http://www.picserver.org/pictures/strawberry02-lg.jpg'
        },
        {
          answer: 'raspberry',
          correct: true,
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
          image: 'https://pixnio.com/free-images/2018/06/14/2018-06-14-22-40-12-1200x800.jpg'
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
          image: 'https://pixnio.com/free-images/2018/06/14/2018-06-14-22-40-12-1200x800.jpg'
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
          image: 'https://pixnio.com/free-images/2018/06/14/2018-06-14-22-40-12-1200x800.jpg'
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
          image: 'https://pixnio.com/free-images/2018/06/14/2018-06-14-22-40-12-1200x800.jpg'
        }
      ]
    }

  ]);
