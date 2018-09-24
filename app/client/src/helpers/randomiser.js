const Randomiser = {
  randomise: function (array) {
    let currentIndex = array.length;
    let temporaryValue = null;
    let randomIndex = null;

    for( let i = array.length - 1; i >0 ; i--){
      randomIndex = Math.floor(Math.random() * array.length );
      temporaryValue = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }


    return array;
  }
}

module.exports = Randomiser;
