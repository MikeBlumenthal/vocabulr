const PubSub = require('../helpers/pub_sub.js');
const Chart = require('chart.js');

const FinalView = function (headElement, bodyElement) {
  this.head = headElement;
  this.body = bodyElement;
}


FinalView.prototype.bindEvents = function(){
  PubSub.subscribe('History:data-posted', (event) => {
    this.head.innerHTML = '';
    this.body.innerHTML = '';
    const info = event.detail;
    this.yourScore(info.score);
    this.returnButton();
    this.graphTitle();
    this.renderGraph(info);
  })
}


FinalView.prototype.yourScore = function (array) {
  const scoreText = document.createElement('h3');
  const score = array.reduce( (a,b) => a + b );
  scoreText.textContent = `Your score this time was ${score} out of 6!`;
  this.head.appendChild(scoreText);
};


FinalView.prototype.returnButton = function () {
  const returnButton = document.createElement('button');
  returnButton.textContent = 'Try again!';
  returnButton.id = 'return';
  this.head.appendChild(returnButton);
  returnButton.addEventListener('click', (e) => {
    location.reload();
  });
};


FinalView.prototype.graphTitle = function () {
  const title = document.createElement('h3');
  title.textContent = `Your past results!`;
  this.head.appendChild(title);
};


FinalView.prototype.renderGraph = function (info) {

  Chart.defaults.global.defaultFontFamily = "'Amatic SC', cursive";
  Chart.defaults.global.elements.line.fill = false;
  Chart.defaults.global.defaultFontSize = 30;

  const canvas = document.createElement('canvas');
  canvas.id = 'history-chart';
  this.body.appendChild(canvas);

  const ctx = document.getElementById("history-chart");

  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [' ','less recent',' ','more recent',' '],
      datasets: [
        {
          borderColor: '#BC4B51',
          borderWidth: 7,
          label: info.categories[0],
          data: info.data[0].scores,
          pointStyle: 'circle',
          spanGaps: false
        },
        {
          borderColor: '#5B8E7D',
          borderWidth: 7,
          label: info.categories[1],
          data: info.data[1].scores,
          pointStyle: 'circle',
          spanGaps: false
        },
        {
          borderColor: '#F4A259',
          borderWidth: 7,
          label: info.categories[2],
          data: info.data[2].scores,
          pointStyle: 'circle',
          spanGaps: false
        },
        {
          borderColor: '#F4E285',
          borderWidth: 7,
          label: info.categories[3],
          data: info.data[3].scores,
          pointStyle: 'circle',
          spanGaps: false
        },
        {
          borderColor: '#8CB369',
          borderWidth: 7,
          label: info.categories[4],
          data: info.data[4].scores,
          pointStyle: 'circle',
          spanGaps: false
        }
      ],
    },
    options: {
      tooltips: {enabled: false},
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Score"
            },
            ticks: {
              min: 0,
              max: 7,
              callback: function(val) {
                if(val == 0 || val == 7) {
                  return null;
                }
                return Number.isInteger(val) ? val : null;
              }
            }
          }
        ],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "your previous rounds"
          }
        }]
      }
    }
  }
)
};




module.exports = FinalView;
