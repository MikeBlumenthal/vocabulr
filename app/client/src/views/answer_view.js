
const AnswerView = function(element){
  this.element = element;
};


AnswerView.prototype.render = function (answerObj) {
  const answer = answerObj.answer;
  const img = answerObj.image;
  const id = answerObj.id;
  const category = answerObj.category;

  const div = document.createElement('div');
  div.classList.add('answer');
  div.setAttribute('value', answer);
  div.id = id;
  div.value = answer;
  div.category = category;

  const answerEl = document.createElement('h4');
  answerEl.textContent = answer;
  answerEl.id = id;
  answerEl.value = answer;
  answerEl.category = category;
  div.appendChild(answerEl);

  const imageEl = document.createElement('img');
  imageEl.src = img;
  imageEl.id = id;
  imageEl.value = answer;
  imageEl.category = category;
  div.appendChild(imageEl);

  this.element.appendChild(div);
};

module.exports = AnswerView;
