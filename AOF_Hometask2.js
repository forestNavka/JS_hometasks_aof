//Task1
function Tune(song, artist) {
    this.title = song;
    this.artist = artist;
}
Tune.prototype.concat = function () {
    return this.title + this.artist;
}

var tune1 = new Tune("Nothing else matter", "Metallica");
var tune2 = new Tune("Mutter", "Rammstein");
console.log(tune1.concat());
console.log(tune2.concat())

//Task2
function Tune(song, artist) {
    var title = song;
    var artist = artist;
    this.concat = function () {
        return title + artist;
    }
}
var tune1 = new Tune("Nothing else matter", "Metallica");
var tune2 = new Tune("Mutter", "Rammstein");
console.log(tune1.concat());
console.log(tune2.concat())

//Task3
Tune.prototype.addCategory = function(categoryName){
    this.categoryName = categoryName;
}
tune1.addCategory("Some category");
console.log(tune1);

//Task4
String.prototype.exclaim = String.prototype.exclaim || function () {
    var exclamedString = this + "!";
    console.log(exclamedString);
}

//Task5
function Book(title, author) {
    var _title = title;
    var _author = author;
    Book.prototype.getTitle = function () { return _title; };
    Book.prototype.getAuthor = function () { return _author; };
}

function TechBook(title, author, category) {
    Book.call(this, title, author);
    _category = category;
    TechBook.prototype = Object.create(Book.prototype);
    TechBook.constructor = TechBook;
    TechBook.prototype.getCategory = function () {
        return _category;
    }
}
//

class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
    getTitle(){
        return this.title;
    }
    getAuthor(){
        return this.author;
    }
}

class TechBook extends Book{
    constructor(title, author, category){
        super(title, author);
        this.category = category;
    }
    getCategory(){
        return this.category;
    }

    getBook(){
        return `${this.author} ${this.title} ${this.category}`;
    }
}

//Task6
var obj = { };
Object.defineProperty(obj, "id", { value : 1, writable : true});
Object.defineProperty(obj, "type", {value: "primary", enumerable : true});
Object.defineProperty(obj, "category",{
     get(){return this._category;}, 
     set(value){ this._category = value },
     configurable : true,
     enumerable: true } );
for(field in obj) { console.log(field);}

//Task7
var obj = {
    name : "Vasya",
    surname : "Petrenko"
}
Object.preventExtensions(obj);

//Task8
function Person(){
}
Person.prototype.setFirstName = function(firstName){
    this.firstName = firstName;
    return this;
}
Person.prototype.setLastName = function(lastName){
    this.lastName = lastName;
    return this;
}
var user = new Person().setFirstName("Vasya").setLastName("Petrenko"); 

//Task9
class TodoList{
 constructor(){
    this._taskList = [];
 }
 addTask(task){
    this._taskList.push(task);
 }
 showTasks(){
    this._taskList.forEach((task) => { console.log(`[${task.status}] ${task.name}`);});
 }

 removeTask(taskName){
   this._taskList.splice(this._taskList.findIndex((task) => { task.name === taskName}));
 }

 checkAsDone(taskName){
  this._taskList.find((task) => {task.name === taskName}).status = "completed";
 }

 sortTasks(){
   this._taskList.sort((function(task1, task2){
    let task1Name = task1.name.toLowerCase();
    let task2Name = task2.name.toLowerCase();
    if (task1Name > task2Name) return 1;
    if (task1Name < task2Name) return -1;
    return 0;
   }));
 }

 sortTasksDesc(){
   this.sortTasks();
   this._taskList.reverse();
 }

 clearTodoList(){
    this._taskList = [];
 }
}

//Task10
const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]; 
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
let Month = Months[mm - 1];
console.log([dd,mm,yyyy].join('.'));
console.log([dd, Month, yyyy].join(' '));

//Task11
let str = "15.03.2016";
[d, m, y] = str.split('.');
let date = new Date(y, m - 1, d);

//Task12
let today = new Date();
let tomorrow = new Date(today.setDate(today.getDate() + 1));

today = new Date();
let firstDayOfMonth = new Date(today.setDate(1));

today = new Date();
let firstDayOfNextMonth = new Date(today.getFullYear(), today.getMonth()+1, 1);
let lastDayOfMonth = new Date(firstDayOfNextMonth.valueOf() - 24*60*60*1000);

//Task13
let sum = 0;
console.time('sum');
for (var i=1; i <= 1000; i++;){
    sum += i;
}
console.timeEnd('sum');//32ms

//Task14
let today = new Date();
let newYear = new Date(today.getFullYear() + 1, 0, 1);
let remainingDays = Math.floor((newYear.valueOf() - today.valueOf())/(24*60*60*1000))