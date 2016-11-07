//Task1

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//all members
let sum = a.reduce((prev, next) => {return prev+next;});

//even members
sum = a.filter((el) => {return el % 2 === 0})
       .reduce((prev, next) => { return prev+next });
//or
sum = a.reduce((prev, next) => { return (next % 2 === 0) ? prev+next : prev }, 0);

//n members
let n = 6;
//first n
sum = a.slice(0, n).reduce((prev, next) => { return prev+next });
//last n
sum = a.slice(-n).reduce((prev, next) => { return prev+next });

//Task2

a = [' cherries ', ' oranges', ' apples ', 'bananas '];
//new array
let b = a.map((elem) => {return elem.trim();})

//changed array
a.forEach((elem, index, arr) => {arr[index] = elem.trim();});

//Task3
var testResult = [0, 1, 2, 3][3, 2, 1, 0] + "Fun"; //"OFun"
//I think the [][] statement is like array[index] where array = [0, 1,2,3] and index is the last element of the second array (because the list of values devided
// by coma returns the last one )- 0, so we have  [0,1,2,3][0] - 0 which are concatenated with 'Fun'

//Task4
a = [1, 3, 5, 7, 9];
b = [2, 4, 6 ,8 ,10];
let elem = 5;
let result = b[a.indexOf(elem)];

//Task5
a = [1, 2, 3, 4, 5];
b = [2, 4];
result = a.filter((elem) => {return b.indexOf(elem) === -1;}); 

//Task6
a = ['1', '2', '3', '4', '5'];
result = a.map((elem) => {return elem + elem;});

//Task7
let arr= Array.from([,,,,,,], (v, k) => {return (k % 2 === 0) ? k : k -1; });//[0,0,2,2,4,4]
let arr1 = arr.filter((elem, index) => {return arr.indexOf(elem) === index;});

//Task8
let animals = ["dog","cat","seal","elephant","walrus","lion"]; 
animals.splice(animals.indexOf("elephant"), 1);

//Task9
arr= Array.from([,,,,,,,,,,], (v, k) => {return k;});
arr.sort(() => {return Math.floor(Math.random() * 3) - 1;});

//Task10
let a = "first", b = "second";
let ar1 = [];
ar1.push(a, b);
[b, a] = ar1;
 
 ...

 //Task14
 //Method weekdays from the moment.js library returns the list of wekdays names for the current locale. Use it for creation enume like object,
 //where weekday name will be property name and weekday number will be this property value. Based on this object generate the array of {value :, text :} 
 //objects (for usage in select dropdown for example);
 let daysEnum = {};
 moment.locale('en');
 moment.weekdays().forEach((value, index) => {daysEnum[value] = index});
 let options = daysEnum.keys().map((key) => {return {value : daysEnum[key], text : key};});