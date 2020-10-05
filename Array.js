//forEach()
const arr1 = [32, 123, 123, 21, 22];
var sum = 0;
var obj = {};
arr1.forEach((item) => {
  sum += item;
});
arr1.forEach((item, index, arr) => {
  document.write(arr[index] + "<br>");
});
arr1.forEach((value) => {
  if (obj[value]) {
    obj[value]++;
  } else {
    obj[value] = 1;
  }
});

console.log(obj);
//forEach() is a function for Arr, resolve some problem
//about the sum, count the amount of value appear in array
//forEach() has 3 parameters: value, index, array

//Map()
const arr2 = [1, 2, 3, 4, 5];
const doubleArrItem = arr2.map((item) => {
  return item * 2;
});
const whore = [
  //arr with 3 objects,
  {
    name: "Big boodies",
    price: 300,
    count: 4,
  },
  {
    name: "Medium Boodies",
    price: 220,
    count: 6,
  },
  {
    name: "Small Boodies",
    price: 120,
    count: 30,
  },
];
const showTotal = whore.map(
  (item) => ({
    name: item.name,
    total: item.price * item.count,
  })
  //return a new obj with two parameters: name and total
);
document.write(doubleArrItem);
console.log(showTotal);

//Filter()

const arr4 = [1, 2, 3, 4, 5, 2, 1, 2, 5, 4, 2, 2, 5, 7, 8, 6, 2];
const newArr4 = arr4.filter((item) => item > 2);
//filter() is used to filter all them item you want to filter
//by give item in array test for some condition to choose the
//item that u need
const newArr44 = arr4.filter(test);

function test(value, index, arr) {
  return arr.indexOf(value) === index;
}
//this is an interesting way to filter the number that
//appear at least 2 times, arr.indexOf(value) equal an
//index and that will be stored, when value appears more
//than one time the index of that value is not equal the index
//that stored before
//briliant
document.write("<br>" + newArr4 + "<br>");
//return array that is satisfied for item > 2
document.write(newArr44 + "<br>");
//return array that removes duplicated array
//Reduce()
const arr55 = [1, 2, 5, 4, 3];
const newArr5 = arr55.reduce((acc, value) => acc + value);
document.write(newArr5 + "<br>");
//Reduce() has 2 parameters:callback(), initial value(default value: 0)
//callback has 4 parameters:accumulator(potential value),value, index, arr
//when return value to callback function, this value will be stored
//in accumulator value
const max5 = arr55.reduce((acc, value) => {
  if (acc > value) {
    return acc; //this acc will be stored in acc
  } else {
    return value; // value will be stored in acc
  }
}, -Infinity); //-Infinity check that acc is only an integer,
//not a minus number
document.write(max5 + "<br>");

const arr51 = [
  {
    name: "Nguyen Manh Duc",
    count: 150,
    price: 270,
  },
  {
    name: "Vo Huynh Ngoc Phung",
    count: 65,
    price: 1128,
  },
];
const TotalValue = arr51.reduce((acc, value) => {
  return (acc = value.count * value.price);
});
document.write(
  "Tong gia tri cua khoa hoc cua 2 nguoi la: " + TotalValue + "<br>"
);

//slice()
//slice() has 2 parameters: begin index and last index
const arr6 = [1, 2, 3, 4, 5];
const newArr6 = arr6.slice(0, 2); //begin 1 end 2 not include 3
const newArr61 = arr6.slice(1); //start with 2 and go to the last number in arr
const newArr62 = arr6.slice(-4); //begin with 2
document.write(newArr6 + "<br>");

//splice()
//splice() has 3 parameters: starting index u want to begin,
//the amount of item u want to delete and the last
//parameter is the number u want to add to array
const arr7 = [1, 2, 3, 4, 5];
arr7.splice(1, 3); //remove start with 2 end remove 3 item
arr7.splice(1, 0, 6, 7, 8, 9); //start with number of index 1, remove nothing
//and add 6,7,8,9 to array
document.write(arr7 + "<br>");

//sort()
//sort() is a function that is used to arrange the position
//by alphabet(especially string)
const arr8 = ["Nguyen", "Tay", "Anh", "Giang"];
const show81 = arr8.sort();
document.write(show81 + "<br>");
const arr81 = [1, 3, 2, 1, 5, 7, 5, 9, 7, 0];
//to arrange number of the array u need to use callback
//function called compareFunction to compare two number
//stand with each other
const show82 = arr81.sort(compareFunction);
function compareFunction(a, b) {
  return a - b;
  //result < 0 => a goes first
  //result === 0 => do nothing
  //result > 0 => b goes first
}
document.write(show82 + "<br>");

const arr82 = [
  {
    name: "Solo",
    age: 12,
  },
  {
    name: "Roger",
    age: 54,
  },
  {
    name: "Luther",
    age: 33,
  },
];

const show83 = arr82.sort((a, b) => {
  return a.age - b.age;
});
document.write(show83[1].name + "<br>");

//concat()
//connect and add array together
const arr9 = [1, 2, 3];
const arr91 = [4, 5, 6];
const arr92 = [7, 8, 9];
const arr93 = arr9.concat(arr91, arr92, 10, 11, 12);
document.write(arr93 + "<br>");

//fill()
//fill is used to change the value in array
//fill has 3 parameters: value u want to change
//and starting, ending index
const arr10 = [1, 2, 3, 4, 5, 6];
document.write(arr10.fill(0, 0, 3) + "<br>");
//function is used to fill array number count from 1 -> 9
function fillNumber(n) {
  return Array(n) //create an array with 10 element
    .fill(0) //fill array with value = 0
    .map((value, index) => index + 1); //fill array from 1 -> 9
}
document.write(fillNumber(9) + "<br>");

