const PubSub = require('../helpers/pub_sub.js');
const Chart = require('chart.js');

const FinalView = function (element) {
  this.element = element
}

FinalView.prototype.bindEvents = function(){
  PubSub.subscribe('ResultView:last-question-answered', (event) => {
    this.element.innerHTML = '';
    this.renderPie(event.detail);
  })
}


FinalView.prototype.renderPie = function (counter) {

const canvas = document.createElement('canvas');
canvas.id = 'progress-chart';
// canvas.style.height = '100px';
// canvas.style.width = '100px';
this.element.appendChild(canvas);

const ctx = document.getElementById("progress-chart");
const arrayRightWrong = [];
arrayRightWrong.push(counter.filter(x => x === 1).length);
arrayRightWrong.push(counter.filter(x => x === 0).length);
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
};

module.exports = FinalView;
