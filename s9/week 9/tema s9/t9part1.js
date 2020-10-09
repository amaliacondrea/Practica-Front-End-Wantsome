// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

// const func1 = () => {
//     console.log('1')
//   }

//   const func2 = () => {
//       console.log('2')
//   }

//   const func3 = () => {
//       console.log('3')
//   }

//   const func4 = () => {
//       console.log('4')
//   }

//   const func5 = () => {
//       console.log('5')
//   }


//   func1();
//   func2();
//   func3();
//   func4();
//   func5();


/*----------------------------------------*/



const func1 = () => {
  setTimeout(function () {
    console.log('1')
  }, 400);
}

const func2 = () => {
  setTimeout(function () {
    console.log('2')
  }, 200);
}
const func3 = () => {
  console.log('3')
}

const func4 = () => {
  setTimeout(function () {
    console.log('4')
  }, 600);
}

const func5 = () => {
  console.log('5')
}


func1();
func2();
func3();
func4();
func5();

// 1

function customMap(array, callback) {
  var arr = [];
  for (var index in array) {
    arr.push(callback(array[index]));
  }
  return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function increment(i) {
  return i + 1;

}

console.log(customMap(randomArray, increment));  // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
function double(d) {
  return d * 2;
}

console.log(customMap(randomArray, double));  // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
function square(sqr) {
  return sqr * sqr;
}
console.log(customMap(randomArray, square));  // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

// 2

/*
// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.*/

var filter = function (array, callback) {
  var filteredArray = [];
  for (var i = 0; i < array.length; i++) {
    var elem = array[i];
    if (callback(elem)) {
      filteredArray.push(elem);
    }
  }
  return filteredArray;
};

/*
Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )
*/

var numbers = [1, 7, -7, 10, 8, 9, 24, 35, -15];

function isPositive(n) {
  return n >= 0;

}
console.log(filter(numbers, isPositive));

function isNegative(n) {
  return n < 0;
}
console.log(filter(numbers, isNegative));

function isOdd(n) {
  return n % 2 === 1;
}
console.log(filter(numbers, isOdd));

function isEven(n) {
  return n % 2 === 0;
}
console.log(filter(numbers, isEven));

function divisibleBy3(n) {
  return n % 3 === 0;

}
console.log(filter(numbers, divisibleBy3));


// 3 

/*
Write a function named multipleCallbacks that accepts 3 arguments:
	- an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/
var obj = {
  status: ["success", "error"]
}

function multipleCallbacks(obj, callback1, callback2) {

  if (Object.values(obj)[0] === "success") {
    callback1();
  } else if (Object.values(obj)[0] === "error") {
    callback2();
  } else {
    console.log("status not found");
  }
}
function callback1() {
  console.log("SUCCESS");
}
function callback2() {
  console.log("ERROR");
}
multipleCallbacks("success", callback1, callback2);
multipleCallbacks({ status: "error" }, callback1, callback2);