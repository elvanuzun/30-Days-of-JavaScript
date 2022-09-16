// Exercises: Level 1

/*Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.*/

let age = parseInt(prompt("Enter your age:"))

if (age >= 18){
    console.log('You are old enough to drive')
}else{
    console.log(`${18- age} years later, you'll drive.`)
}

/*Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.*/

let myAge = 48
let yourAge = parseInt(prompt("Enter your age: "))

if(myAge > yourAge){
    console.log("I am older than you.")
}else{
    console.log("You are older than me.")
}

/* If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways:

- using if else
- ternary operator.*/

let a = 4
let b = 3

//if-else
if(a > b){
    console.log('a is greater than b.')
}else{
    console.log('a is less than b.')
}

//ternary 

a > b ?  console.log('a is greater than b.') : console.log('a is less than b.')

/*Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? */

let num = parseInt(prompt("Enter a number: "))

switch(num % 2){
    case 0:
        console.log(`${num} is a even number.`)
        break
    default:
        console.log(`${num} is an odd number.`)
        
}

//Level 2

/*Write a code which can give grades to students according to theirs scores:
80-100, A
70-79, B
60-69, C
50-59, D
0-49, F */

let score = 59

if ((score >= 80) && (score <= 100)){
    console.log("A")
}else if((score >= 70) && (score < 80) ){
    console.log("B")
}else if((score >=60) && (score < 70)){
    console.log("C")
}else if((score >=50) && (score < 60)){
    console.log("D")
} else if((score >=0) && (score < 50)){
    console.log("F")
}


/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/

let month = prompt("Enter a month:").toUpperCase()

if ((month == "SEPTEMBER")||(month == "OCTOBER")|| (month == "NOVEMBER")){
    console.log("Autumn")
}else if((month == "DECEMBER")||(month == "JANUARY")|| (month == "FEBRUARY")){
    console.log("Winter")
}else if((month == "MARCH")||(month == "APRIL")|| (month == "MAY")){
    console.log("Spring")
}else if((month == "JUNE")||(month == "JULY")|| (month == "AUGUST")){
    console.log("Summer")
}
    


/* Check if a day is weekend day or a working day. Your script will take day as an input. */

let day = prompt("What is the day today?").toLowerCase()
if ((day == "monday")|| (day == "tuesday")|| (day == "wednesday")|| (day == "thursday")|| (day == "friday")){
    console.log("Working day.")
}else if((day == "saturday")|| (day == "sunday")){
    console.log("Weekend day.")
}


// Exercises: Level 3

/*Write a program which tells the number of days in a month.
    Enter a month: January
    January has 31 days.*/

let months = prompt("Enter a month: ").toLowerCase()

if((months == "april")|| (months == "june")|| (months == "september") || (months == "november")){
    console.log(`${months} has 30 days.`)
}else if((months == "january")|| (months =="march")|| (months == "may")|| (months == "july") || (months == "august") || (months == "october") || (months == "december")){
    console.log(`${months} has 31 days.`)
}else if(months == "february"){
            console.log(`${months} has 28 days.`)
}
    



