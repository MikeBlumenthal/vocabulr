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
  });
};

module.exports = ResultView;
