const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(element){
  this.element = element;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Answer:answer-selected', (event) => {
    this.element.innerHTML = '';
    const header = document.createElement('h2');
    const audioPath = 'audio/buzzers/'
    if (event.detail.correct) {
      const fileName = 'success.mp3'
      var audio = new Audio(audioPath + fileName);
      audio.play();
      header.textContent = 'You were correct!';
    } else {
      const fileName = 'wrong.mp3'
      var audio = new Audio(audioPath + fileName);
      audio.play();
      header.textContent = 'Sorry! That is incorrect';
    };
    this.element.appendChild(header);


    if (event.detail.counter.length < 6){
      const nextButton = document.createElement('button');
      nextButton.id = 'next-btn';
      nextButton.textContent = "Next question!";
      this.element.appendChild(nextButton);
      nextButton.addEventListener('click', (event) => {
        event.preventDefault();
        PubSub.publish('ResultView:next-question', 1);
      })
    } else {
      const resultButton = document.createElement('button');
      resultButton.id = 'result';
      resultButton.textContent = "RESULTS!";
      this.element.appendChild(resultButton);
      const results = event.detail;
      resultButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(results);
        PubSub.publish('ResultView:last-question-answered', results)
      })

    }
  }
)
};

ResultView.prototype.render = function (answerObj) {
  const answerText = answerObj.answer;
  const answerImg = answerObj.image;

  const correctDiv = document.createElement('div');
  correctDiv.id = 'correct-result';

  const resultP = document.createElement('p');
  resultP.textContent = answerText;
  resultP.id = 'correct-text';

  const img = document.createElement('img');
  img.src = answerImg;
  img.id = 'correct-img';

  correctDiv.appendChild(resultP);
  correctDiv.appendChild(img);

  this.element.appendChild(correctDiv);
};


module.exports = ResultView;
