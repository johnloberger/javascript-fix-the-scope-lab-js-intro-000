var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}

function yourAnimal() {
<<<<<<< HEAD
  var animal = 'cat'
=======
  var animal = "cat"
>>>>>>> 12069931a9c065c5079991714e126f01817078b6
  return animal
}

function add2(n) {
  const two = 2
<<<<<<< HEAD
  return parseInt(n, 10) + two
=======
  return n + two
>>>>>>> 12069931a9c065c5079991714e126f01817078b6
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

<<<<<<< HEAD
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()
theFunk = theFunk()
=======
var theFunk = funkyFunction()()
>>>>>>> 12069931a9c065c5079991714e126f01817078b6