//includes()
//check the item be in array or not
//parameter is a value that u want to check
const arr11 = [1, 2, 3, 4, 5, 6, 7, 8];
if (arr11.includes(1)) {
  document.write("This is true" + "<br>");
} else {
  document.write("try another value" + "<br>");
}
//join()
//connect all items in array and make a string
//that is made by them
const arr12 = ["Nguyen Manh Duc", 23, "Entreprenour"];
document.write(arr12.join("| ") + "<br>");

//reverse()
const arr13 = [1, 2, 3, 4, 5];
document.write(arr13.reverse() + "<br>");
const str = "Nguyen Manh Duc";
document.write(str.split("").reverse().join("") + "<br>");
//split() make string become array
//reverse() is used for array and finally join all
//items in array into string

//push(), pop(), unshift(), shift()
//push(): add st to array into the last index
const arr14 = [1, 2, 3, 4, 5];
const show141 = arr14.push(6, 7, 8, 9);
document.write(arr14 + "<br>");
document.write(show141 + "<br>"); //show 9
//pop(): delete the item in the last index from array
const show142 = arr14.pop();
document.write(arr14 + "<br>"); //9 doesn't exist
document.write(show142 + "<br>"); //show 9
//unshift(): add st into the beginning index from array
const show143 = arr14.unshift(0); //add 0
document.write(arr14 + "<br>");
document.write(show143 + "<br>"); //show total length of array
//shift(): remove the begining item from array
const show144 = arr14.shift();
document.write(arr14 + "<br>"); //no 0 exist
document.write(show144 + "<br>"); //show 0

//indexOf()
//check index of item from an Array
const arr15 = ["Lether", "James", "Bush", "James"];
//arr15.push("Max");Make for the situation that checkWrongIndex > -1
const checkRightIndex = arr15.indexOf("Lether");
const checkWrongIndex = arr15.indexOf("Max");
document.write(checkRightIndex + "<br>"); //return 0
document.write(checkWrongIndex + "<br>"); //return -1
arr15[checkRightIndex] = "Josh"; //change Lether to Josh
document.write(arr15 + "<br>");
if (checkWrongIndex > -1) {
  document.write("We did it!" + "<br>");
} else {
  document.write("Opps..Wrong item!" + "<br>");
}
const showtheLastIndexOfItem = arr15.lastIndexOf("James");
document.write(arr15.indexOf("James") + "<br>");
document.write(showtheLastIndexOfItem + "<br>");

//every()
//that is used to check every single item from an array
//followed the condition we choose and return result with T
//or false
//every has 3 parameters: item, indx, arr
const arr16 = [1, 2, 3, 4, 5, 6, "A"];
//check an array has number item or not
document.write(arr16.every((item) => Number.isInteger(item)) + "<br>");
const arr161 = [
  {
    name: "Nguyen Tay",
  },
  {
    name: "Jack Burn",
  },
  {
    lastName: "Thomas",
  },
];
//check properties of all items
//!==undefined == yes
const check161 = arr161.every((item) => item.name !== undefined);
document.write(check161 + "<br>");
const arr162 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//check all item is Array or not
const check162 = arr162.every((item) => Array.isArray(item));
document.write(check162 + "<br>");

//some() (or)
//check all items with condition, if one of them is satisfied
//with that condition => return true
const arr171 = [1, 2, 3, 4, 5, 6];
const show171 = arr171.some((item) => item < 2);
document.write(show171 + "<br>");
const arr172 = [
  {
    name: "Nguyen Duc",
    age: 23,
  },
  {
    name: "Nguyen Tai",
    age: 55,
  },
];
//check a person that has age >= 18
const show172 = arr172.some((item) => item.age >= 18);
document.write(show172 + "<br>");

//find()
//help to show info of st that u wat to search for
//will return whole thing of item
const arr181 = [
  {
    name: "Henry",
    age: 23,
    job: "entrepreneur",
  },
  {
    name: "Joe",
    age: 39,
    job: "painter",
  },
];
const show181 = arr181.find((item) => item.name === "Henry");
//return underfined when info that u want to find
//is not correct
console.log(show181); //return whole thing of item
//findIndex() return index
const arr182 = [1, 2, 3, 4, 5];
const showIndex182 = arr182.findIndex((number) => number === 4);
document.write(showIndex182 + "<br>");

//from() and Set()
//from() is used to convert string, set into array
//from() has 2 parameters: input and mapFunc implement continued task
//Set() is a class that makes obj unique and all values of
//obj only occur once
const str191 = "123456789";
const convert191 = Array.from(str191, (item) => Number(item));
const check191 = typeof convert191[0];
//all items of convert191 is string before adding
//mapFunc to parameter 2nd. After that return number
//*typeof array is object
document.write(check191 + "<br>");

//duplicated number of array
const arr192 = [1, 2, 3, 2, 1, 2, 3, 4, 2, 1, 8, , 6, 7, 8, 9];
const convert192 = Array.from(new Set(arr192));
//convert Array to Set with new Set() and Array and convert
//set to array again
document.write(convert192 + "<br>");

//flat()
//convert nested array into flatted array
const arr20 = [1, [2, [3, [4]]]];
const show201 = arr20.flat(2)
console.log(show201)//show [1,2,3,[4]]
const show202 = arr20.flat(Infinity)
console.log(show202)//show [1,2,3,4]