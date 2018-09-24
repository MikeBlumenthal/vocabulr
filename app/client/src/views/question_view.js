const PubSub = require('../helpers/pub_sub.js');

const QuestionView = function(element){
  this.element = element;
};

QuestionView.prototype.bindEvents = function () {
  PubSub.subscribe('Question:all-data-ready', (event) => {
    this.element.innerHTML = '';
    const questionWord = event.detail.word;
    this.createQuestion(questionWord);
  });
  PubSub.subscribe('Question:next-one-ready', (event) => {
    this.element.innerHTML = '';
    const questionWord = event.detail.word;
    this.createQuestion(questionWord);
  })
};

QuestionView.prototype.createQuestion = function (word) {
  const hintButton = document.querySelector('#hint-btn');
  hintButton.style.visibility = 'visible';

  const questionTitle = document.createElement('h3');
  questionTitle.textContent = 'What does this mean?';
  this.element.appendChild(questionTitle);

  const questionWord = document.createElement('h2');
  questionWord.textContent = word;
  this.element.appendChild(questionWord);
};

module.exports = QuestionView;
