const AnswerView = function(element){
  this.element = element;
};

AnswerView.prototype.render = function (answerObj) {
  const answer = answerObj.answer;
  const img = answerObj.image;
  const id = answerObj.id;

  const div = document.createElement('div');
  div.classList.add('answer');
  div.id = id;
  div.value = answer;

  const answerEl = document.createElement('h4');
  answerEl.textContent = answer;
  answerEl.id = id;
  answerEl.value = answer;
  div.appendChild(answerEl);

  const imageEl = document.createElement('img');
  imageEl.src = img;
  imageEl.id = id;
  imageEl.value = answer;
  div.appendChild(imageEl);

  this.element.appendChild(div);
};

module.exports = AnswerView;
