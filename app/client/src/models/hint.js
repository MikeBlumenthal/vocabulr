// SHOULD THIS BE A VIEW?
const PubSub = require('../helpers/pub_sub.js');

const Hint = function() {

};

Hint.prototype.hideAnswer = function () {
  const hintBtn = document.querySelector('#hint-btn');
  hintBtn.bindEvents('submit', () => {
    const responseView = document.querySelector('#response-view');
    
  });
};
