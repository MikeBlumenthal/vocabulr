const Base64 = require('../helpers/base64.js');

const AnswerView = function(element){
  this.element = element;
};

AnswerView.prototype.render = function (answerObj) {
  const answer = answerObj.answer;
  const img = answerObj.image;
  const correct = answerObj.correct.toString();

  const base64 = new Base64()
  const div = document.createElement('div');
  div.classList.add('answer');
  div.setAttribute('correct', base64.encode(correct));

  const answerEl = document.createElement('h4');
  answerEl.textContent = answer;
  div.appendChild(answerEl);

  const imageEl = document.createElement('img');
  imageEl.src = img;
  div.appendChild(imageEl);

  this.element.appendChild(div);
};

module.exports = AnswerView;
