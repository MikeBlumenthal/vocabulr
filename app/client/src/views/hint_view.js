const Base64 = require('../helpers/base64.js');
const HintView = function(){

};

HintView.prototype.bindEvents = function () {
  const hintBtn = document.querySelector('#hint-btn');
  hintBtn.addEventListener('click', () => { // could randomize? always removes first value
    this.giveHint();
  });
};

HintView.prototype.giveHint = function () {
  const incorrectAnswer = document.querySelector(`.answer[correct="ZmFsc2U="]`);
  incorrectAnswer.style.visibility = 'hidden';
};

module.exports = HintView;
