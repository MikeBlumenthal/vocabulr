const Request = require('../helpers/request.js');

const Question = function() {
  this.data = null;
  this.request = new Request('http://localhost:3000/api/questions');

}

Question.prototype.getQuestions = function () {
  this.request.get()
  .then((response) => {
    this.data = response;
  })
};

module.exports = Question;
