const AnswerView = function(element){
  this.element = element;
};

AnswerView.prototype.render = function (answerObj) {
  const answer = answerObj.answer;
  const img = answerObj.image;
  const correct = answerObj.correct;

  const div = document.createElement('div');
  div.classList.add('answer');
  div.setAttribute('correct', correct);

  const answerEl = document.createElement('h4');
  answerEl.textContent = answer;
  div.appendChild(answerEl);

  const imageEl = document.createElement('img');
  imageEl.src = img;
  div.appendChild(imageEl);

  this.element.appendChild(div);
};

module.exports = AnswerView;
