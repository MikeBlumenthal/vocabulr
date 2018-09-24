const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Answer = function () {

}

Answer.prototype.bindEvents = function () {
  PubSub.subscribe('ResponseView:answer-selected', (event) => {
    if( event.detail.value !== undefined ){
      this.check(event.detail);
    }
  })
};

Answer.prototype.check = function (answer) {
  const userGuess = answer.value;
  const request = new Request('http://localhost:3000/api/questions');
  request.getOne(answer.id).then((response) => {
    const correctAnswer = response[0].answers.find((answer) => {
      return answer.correct === true;
    });
    console.log(correctAnswer);
  })
};


module.exports = Answer;
