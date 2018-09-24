const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');
const Randomiser = require('../helpers/randomiser.js')

const Question = function() {
  this.data = null;
  this.request = new Request('http://localhost:3000/api/questions');
}

Question.prototype.getQuestions = function () {
  this.request.get()
    .then((response) => {
      const shuffledQuestions = Randomiser.randomise(response);
      this.data = shuffledQuestions;
      console.log(this.data);
      const firstQuestion = this.getOneQuestion()
      PubSub.publish('Question:all-data-ready', firstQuestion )
    })
};

Question.prototype.getOneQuestion = function () {
  return this.data.pop();
};

module.exports = Question;
