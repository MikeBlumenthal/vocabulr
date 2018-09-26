// const PubSub = require('../helpers/pub_sub.js');

const QuestionView = function(element){
  this.element = element;
};

QuestionView.prototype.createQuestion = function (word) {
  const questionTitle = document.createElement('h2');
  questionTitle.textContent = 'What do I mean?';
  questionTitle.id = 'question-title'
  this.element.appendChild(questionTitle);
  this.justWord(word);
  };


QuestionView.prototype.justWord = function (word) {
  const questionWord = document.createElement('h2');
  questionWord.textContent = word;
  questionWord.id = 'question-word';
  this.element.appendChild(questionWord);
  this.addAudio();
};


QuestionView.prototype.addAudio = function () {
  const questionWordEl = document.querySelector('#question-word');
  questionWordEl.addEventListener('click', (event) => {
    const audioPath = 'audio/';
    const fileName = event.target.innerText.toLowerCase().replace(' ', '_') + '.mp3';
    const audio = new Audio(audioPath + fileName);
    audio.play();
  })
};

module.exports = QuestionView;
