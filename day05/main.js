import { countries } from './countries.js';
import { webTechs } from './web_techs.js';


/* 
In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list. 
*/

let country = 'Ethiopia';
if(country.includes(country)){
    countries.splice(4,1,country.toUpperCase())
    console.log(countries);
} else{
    countries.push(country);
}

   

/* 
In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
*/

let sass = "Sass";
if (webTechs.includes("Sass")){
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push("Sass");
    console.log(webTechs);
}

//Exercise: Level 3

/*The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

- Sort the array and find the min and max age.
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log(ages.sort());
console.log("Min value:", ages[0], "Max value:", ages[ages.length-1]);

// - Find the median age(one middle item or two middle items divided by two)

console.log(ages[(ages.length)/2] , ages[((ages.length)/2)+1]);

// - Find the average age(all items divided by number of items)

var total = 0;
for (var i = 0; i < ages.length; i++) {
total += ages[i] }
console.log("Average age:",total/ages.length);

// - Find the range of the ages(max minus min)

console.log(`${ages[0]}-${ages[ages.length-1]}`);


// 1.- Slice the first ten countries from the countries array 

console.log(countries.slice(0,10));

//2- Find the middle country(ies) in the countries array.

console.log(countries.length);
console.log(ages[(ages.length)/2]);


// 3- Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

const middleIndex = Math.ceil(countries.length / 2);

let firstPart = countries.splice(0, middleIndex);
let secondPart = countries.splice(-middleIndex);  
console.log(firstPart, firstPart.length);
console.log(secondPart, secondPart.length)

