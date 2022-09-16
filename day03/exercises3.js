//Exercises 1

/*Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.*/
let firstName = "Aslı"
let lastName = "Sütçüoğlu"
let country = "Turkey"
let city = "İstanbul"
let age = 28.5
let isMarried = false
let year = 2005

console.log(typeof firstName,typeof lastName, typeof country, typeof age, typeof isMarried)


console.log("10" == 10)
console.log(parseInt("9.8") == 10)


// Truthy values: 

console.log(4 > 3, 1 == true,"5" == 5 )

// Falsy values:

console.log(7 > 10, 0 == true,"7"=== 7 )

/*Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()*/


console.log(4 > 3, 4 >= 3, 4 < 3, 4<=3,4 == 4, 4 === 4, 4!= 4, 4 !== 4, 4 != "4",4 == "4",4 ==="4")

console.log(4 > 3 && 10 < 12, //true
    4 > 3 && 10 > 12,    //false
    4 > 3 || 10 < 12,   //true
    4 > 3 || 10 > 12, //true
    !(4 > 3),        //false
    !(4 < 3),       //true
    !(false),       //true
    !(4 > 3 && 10 < 12),  //false
    !(4 > 3 && 10 > 12),  //true
    !(4 === '4'))        //true

/* - What is the year today?
-What is the month today as a number?
-What is the date today?
-What is the day today as a number?
-What is the hours now?
-What is the minutes now?
-Find out the numbers of seconds elapsed from January 1, 1970 to now.*/


let date = new Date()

console.log(date.getFullYear())
console.log(date.getMonth() + 1)
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getTime())


//Exercises 2

/*Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
Enter base: 20
Enter height: 10
The area of the triangle is 100*/

let base = prompt("Enter base")
let height = prompt("Enter height")
console.log(`The area of the triangle is ${base * 0.5 * height}`)

/*Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12*/

let a = parseInt(prompt("Enter side a"), 10)
let b = parseInt(prompt("Enter side b"), 10)
let c = parseInt(prompt("Enter side c"), 10) 
console.log(`The perimeter of the triangle is ${a+ b+ c}`)


/*Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)*/

let l = parseInt(prompt("Enter length"), 10)
let w = parseInt(prompt("Enter width"), 10)

perimeter = 2 * (l + w)
areaRectangle = l * w

console.log(`Perimeter of rectangle ${perimeter}`)

console.log(`Area of rectangle ${areaRectangle}`)

/*Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.*/

const pi = 3.14
let r = prompt(" Enter radius")
console.log(`Area of a circle ${pi*r*r}`)
console.log(`Circumference of a circle ${2*pi*r}`)

//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let hours = prompt("Enter hours")
let rate = prompt("Enter rate per hour")
let result = hours * rate
console.log(`Your weekly earning is ${result}`)

/*If the length of your name is greater than 7 say, your name is long else say your name is short.*/

let name = prompt('Please enter your name')
let nameLength = name.length

let nameLengthComp = nameLength > 7 ? console.log("Your name is long") : console.log("Your name is short")

// Compare your first name length and your family name length and you should get this output.

let firstNamee = prompt('Enter your name:')
let lastNamee = prompt('Enter your family name:')

let res = firstNamee.length > lastNamee.length ? console.log(`Your first name ${firstNamee} is longer than your last name, ${lastNamee}`) : console.log(`Your last name ${lastNamee} is longer than your first name, ${firstNamee}`)

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 100

console.log(`I am ${myAge- yourAge} years older than you.`)

/*Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.*/

let bornYear = prompt("Enter your birth year");
let now1= new Date();
let age1 = now.getFullYear()- bornYear
resul =  age1 > 18 ? console.log(`You are ${age1}. You are old enough to drive`) :  console.log(`You are ${age1}.You will be allowed to drive after ${18- age1} years.`)


//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years.

let years = prompt('Enter number of years you live: ')
console.log(`You lived ${years * 31557600} seconds`)

/*Create a human readable time format using the Date time object.
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm*/

const now = new Date();
const yil = now.getFullYear();
const ay = now.getMonth() + 1;
const gun = now.getDate();
const saat = now.getHours();
const dk = now.getMinutes();

console.log(`${gun}-${ay}-${yil} ${saat}:${dk}`)
console.log(`${yil}-${ay}-${gun} ${saat}:${dk}`)
console.log(`${gun}/${ay}/${yil} ${saat}:${dk}`)

//Exercises 3 

/*Create a human readable time format using the Date time object. 
The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05)
YYY-MM-DD HH:mm eg. 20120-01-02 07:05 */

const minutes = String(date.getMinutes()).padStart(2, '0');

console.log(`${yil}-${ay}-${gun} ${saat}:${minutes}`)