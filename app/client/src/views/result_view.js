const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Answer:answer-selected', (event) => {
    console.log(event.detail);
  });
};

module.exports = ResultView;
