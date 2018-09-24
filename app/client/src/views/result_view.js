const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(element){
  this.element = element;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Answer:answer-selected', (event) => {
    const correctness = Object.keys(event.detail)[0];
    this.element.innerHTML = '';
    const header = document.createElement('h2');
    if (correctness === 'correct') {
      header.textContent = 'Correct :D'
    } else {
      header.textContent = 'Incorrect :(('
    };

    this.element.appendChild(header);

    const hintButton = document.querySelector('#hint-btn');
    hintButton.style.visibility = 'hidden';

    const button = document.createElement('button');
    button.id = 'next-question';
    button.textContent = "Next question!";
    this.element.appendChild(button);
    button.addEventListener('click', (event) => {
      event.preventDefault();
      PubSub.publish('ResultView:next-question', 1);
      this.element.innerHTML = '';
    })
  });
};

module.exports = ResultView;
