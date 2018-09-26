// const PubSub = require('../helpers/pub_sub.js');

const QuestionView = function(element){
  this.element = element;
};

QuestionView.prototype.createQuestion = function (word) {
  const questionTitle = document.createElement('h3');
  questionTitle.textContent = 'What is the word for...';
  questionTitle.id = 'question-title'
  this.element.appendChild(questionTitle);

  const questionWord = document.createElement('h2');
  questionWord.textContent = word + '?';
  questionWord.id = 'question-word';
  this.element.appendChild(questionWord);

  const questionWordEl = document.querySelector('#question-word');
  questionWordEl.addEventListener('click', (event) => {
    const audioPath = 'audio/'
    const fileName = event.target.innerText.toLowerCase().replace(' ', '_').replace('?', '') + '.mp3'

    var audio = new Audio(audioPath + fileName);
    audio.play();
  });
};

QuestionView.prototype.justWord = function (word) {
  const questionWord = document.createElement('h2');
  questionWord.textContent = word;
  questionWord.id = 'question-word';
  this.element.appendChild(questionWord);

  const questionWordEl = document.querySelector('#question-word');
  questionWordEl.addEventListener('click', (event) => {
    const audioPath = 'audio/'
    const fileName = event.target.innerText.toLowerCase().replace(' ', '_').replace('?', '') + '.mp3'

    var audio = new Audio(audioPath + fileName);
    audio.play();
  });
};

module.exports = QuestionView;
