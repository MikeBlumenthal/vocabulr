const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(element){
  this.element = element;
  this.counter = [];
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Answer:answer-selected', (event) => {
    const correctness = Object.keys(event.detail)[0];
    this.element.innerHTML = '';
    const header = document.createElement('h2');
    if (correctness === 'correct') {
      header.textContent = 'Correct :D';
      this.counter.push(1);
    } else {
      header.textContent = 'Incorrect :(';
      this.counter.push(0);
    };
    this.element.appendChild(header);

    this.progressBar();

    const hintButton = document.querySelector('#hint-btn');
    hintButton.style.visibility = 'hidden';

    if (this.counter.length < 6){
      const nextButton = document.createElement('button');
      nextButton.id = 'next-question';
      nextButton.textContent = "Next question!";
      this.element.appendChild(nextButton);
      nextButton.addEventListener('click', (event) => {
        event.preventDefault();
        PubSub.publish('ResultView:next-question', 1);
        this.element.innerHTML = '';
      })
    } else {
      const wellDone = document.createElement('h3');
      const score = this.counter.filter(score => score > 0).length;
      wellDone.textContent = `Congratulations! You finished the round with a score of ${score} out of 6!`;
      this.element.appendChild(wellDone);
    }
  });


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
