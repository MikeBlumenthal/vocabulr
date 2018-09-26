
const QuestionView = require('./question_view.js');
const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(headElement, bodyElement){
  this.head = headElement;
  this.body = bodyElement;
};

ResultView.prototype.bindEvents = function () {

  PubSub.subscribe('Answer:answer-selected', (event) => {
    this.head.innerHTML = '';
    this.body.innerHTML = '';
    this.tidyQuestion(event.detail.word);

    if (event.detail.counter.length < 6){
      this.createDisplay(event.detail, 'next-btn', 'Another word!');
    } else {
      this.createDisplay(event.detail, 'result', 'Your results!');
    }
  }
)
};

ResultView.prototype.createDisplay = function (data, buttonID, buttonText) {
  this.header(data);
  this.render(data.correctAnswerObj);
  const button = document.createElement('button');
  button.id = buttonID;
  button.textContent = buttonText;
  this.body.appendChild(button);
  button.addEventListener('click', (event) => {
    event.preventDefault();
    PubSub.publish(`ResultView:${buttonID}`, data)
  })
};



ResultView.prototype.header = function (data) {
  const header = document.createElement('h2');
  const audioPath = 'audio/buzzers/';
  if (data.correct) {
    const fileName = 'success.mp3';
    var audio = new Audio(audioPath + fileName);
    audio.volume = 0.5;
    audio.play();
    header.textContent = `That's right!`;
  } else {
    const fileName = 'wrong.mp3';
    var audio = new Audio(audioPath + fileName);
    audio.volume = 0.5;
    audio.play();
    header.textContent = 'Not quite!';
  };
  this.head.appendChild(header);
};


ResultView.prototype.render = function (answerObj) {
  const answerText = answerObj.answer;
  const answerImg = answerObj.image;

  const correctDiv = document.createElement('div');
  correctDiv.id = 'correct-result';

  const resultP = document.createElement('p');
  resultP.textContent = `means ${answerText}`;
  resultP.id = 'correct-text';

  const img = document.createElement('img');
  img.src = answerImg;
  img.id = 'correct-img';

  correctDiv.appendChild(resultP);
  correctDiv.appendChild(img);

  this.body.appendChild(correctDiv);
};

ResultView.prototype.tidyQuestion = function (word) {
  const questionView = new QuestionView(this.body);
  questionView.justWord(word);
};

module.exports = ResultView;
