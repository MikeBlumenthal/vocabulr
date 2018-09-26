const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
const Chart = require('chart.js');


const FinalView = function (headElement, bodyElement) {
  this.head = headElement;
  this.body = bodyElement;
  this.history = null;
  this.request = new Request('http://localhost:3000/api/history/');
}

FinalView.prototype.bindEvents = function(){
  PubSub.subscribe('ResultView:result', (event) => {
    this.head.innerHTML = '';
    this.body.innerHTML = '';
    this.renderPie(event.detail.counter);
    this.postProgress(event.detail.counter, event.detail.category);
    this.getHistory();
  })
}


FinalView.prototype.renderPie = function (counter) {

  const canvas = document.createElement('canvas');
  canvas.id = 'progress-chart';
  this.body.appendChild(canvas);

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
        backgroundColor: ['#65ab00', '#f24f4f'],
        borderWidth: 1
      }],
    },
    options: {
      legend: {
        display: false
      }
    }
  })
};


FinalView.prototype.postProgress = function (counter, category) {

  const historyObj = {
    category: category,
    results: counter
  };
  this.request.post(historyObj);
  console.log('Post attempted.');
};


FinalView.prototype.getHistory = function () {
  this.request.get()
  .then((response) => {
    this.history = response;
    this.dateHistory();
  })
}

FinalView.prototype.dateHistory = function () {
  this.history.forEach( (obj) => {
    const date = ObjectID(obj._id).getTimeStamp();
    obj.date = date;
  })
  console.log(this.history);
};

FinalView.prototype.renderGraph = function () {

};

module.exports = FinalView;
