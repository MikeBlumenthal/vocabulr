use vocabulary;
db.dropDatabase();

db.questions.insertMany(
  [
    {
      word:'Apfel',
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
      word:'Banane',
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
      word:'Birne',
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

    }
  ]
)
