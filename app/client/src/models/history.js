const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const HistoryData = function () {
  this.request = new Request('http://localhost:3000/api/history/');
  this.history = null;
  this.categories = null;
  this.data = [];
  this.score = null;
}

HistoryData.prototype.bindEvents = function() {
  PubSub.subscribe('ResultView:result', (event) => {
    this.score = event.detail.counter;
    this.postProgress(event.detail.counter, event.detail.category);
    this.doHistory();
  })
}


HistoryData.prototype.postProgress = function (counter, category) {
  const historyObj = {
    category: category,
    results: counter
  };
  this.request.post(historyObj);
};


HistoryData.prototype.doHistory = function () {
  this.request.get()
  .then((response) => {
    this.history = response;
    this.getDatasets();
    PubSub.publish('History:data-posted', this.createPayload() );
  })
}


HistoryData.prototype.getDatasets = function () {
  this.categories = this.history
  .map( (obj) => obj.category )
  .filter((value, index, array) => array.indexOf(value) === index);

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
    this.data.push(obj);
  })
};

HistoryData.prototype.createPayload = function () {

  this.data.forEach( (data) => {
    if (data.scores.length > 5){
      const deleteCount = (data.scores.length - 5);
      data.scores.splice( 0, deleteCount);
    }
  })
  
  const payload = {
    score: this.score,
    categories: this.categories,
    data: this.data
  };
  return payload;
};


module.exports = HistoryData;
