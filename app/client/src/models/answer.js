const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Answer = function () {
  this.category = null;
};

Answer.prototype.bindEvents = function () {
  PubSub.subscribe('ResponseView:answer-selected', (event) => {
    this.category = event.detail.category;
    console.log(this.category);
    if( event.detail.value !== undefined ){
      this.checkAnswer(event.detail);
    };
  });
};

Answer.prototype.checkAnswer = function (answer) {
  const userGuess = answer.value;
  const request = new Request('http://localhost:3000/api/questions');
  request.getOne(answer.id).then((response) => {
    const correctAnswer = response[0].answers.find((answer) => {
      return answer.correct === true;
    });

    const result = {};
    if (userGuess === correctAnswer.answer) {
      result.correct = answer;
      console.log('Correct!');
    } else {
      result.incorrect = answer;
      console.log('Incorrect :(');
    };
    PubSub.publish('Answer:answer-selected', result);
  });
};


module.exports = Answer;
