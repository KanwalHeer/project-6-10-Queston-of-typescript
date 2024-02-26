//              :______10 Questions Of Typescript_____:
/*
These exercises cover the fundamentals of TypeScript variables and data types, including declaration, type inference, type annotations, and working with arrays. They should help users become familiar with the basics of TypeScript's type system.

1. Write a TypeScript program that declares a variable `name` and assigns it a string value. Also declare a variable `age` and assign it a number value. Finally print the values of name and age.
    

2. Write a TypeScript program that declares variables using let, const, and var. Then, describe how each declaration type behaves with respect to scoping and mutability.


3. Write a TypeScript program that declares variables of the following data types: number, string, boolean, and undefined. Assign values to them and perform basic operations.


4. Write a TypeScript program that declares a variable as a number and then tries to assign a string to it to see type checking in action.


5. Write a TypeScript program that declares a variable without specifying its type and shows how TypeScript infers the type based on the assigned value.


6. Write a TypeScript program that converts a variable of one type to another using type assertions and type conversion functions like parseInt().


7. Write a TypeScript program that creates type aliases for complex data types such as objects or custom types. Use them to define variables and explain how they improve code readability.


8. Write a TypeScript program that declares an array of a specific data type. It will demonstrates common array operations like adding elements, removing elements, and iterating through the array.


9. Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green', 'White' and Blue. Create a variable 'selectedColor' of type 'Color' and assign it one of the enumeration values.


10. Write a TypeScript program that declares a variable 'isNull' and assigns it null. You should also declare a variable called 'isUndefined' and assign it an undefined value. */
//                      :_____SOLUTIONS____:
//ANSWER # 1;
var myName = "Kanwal Heer";
var age = 23;
console.log("My name is ".concat(myName, " and my age is ").concat(age));
//                **********************
//ANSWER # 2; 
// let:
var myNumber = 23456789;
if (true) {
    var myNumber_1 = 98765432;
}
console.log(myNumber);
// var:
function my_school() {
    var mySchool = "ghITc";
    if (mySchool) {
        var mySchool = "fhss";
    }
    console.log(mySchool);
}
my_school();
// const:
var myId = "heeri";
//const myId:string = "heer"=>const can not be change
console.log(myId);
//     ***************************
//ANSWER # 3;
var myString = "string is a data type";
var my_Number = 4;
var myBoolean = true;
var myUndefined = undefined;
//simple opretations:
var my_Number1 = 4;
var result = my_Number + my_Number1;
console.log(result);
var stringResult = myString + "and i really like it";
console.log(stringResult);
var booleanResult = myBoolean && true;
console.log(booleanResult);
if (myUndefined === undefined) {
    console.log("myUndefined is undefined");
}
else {
    console.log("myUndefined is defined");
}
//        ****************************
//ANSWER # 4;
var numberType = 6;
//numberType = "hello 6":Error:=> we cant assign it another type value it shows error
console.log(numberType);
//      ********************************************
//ANSWER # 5;
var notType = 100;
console.log(notType + "is" + typeof notType);
// notType = "hello heeri"=>we can  assign it value only one time.
//                  **********************
//ANSWER # 6;
var num1 = 100;
console.log("".concat(num1, " is ").concat(typeof num1));
var str1 = num1.toString();
console.log("'".concat(str1, "' is ").concat(typeof str1));
var str2 = "200";
console.log("'".concat(str2, "' is ").concat(typeof str2));
var num2 = parseInt(str2);
console.log("".concat(num2, " is ").concat(typeof num2));
var student1 = {
    name: "kanwal",
    age: 23,
    email: "kanwal@gmail.com"
};
var student2 = {
    name: "Heer",
    age: 22,
    email: "heer@gmail.com"
};
function findInfoStudent(student) {
    console.log(student.name);
    console.log(student.age);
    console.log(student.email);
}
var point1 = {
    x: 0,
    y: 0
};
function findDistance(point1, point2) {
    var dx = point1.x - point2.x;
    var dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
}
console.log("student one");
console.log(student1);
console.log("student two");
console.log(student2);
console.log("distance");
console.log(findDistance(point1, { x: 3, y: 4 }));
//           ************************
//ANSWER # 8;
var myArray = [2, 3, 4, 1, 5, 7, 6, 9, 8];
console.log(myArray);
//Array opretions:
myArray.sort();
console.log(myArray);
myArray.push(11);
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.shift();
console.log(myArray);
myArray.unshift(1);
console.log(myArray);
//           ****************
//ANSWER # 9;     
//ENUM:
var COLOR;
(function (COLOR) {
    COLOR[COLOR["White"] = 0] = "White";
    COLOR[COLOR["Green"] = 1] = "Green";
    COLOR[COLOR["Blue"] = 2] = "Blue";
    COLOR[COLOR["Red"] = 3] = "Red";
})(COLOR || (COLOR = {}));
console.log("i like these colors ".concat(COLOR[COLOR.White]));
var setColor = COLOR.Green;
console.log("I Love ".concat(setColor, " color"));
//     ***************************
//ANSWER # 10;
var isNull = null;
var isUndefined = undefined;
if (isNull === null && isUndefined === undefined) {
    console.log("The value is null and undefined");
}
else {
    console.log("The value is not null ,it is defined");
}
//           *****************************
