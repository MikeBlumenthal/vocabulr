const Chart = require('chart.js');
const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(element){
  this.element = element;
  // this.counter = [];MOVED
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Answer:answer-selected', (event) => {
    this.element.innerHTML = '';
    const header = document.createElement('h2');
    if (event.detail.correct) {
      header.textContent = 'You were correct!';
      // this.counter.push(1); MOVED
    } else {
      header.textContent = 'Sorry! That is incorrect';
      // this.counter.push(0); MOVED
    };
    this.element.appendChild(header);

    // this.progressBar(); MOVED

    if (event.detail.counter.length < 6){
      const nextButton = document.createElement('button');
      nextButton.id = 'next-question';
      nextButton.textContent = "Next question!";
      this.element.appendChild(nextButton);
      nextButton.addEventListener('click', (event) => {
        event.preventDefault();
        PubSub.publish('ResultView:next-question', 1);
      })
    } else {

      const canvas = document.createElement('canvas');
      canvas.id = 'progress-chart';
      // canvas.style.height = '100px';
      // canvas.style.width = '100px';
      this.element.appendChild(canvas);

      const ctx = document.getElementById("progress-chart");
      const arrayRightWrong = [];
      arrayRightWrong.push(event.detail.counter.filter(x => x === 1).length);
      arrayRightWrong.push(event.detail.counter.filter(x => x === 0).length);
      console.log(arrayRightWrong);
      const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ["Correct", "Incorrect"],
          datasets: [{
            data: arrayRightWrong,
            backgroundColor: ['green', 'red'],
            borderColor: ['darkgreen', 'crimson'],
            borderWidth: 1
          }],
        },
        options: {}
      })
    }



    // const wellDone = document.createElement('h3');
    // const score = this.counter.filter(score => score > 0).length;
    // wellDone.textContent = `Congratulations! You finished the round with a score of ${score} out of 6!`;
    // this.element.appendChild(wellDone);
    // const requestH = new Request('http://localhost:3000/api/history');
    // const historyObj = {category: '', results: this.counter}
    // // need to pass in category from previous view
    //       requestH.post(historyObj);
    //       console.log(historyObj);
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
//MOVED FUNCTION BELOW TO ANSWER MODEL
// ResultView.prototype.progressBar = function () {
//   const targetBox = document.querySelector(`#box${this.counter.length}`);
//   let resultCopy = this.counter.map(x => x);
//   let result = resultCopy.pop();
//   if (result === 1){
//     targetBox.setAttribute('style', 'background-color: green');
//   }else{
//     targetBox.setAttribute('style', 'background-color: red');
//   }
// };

module.exports = ResultView;
