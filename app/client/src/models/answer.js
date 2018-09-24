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
  const request = new Request('http://localhost:3000/api/questions');
  request.getOne(answer.id).then((response) => {
    console.log(response);
  })
};


module.exports = Answer;
