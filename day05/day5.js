//Exercise: Level 1

//Declare an empty array;
let myArray = [];

/*Declare an array with more than 5 number of elements*/
let arr = [7, 8, 30, 42, 0, 91.6, 8.7, 5];

/*Find the length of your array*/

console.log(arr.length)


/*Get the first item, the middle item and the last item of the array*/
let mid = arr[Math.floor(arr.length / 2)];
let last = arr[arr.length -1]
console.log("First item:", arr[0], "Middle item:", mid, "Last item:", last);


/*Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5 */

mixedDataTypes = ["Hello", "World", null, 78, 94.5, undefined];
console.log(mixedDataTypes.length);

/*Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon*/

let itCompanies = ["Facebook","Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

/*Print the array using console.log()*/

console.log(itCompanies);

// Print the number of companies in the array

console.log(itCompanies.length);

// Print the first company, middle and last company

console.log("First Comp:", itCompanies[0], "Middle Comp:", (itCompanies[Math.floor(itCompanies.length / 2)]), "Last Comp:", (itCompanies[itCompanies.length-1]));


// Print out each company

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

/*Change each company name to uppercase one by one and print them out*/

let companies = itCompanies.join(",").toUpperCase().split(",");
console.log(companies);

/*Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.*/
let sentence = `${itCompanies.slice(0,6)} and ${itCompanies[6]} are big IT companies`;
console.log(sentence);

/*Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found*/
comp = "Facebook";
if (itCompanies.includes(comp)){
    console.log(comp);
} else{
    console.log("Company is not found.");
}

/*Filter out companies which have more than one 'o' without the filter method*/

let regEx = /o+/gi;

/*console.log(company1.match(regEx));*/
// console.log(itCompanies[0].match(regEx).join("").length);


for(var i = 0; i < itCompanies.length; i++){
   let matc = itCompanies[i].match(regEx);
        if((matc!= null) &&(matc.join("").length > 1)){
                console.log(itCompanies[i]);
            
        }
}


/*Sort the array using sort() method*/
console.log("''''''''''''''''''''''''''''");
console.log(itCompanies.sort());

/*Reverse the array using reverse() method*/
console.log(itCompanies.reverse());

/*Slice out the first 3 companies from the array*/

console.log(itCompanies.slice(0,3));


/*Slice out the last 3 companies from the array*/
console.log(itCompanies.slice(-3));

/*Slice out the middle IT company or companies from the array*/

let midd = itCompanies[Math.floor(itCompanies.length / 2)];
console.log(midd.slice(0));

/*Remove the first IT company from the array*/
let newCompanies = itCompanies;
console.log(newCompanies.shift());

/*Remove the middle IT company or companies from the array*/
let new1 = itCompanies;
console.log(new1);
console.log(new1.splice(Math.floor(new1.length / 2),1))

/*Remove the last IT company from the array*/
console.log(new1.pop());

/*Remove all IT companies*/
newCompanies.splice(0, newCompanies.length);
console.log(newCompanies); 



/* First remove all the punctuations and change the string to array and count the number of words in the array.

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13*/

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let newText = text.match(/[^_\W]+/g);
console.log(newText);
console.log(newText.length)

/* In the following shopping cart add, remove, edit items:

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

- add 'Meat' in the beginning of your shopping cart if it has not been already added
- add Sugar at the end of you shopping cart if it has not been already added
- remove 'Honey' if you are allergic to honey
- modify Tea to 'Green Tea' 
*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if(shoppingCart[0] != "Meat"){
    shoppingCart.unshift("Meat")
}
console.log(shoppingCart)

if(shoppingCart[shoppingCart.length-1] != "Sugar"){
    shoppingCart.push("Sugar")
}
console.log(shoppingCart)


isAllergic = true
if(isAllergic){
    shoppingCart.splice(shoppingCart.indexOf("Honey"),1);
}
console.log(shoppingCart)

shoppingCart.splice(3,1,"Green Tea")
console.log(shoppingCart)



/*
Concatenate the following two variables and store it in a fullStack variable.

*/
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = [...frontEnd, ...backEnd]
console.log(fullStack)







//const holidayDoghouse = [...myDogs, ...parentsDogs];