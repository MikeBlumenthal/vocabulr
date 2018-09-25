const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const ResultView = function(element){
  this.element = element;
  this.counter = [];
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Answer:answer-selected', (event) => {
    const correctness = Object.keys(event.detail)[0];
    this.element.innerHTML = '';
    const header = document.createElement('h2');
    const request = new Request('http://localhost:3000/api/questions');
    let id = null;
    if (correctness === 'correct') {
      header.textContent = 'You were correct!';
      this.counter.push(1);
      id = event.detail.correct.id;
      request.getOne()
    } else {
      header.textContent = 'Sorry! That is incorrect';
      this.counter.push(0);
      id = event.detail.incorrect.id;
    };
    this.element.appendChild(header);

    request.getOne(id).then( (response) => {
      const correctAnswer = response[0].answers.find(answer => answer.correct === true);
      this.render(correctAnswer);
    });


    this.progressBar();

    if (this.counter.length < 6){
      const nextButton = document.createElement('button');
      nextButton.id = 'next-question';
      nextButton.textContent = "Next question!";
      this.element.appendChild(nextButton);
      nextButton.addEventListener('click', (event) => {
        event.preventDefault();
        PubSub.publish('ResultView:next-question', 1);
      })
    } else {
      const wellDone = document.createElement('h3');
      const score = this.counter.filter(score => score > 0).length;
      wellDone.textContent = `Congratulations! You finished the round with a score of ${score} out of 6!`;
      this.element.appendChild(wellDone);
      const requestH = new Request('http://localhost:3000/api/history');
      const historyObj = {category: '', results: this.counter}
// need to pass in category from previous view
      requestH.post(historyObj);
      console.log(historyObj);
    }
  });
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

ResultView.prototype.progressBar = function () {
  const targetBox = document.querySelector(`#box${this.counter.length}`);
  let resultCopy = this.counter.map(x => x);
  let result = resultCopy.pop();
  if (result === 1){
    targetBox.setAttribute('style', 'background-color: green');
  }else{
    targetBox.setAttribute('style', 'background-color: red');
  }
};

module.exports = ResultView;
