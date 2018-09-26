
const AnswerView = function(element){
  this.element = element;
};


AnswerView.prototype.render = function (answerObj) {


  const answerDiv = document.createElement('div');
  answerDiv.classList.add('answer');
  this.assignment(answerObj, answerDiv, this.element);

  const answerEl = document.createElement('h4');
  answerEl.textContent = answerObj.answer;
  this.assignment(answerObj, answerEl, answerDiv);

  const imageEl = document.createElement('img');
  imageEl.src = answerObj.image;
  this.assignment(answerObj, imageEl, answerDiv);

};

AnswerView.prototype.assignment = function (object, element, container) {
  element.category = object.category;
  element.id = object.id;
  element.value = object.answer;
  element.word = object.word;
  container.appendChild(element);
};

module.exports = AnswerView;
