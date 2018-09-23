use vocabulary;
db.dropDatabase();

db.questions.insertMany(
  [
    {
      word:'der Apfel',
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
      word:'die Birne',
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
    }
  )
