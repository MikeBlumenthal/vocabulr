const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Answer = function () {
  this.counter = [];
  this.category = null;
};

Answer.prototype.bindEvents = function () {
  PubSub.subscribe('ResponseView:answer-selected', (event) => {
    this.category = event.detail.category;
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

    const result = {
      correctAnswerObj: correctAnswer,
      userCorrect: null,
      counter: null,
      category: this.category
    };

    if (userGuess === correctAnswer.answer) {
      result.correct = true;
      this.counter.push(1);
      console.log('Correct!');
    } else {
      result.correct = false;
      this.counter.push(0);
      console.log('Incorrect :(');
    };
    this.progressBar();
    result.counter = this.counter;
    PubSub.publish('Answer:answer-selected', result);
  });
};

Answer.prototype.progressBar = function () {
  const targetBox = document.querySelector(`#box${this.counter.length}`);
  let resultCopy = this.counter.map(x => x);
  let result = resultCopy.pop();
  if (result === 1){
    targetBox.setAttribute('style', 'background-color: green');
  }else{
    targetBox.setAttribute('style', 'background-color: red');
  }
};



module.exports = Answer;
