const Request = require('../helpers/request.js');

const HintView = function(){

};

HintView.prototype.bindEvents = function () {
  const hintBtn = document.querySelector('#hint-btn');
  hintBtn.addEventListener('click', () => {
    hintBtn.disabled = true;
    hintBtn.textContent = 'Hint used';
    this.giveHint();
  });
};

HintView.prototype.giveHint = function () {
  const answerID = document.querySelector('.answer').id;
  const request = new Request('http://localhost:3000/api/questions');
  request.getOne(answerID)
    .then((response) => {
      const incorrectAnswer = response[0].answers.find((answer) => { // Change to filter to get multiple
        return answer.correct === false;
      });

      const hideAnswer = document.querySelector(`.answer[value="${incorrectAnswer.answer}"]`)
      hideAnswer.style.visibility = 'hidden';
    });
};

module.exports = HintView;
