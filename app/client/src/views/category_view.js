const PubSub = require('../helpers/pub_sub.js');

const CategoryView = function (element) {
  this.element = element;
  this.categories = null;
}

CategoryView.prototype.bindEvents = function () {
  PubSub.subscribe('Question:all-data', (event) => {
    const allQuestions = event.detail;
    const categoryArray = [];
    for (question of allQuestions) {
      categoryArray.push(question.category);
    }

    function unique(value, index, array){
      return array.indexOf(value) === index;
    }

    this.categories = categoryArray.filter(unique);
    this.createCategoryOptions();
  })
};

CategoryView.prototype.createCategoryOptions = function () {
  this.categories.forEach( (category) => {
    this.makeButton(category);
  })
}

module.exports = CategoryView;
