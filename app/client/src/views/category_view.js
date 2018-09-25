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
  const instructions = document.createElement('h2');
  instructions.textContent = 'Pick a category!';
  this.element.appendChild(instructions);
  this.categories.forEach( (category) => {
    this.makeButton(category);
  })
}

CategoryView.prototype.makeButton = function (category) {
  const catButton = document.createElement('button');
  catButton.classList.add('category-btn')
  catButton.textContent = `${category.toUpperCase()}`;
  catButton.value = category;
  this.element.appendChild(catButton);
  catButton.addEventListener('click', (event) => {
    PubSub.publish('CategoryView:category-selected', event.target.value )
  })
};

module.exports = CategoryView;
