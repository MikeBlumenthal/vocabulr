const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Answer = function () {
  this.counter = [];
  this.category = null;
  this.word = null;
}

Answer.prototype.bindEvents = function () {
  PubSub.subscribe('ResponseView:answer-selected', (event) => {
    this.category = event.detail.category;
    this.word = event.detail.word;
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
      category: this.category,
      correctAnswerObj: correctAnswer,
      counter: null,
      userCorrect: null,
      word: this.word
    };

    if (userGuess === correctAnswer.answer) {
      result.correct = true;
      this.counter.push(1);
    } else {
      result.correct = false;
      this.counter.push(0);
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
    targetBox.setAttribute('style', 'background-color: #65ab00;transition: background-color 0.5s linear;');
  }else{
    targetBox.setAttribute('style', 'background-color: #f24f4f;transition: background-color 0.5s linear;');
  }
};


module.exports = Answer;
