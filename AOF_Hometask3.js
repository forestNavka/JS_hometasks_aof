//Task1
conc(1, 1);
conc('1', '1');
function conc(a, b) {
    var str = "";
    str = str + a + b;
    return str;
}

//Task2
comp("abc", "abc"); //comp is not a function
var comp = function (a, b) {
    return (a === b) ? 1 : -1;
};
comp("abc", "abc");
comp("abC", "abc");

//Task3
//<button id="btn">Button</button>


var btn = document.getElementById("btn");
btn.addEventListener("click", () => {console.log('message in console'}));

//Task4
var fibo = function fibbonachi(i){
    return (i < 2) ? i : fibbonachi(i-1)+fibbonachi(i-2);
};

var factorial = function factor(n){
     return (n === 1) ? 1 : n * factor(n - 1);
};

//Task5
var paramsStr = prompt("Enter parameters divided by coma");
var params = argsStr.split(',');
var body = prompt("Enter function body");
var func = new Function(...params, body);
var argsStr = prompt("Enter parameters values divided by coma");
var args = argsStr.split(',');
alert(func(...args));

//Task6
var arr = [1,8,3,5,12,7,9,11];
var arr2 = arr.map(el => el * el)
              .filter(el => el < 100)
              .sort((a,b) => a -b);

//Task7
(function conc(a, b) {
    var str = "";
    str = str + a + b;
    return str;
})(1,1);

//task8
var parts = function (){
return [...arguments].map( arg => { 
            var firstSymbolIndex = arg.indexOf(':');
            var secondSymbolIndex = arg.indexOf('.', firstSymbolIndex);
            return  arg.substring(firstSymbolIndex +1, secondSymbolIndex);
    });
};
parts("This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas.",
    "This is the second sentence. This is a sentence with a list of items: red, blue, yellow, black.");


//Task9
var find = function(testString, test){
 if (!test) test = testString;
 return testString.indexOf(test);
};
find('abc', 'b');
find('abc');
find('abc', 'd');
find('abc', 'a', 'b');

//Task10
function str(value){
    if (str.isNonEmptyString(value)){
        alert("String is non empty"); 
    } else{
        alert("String is  empty");
    }
}
str.isNonEmptyString = function(value){
    return typeof value === "string" && value;
};

//Task11
function toConsole(param){
    console.log(param);
}
function toAlert(param){
    alert(param);
}
function splitToWords(msg, callback){
    var words = msg.split(' ');
    if (!callback) return words;
    words.forEach(word => callback(word));
}
splitToWords("My very long text msg", toConsole); 
splitToWords("My very long text msg", toAlert);
console.log( splitToWords("My very long text msg") );

//Task12
function copyright (){
    var copysighn = "\u00A9";
    return function (str){
        return copysighn + str;
    };
}
console.log( copyright()("EPAM") ); 

//Task13
function copyright(copysighn){
    return function(str){
        return copysighn + str;
    };
}
console.log( copyright("\u00A9")("EPAM") ); 

//Task14
var employee = {
    name : 'Anna',
    work : function() {
        return `I am ${this.name}. I am working.`;
    }
};

//Task15
var person = {
    name : 'Vasya'
};
employee.work.call(person);

//Task16
var memo = {};
var fiboMemo = function fibonachi(n){
     if (n in memo) return memo[n];
     var result = (n < 2) ? n : fibonachi(n - 1) + fibonachi(n - 2);
     memo[n] = result;
     return result;
    };

console.time('fibomemo'); console.log(fiboMemo(100)); console.timeEnd('fibomemo'); //15ms
console.time('fibomemo'); console.log(fiboMemo(20)); console.timeEnd('fibomemo'); //62822ms
