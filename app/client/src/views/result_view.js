
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
      this.render(event.detail.correctAnswerObj);
      this.header(event);
      const nextButton = document.createElement('button');
      nextButton.id = 'next-btn';
      nextButton.textContent = "Next question!";
      this.body.appendChild(nextButton);
      nextButton.addEventListener('click', (event) => {
        event.preventDefault();
        PubSub.publish('ResultView:next-question', 1);
      })
    } else {
      this.render(event.detail.correctAnswerObj);
      this.header(event);
      const resultButton = document.createElement('button');
      resultButton.id = 'result';
      resultButton.textContent = "RESULTS!";
      this.body.appendChild(resultButton);
      const results = event.detail;
      resultButton.addEventListener('click', (event) => {
        event.preventDefault();
        PubSub.publish('ResultView:last-question-answered', results)
      })

    }
  }
)
};

ResultView.prototype.header = function (event) {
  const header = document.createElement('h2');
  if (event.detail.correct) {
    header.textContent = 'You were correct!';
  } else {
    header.textContent = 'Sorry! That is incorrect';
  };
  this.head.appendChild(header);
};


ResultView.prototype.render = function (answerObj) {
  const answerText = answerObj.answer;
  const answerImg = answerObj.image;

  const correctDiv = document.createElement('div');
  correctDiv.id = 'correct-result';

  const resultP = document.createElement('p');
  resultP.textContent = `Means ${answerText}`;
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
