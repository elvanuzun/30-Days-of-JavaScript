//Exercises: Level 1

//Iterate 0 to 10 using for loop, do the same using while and do while loop

/*for(i = 0; i <= 10; i++){
    console.log(i);
}*/

//let j= 0;
/*while(j <= 10){
    console.log(j);
    j++
}*/

/*do{
    console.log(j);
    j++
}while( j <= 10)*/


//Iterate 10 to 0 using for loop, do the same using while and do while loop

/*for(i = 10; i >= 0; i--){
    console.log(i);
}*/

let j = 10;
/*while(j >= 0){
    console.log(j);
    i--
}*/

/*do{
    console.log(j);
    j--
}while(j >= 0)*/


//Iterate 0 to n using for loop
/*let n = 4;
for(let j = 0; j <= n; j++){
    console.log(j)
}*/

/* 
Write a loop that makes the following pattern using console.log()
    #
    ##
    ###
    ####
    #####
    ######
    #######
    
*/

let y = "#";
for(i =1; i <= 7; i++){
    console.log(y);
    y += "#";
}

/* Use loop to print the following pattern:
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

for(i = 0; i <= 10; i++){
    console.log(`${i} x ${i} = ${i * i}`)
}

/* Using loop print the following pattern

i    i^2   i^3
0    0     0
1    1     1
2    4     8
3    9     27
4    16    64
5    25    125
6    36    216
7    49    343
8    64    512
9    81    729
10   100   1000*/


console.log("i ", "i^2","i^3")
for(let i=0;i<=10;i++){
    console.log(`${ i }  ${ i*i }    ${ i**3 }`)
}

// for(i= 0; i <= 10; i++) { 
//     console.log( i, i * i, i * i * i);
// }

/*Use for loop to iterate from 0 to 100 and print only even numbers*/

/*
for(let i=0; i<=100;i+=2){
    console.log(i);
}
* 


//Use for loop to iterate from 0 to 100 and print only odd numbers

/*
for(let i=1;i<=99;i+=2){
    console.log(i);
}
*/
//Use for loop to iterate from 0 to 100 and print only prime numbers

// for (let i = 0; i <= 100 ; i++) {
//     let flag = 0;

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

/*Use for loop to iterate from 0 to 100 and print the sum of all numbers.
    The sum of all numbers from 0 to 100 is 5050.*/

    let sum = 0;
    for(i = 0; i <= 100; i++){
        sum += i
    }
    console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

/*Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

    The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
*/

let sumEvens = 0;
let sumOdds = 0;

for(i = 0; i <= 100; i++){
    if(i % 2 == 0){
        sumEvens += i
    }else{
        sumOdds += i
    }
}

console.log(`
The sum of all evens from 0 to 100 is ${sumEvens}. And the sum of all odds from 0 to 100 is ${sumOdds}.`)

/* Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
[2550, 2500*/

arr = Array();
arr.push(sumEvens,sumOdds);
console.log(arr);

//Develop a small script which generate array of 5 random numbers.
console.log(Array.from({length: 5}, () => Math.floor(Math.random() * 100)));


/*Develop a small script which generate array of 5 random numbers and the numbers must be unique*/

var arr = [];
while(arr. length < 6){
var r = Math. floor(Math. random() * 100);
if(arr. indexOf(r) === -1) arr. push(r);
}
console. log(arr);

/* Develop a small script which generate a six characters random id:

5j2kh*/

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let result = " ";
for(i = 0; i < 5; i++){
    result += (characters.charAt(Math.floor(Math.random()* characters.length)));
}
console.log(result);

//Exercises: Level 2

/*Develop a small script which generate any number of characters random id:

  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba
*/

let res = " ";
for(i = 0; i < (Math.floor(Math.random()* 1000)); i++){
    res+= (characters.charAt(Math.floor(Math.random()* characters.length)));
}
console.log(res);

/* Write a script which generates a random hexadecimal number.

'#ee33df'*/

let resul = "";
let hexChar = "0123456789abcdef";
for (var i = 0; i < 6; i++) {
  resul += hexChar.charAt(Math.floor(Math.random() * hexChar.length));
}
console.log(`#${resul}`);

/*Write a script which generates a random rgb color number.

rgb(240,180,80)
*/

let rgb = "";

for(let i = 0; i < 3;  i++){

    rgb += Math.floor(Math.random()* 256);
        if(i != 2){
            rgb += "," 
        }
}
console.log(`rgb(${rgb})`)

/*
Using the countries array, create the following new array.

["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"] */

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];

let newArr = Array();

for(let country of countries){
    newArr.push(country.toUpperCase())
}

console.log(newArr);

/* Using the above countries array, create an array for countries length'.

[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]*/

let lengthCountries = [];

for(let country of countries){
    lengthCountries.push(country.length);
}
console.log(lengthCountries);


/* Use the countries array to create the following array of arrays:
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
] */

countries.splice(10,0,"Iceland")
let newCountry = "Iceland"
let countriesArray = [];
let temp = [];

for(let country of countries){
    temp.push(country, country.substring(0,3).toUpperCase(), country.length)
}


console.log(temp);

/* In above countries array, check if there is a country or countries containing the word 'land'.
If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

['Finland','Ireland', 'Iceland'] */

console.log(countries)
let landArray = [];
let counter = 0;
for(let country of countries){
    if(country.includes('land')){
        landArray.push(country);
        counter += 1;
    }
    }
    if(counter == 0){
        console.log('All these countries are without land.');
    }
    
console.log(landArray);


/* In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

['Albania', 'Bolivia','Ethiopia']*/

let count = 0;
let iaArray = [];
for(let country of countries){
    if(country.endsWith("ia")){
        iaArray.push(country);
        count += 1;
    }
}
console.log(iaArray)
    if(count == 0){
        console.log('These are countries ends without ia.')
    }


/* Using the above countries array, find the country containing the biggest number of characters.

Ethiopia */

let maxIndex = -1;
let currMaxLen = 0;

for (let i in countries) {
   if (countries[i].length > currMaxLen) {
     currMaxLen = countries[i].length
     maxIndex = i
   }
}

console.log(countries[maxIndex]);

/* Using the above countries array, find the country containing only 5 characters.

['Japan', 'Kenya']*/

let arrr = [];
for(let country of countries){
    if(country.length == 5){
        arrr.push(country)
    }
}

console.log(arrr)

/* Find the longest word in the webTechs array */

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  
let currentMax = 0;
let maxiIndex = -1;

for(i in webTechs){
    if(webTechs[i].length > currentMax){
        currentMax = webTechs[i].length
        maxiIndex = i
    }
}
console.log(webTechs[maxiIndex]);

//*???
/* Use the webTechs array to create the following array of arrays:

[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]*/

let myArr =[];
for(let tech of webTechs){
    myArr.push([tech, tech.length])
}

console.log([myArr]);

/*
An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
*/

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let mern = "";
for(let i in mernStack){
    mern += mernStack[i][0];
}

console.log(mern);


