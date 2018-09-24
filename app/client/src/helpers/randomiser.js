const Randomiser = {
  randomise: function (array) {
    newArray = array.sort( () => {return 0.5 - Math.random() } );
    return newArray;
  }
}
module.exports = Randomiser;
