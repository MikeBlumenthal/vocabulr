const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');
const Randomiser = require('../helpers/randomiser.js')

const Question = function() {
  this.data = null;
  this.questions = null;
  this.request = new Request('http://localhost:3000/api/questions');
}

Question.prototype.getData = function () {
  this.request.get()
  .then((response) => {
    this.data = response;
    PubSub.publish('Question:all-data', response)
  })
};

Question.prototype.bindEvents = function () {
  PubSub.subscribe('ResultView:next-question', (event) => {
    const nextQuestion = this.getOneQuestion();
    PubSub.publish('Question:next-one-ready', nextQuestion);
  })
  PubSub.subscribe('CategoryView:category-selected', (event) => {
    const category = event.detail;
    this.questions = this.data.filter(question => question.category === category);
    Randomiser.randomise(this.questions);
    const firstQuestion = this.getOneQuestion();
    PubSub.publish('Question:first-question-ready', firstQuestion);
  })
}


Question.prototype.getOneQuestion = function () {
  return this.questions.pop();
};

module.exports = Question;
