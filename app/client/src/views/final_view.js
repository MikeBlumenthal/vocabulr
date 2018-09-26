const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
const Chart = require('chart.js');


const FinalView = function (headElement, bodyElement) {
  this.head = headElement;
  this.body = bodyElement;
  this.history = null;
  this.categories = null;
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
    this.getDatasets();
  })
}

//
// FinalView.prototype.dateFromObjectId = function (id) {
//   return new Date(parseInt(id.substring(0, 8), 16) * 1000);
// };


// FinalView.prototype.dateHistory = function () {
//   this.history.forEach( (obj) => {
//     const date = this.dateFromObjectId(obj._id);
//     obj.date = date;
//   })
// };

FinalView.prototype.getDatasets = function () {

  this.categories = this.history
  .map( (obj) => obj.category )
  .filter((value, index, array) => array.indexOf(value) === index);

  const data = [];
  this.categories.forEach( (category) => {
    const obj = {
      cat: category
    };
    const array = this.history
    .filter(obj => obj.category === category);

    const array2 = array
    .map( (obj) => obj.results
    .reduce( (a,b) => a + b) );
    obj.scores = array2;
    data.push(obj);
  })
  console.log(this.categories);
  console.log(data);
  this.renderGraph(data);
};

FinalView.prototype.renderGraph = function (data) {


    const canvas = document.createElement('canvas');
    canvas.id = 'history-chart';
    this.body.appendChild(canvas);

    const ctx = document.getElementById("history-chart");

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [
          {
          borderColor: '#BC4B51',
          borderWidth: 7,
          label: this.categories[0],
          data: data[0].scores,
          fill: false,
          pointStyle: 'circle',
          spanGaps: false
        }],
      },
      options: {}
    })
};

module.exports = FinalView;
