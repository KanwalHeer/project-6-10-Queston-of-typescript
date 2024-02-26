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
    const myName:string ="Kanwal Heer"
    const age:number =23
    console.log(`My name is ${myName} and my age is ${age}`)
     //                **********************



//ANSWER # 2; 
    // let:
    let myNumber:number = 23456789
    if (true) {
    let myNumber:number = 98765432
    }
    console.log(myNumber)
    // var:
    function my_school() {
    var mySchool:string = "ghITc"
    if (mySchool) {
        var mySchool:string = "fhss"
    }
    console.log(mySchool)
    }
    my_school()
    // const:
    const myId:string = "heeri"
      //const myId:string = "heer"=>const can not be change
      console.log(myId)
         //     ***************************



//ANSWER # 3;
    let myString:string = "string is a data type"
    let my_Number:number = 4
    let myBoolean:boolean = true
    let myUndefined:undefined = undefined
    //simple opretations:
    let my_Number1:number = 4
    let result:number = my_Number + my_Number1
    console.log(result)
    let stringResult:string = myString + "and i really like it"
    console.log(stringResult)
    let booleanResult:boolean = myBoolean && true
    console.log(booleanResult)
    if (myUndefined === undefined) {
        console.log("myUndefined is undefined")
    }else{
        console.log("myUndefined is defined")
    }
    //        ****************************



 //ANSWER # 4;
    let numberType:number = 6
    //numberType = "hello 6":Error:=> we cant assign it another type value it shows error
    console.log(numberType)
     //      ********************************************




 //ANSWER # 5;
     let notType = 100
     console.log(notType+ "is" +typeof notType)
     // notType = "hello heeri"=>we can  assign it value only one time.
     //                  **********************


 //ANSWER # 6;
        let num1 :number = 100
        console.log(`${num1} is ${typeof num1}`)
        let str1:string = num1.toString()
        console.log(`'${str1}' is ${typeof str1}`)

        let str2:string = "200"
        console.log(`'${str2}' is ${typeof str2}`)
        let num2:number = parseInt(str2)
        console.log(`${num2} is ${typeof num2}`)
        //           *************************



//ANSWER # 7;
        type student ={
            name:string;
            age:number;
            email:string
        }
        type point ={
            x:number;
            y:number
        } 
        const student1:student ={
            name:"kanwal",
            age:23,
            email:"kanwal@gmail.com"
        } 
        const student2:student ={
            name:"Heer",
            age:22,
            email:"heer@gmail.com"
        } 
        function findInfoStudent(student:student) {
            console.log(student.name)
            console.log(student.age)
            console.log(student.email)
        }  
        const point1:point={
            x:0,
            y:0
        } 
        function findDistance(point1:point,point2:point):number {
            const dx = point1.x -point2.x
            const dy = point1.y -point2.y
        return Math.sqrt(dx * dx + dy *dy)
        } 
        console.log("student one")
        console.log(student1)
        console.log("student two")
        console.log(student2)
        console.log("distance")
        console.log(findDistance(point1,{x:3,y:4}))
        //           ************************


  //ANSWER # 8;
        let myArray:number[] = [2,3,4,1,5,7,6,9,8]
        console.log(myArray)
        //Array opretions:
        myArray.sort()
        console.log(myArray)
        myArray.push(11)
        console.log(myArray)
        myArray.pop()
        console.log(myArray)
        myArray.shift()
        console.log(myArray)
        myArray.unshift(1)
        console.log(myArray)
        //           ****************


 //ANSWER # 9;     
 //ENUM:
       enum COLOR {
        White,
        Green,
        Blue,
        Red
       }
       console.log(`i like these colors ${COLOR[COLOR.White]}`)
       let setColor:COLOR = COLOR.Green
       console.log(`I Love ${setColor} color`)
       //     ***************************


 //ANSWER # 10;
        let isNull:null = null
        let isUndefined:undefined = undefined
        if (isNull === null && isUndefined === undefined) {
            console.log("The value is null and undefined")
        } else {
            console.log("The value is not null ,it is defined")
        }
        //           *****************************
