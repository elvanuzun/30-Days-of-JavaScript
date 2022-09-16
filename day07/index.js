//Exercises: Level 1

/*An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.*/



function areaOfRectangle(length, width){
    let area = length * width
    return area
}   

console.log(areaOfRectangle(10, 5))

/* Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.*/

const speed = (totalDistance, totalTime)=> totalDistance / totalTime

console.log(speed(100, 50))

/* Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.*/

function calculateWeight (mass, gravity = 9.8){
    return mass * gravity
}
console.log(calculateWeight(30))


/* Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.*/

function convertCelsiusToFahrenheit(oC){
    let convert = ((oC * 9/5) + 32)
    return convert
}

console.log(convertCelsiusToFahrenheit(40))

/* Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more*/

function findBodyMassIndex(weight, height){
    bmi = weight / (height * height)
    if(bmi < 18.5){
        return "Underweight"
    }else if(bmi < 24.9 && bmi > 18.5){
        return "Normal weight"
    }else if(bmi < 29.9 && bmi > 25){
        return "Overweight"
    }else if(bmi >= 30){
        return "Obese"
    }
}

console.log(findBodyMassIndex(65,1.70))

/* Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer. */
let winter = ["December","January", "February"]
let spring = ["March", "April", "May"]
let summer = ["June", "July", "August"]
let autumn = ["September", "October", "November"]
function checkSeason(month){
    for (win of winter){
        if ( win == month){
            return "Winter"
        }
    }for(spr of spring){
        if(spr == month){
            return "Spring"
        }
    }for(let summ of summer){
        if(summ == month){
            return "Summer"
        }
    }for(autu of autumn){
        if(autu == month){
            return "Autumn"
        }
    }
}

console.log(checkSeason("September"))


/* Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0*/


function findMax(num1,num2,num3){
    let arr = [num1, num2, num3]
    let largest = arr[0]
    for(i = 0; i < 3; i++){
        if(arr[i]> largest){
            largest = arr[i]
        }
    }   return largest
}

console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -5))
console.log(findMax(2, 2, 2))

/* Exercises: Level 2 */

/* Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}*/

console.log("................")
function solveQuadEquation (a = 0, b = 0, c = 0){
    if(a == 0 ){
        return 0
    }else{
        let delta= Math.sqrt(b * b - 4 * a * c)
        // let den = 2 * a
        let root2 =(-b - delta)/ 2 * a
        let root1 = (-b + delta)/2 * a
        return `{${root1},${root2}}`
    }
}
console.log(solveQuadEquation(1,4,4))
console.log(solveQuadEquation())
console.log(solveQuadEquation(1,-1,-2))
console.log(solveQuadEquation(1,-1,0))

/* Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.*/

function printArray(myArray) {
   return myArray.join("\n")
}

console.log(printArray([5,6,7,8]))

/* Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

showDateTime()
08/01/2020 04:08 */


function showDateTime(){
    let now = new Date()
    let day = String(now.getDate()).padStart(2, '0')
    let month =String(now.getMonth() +1).padStart(2, '0')
    let year = (now.getFullYear())
    let hour = now.getHours()
    let minute = now.getMinutes()

    let date = `${day}/${month}/${year} ${hour}:${minute}`
    return date
}

console.log(showDateTime())


/* Declare a function name swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4*/


function swapValues(x, y){
    return `y = ${x}, x = ${y}`
}

console.log(swapValues(3,4))

/*Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A'] */

function reverseArray(array){
    let reversed = []
    let last = array.length 

    for(let i = last - 1 ; i >= 0; i--){
        array.splice(i, 0, array.shift());
    }

    return array;
}

console.log(reverseArray([1, 2, 3, 4, 5]))


/* Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

*/

function capitalizeArray(arr){
    let arrUpper = []

    for(let element of arr){
        arrUpper.push(element[0].toUpperCase() + element.slice(1))

    }
    return arrUpper;
   
}

console.log(capitalizeArray(["ali", "burak", "beyza"]))

/*Declare a function name addItem. It takes an item parameter and it returns an array after adding the item */

function addItem(item){
    let array = []
    array.push(item)
    return array
}
console.log(addItem("hello"))

/* Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range*/

function sumOfNumbers(num){
    let sum = 0
    for(let i = 1; i <= num; i ++){
        sum += i

    }
    return sum
}

console.log(sumOfNumbers(5))

/* Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.*/

function sumOfOdds(num){
    let sumOdds = 0
    for(let i = 1; i <= num; i += 2){
        sumOdds += i
    }
    return sumOdds
}
console.log(sumOfOdds(100))

/* Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

evensAndOdds(100);
The number of odds are 50.
The number of evens are 51. */

function evensAndOdds(num){
    let odds = 0
    let evens = 0
    for(i=0; i<= num; i++){
        if(i % 2 ===0){
            evens += 1
        }
        else{
            odds += 1
        }
    }
    return `The number of odds are ${odds}, the number of evens are ${evens}.`
}

console.log(evensAndOdds(100))

/* Write a function which takes any number of arguments and return the sum of the arguments

sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10*/

function sum(){
    let sumArg = 0
    for(let i of arguments){
        sumArg += i
    }
    return sumArg
}

console.log(sum(1,2,3))
console.log(sum(1,2,3,4))

/* Write a function which generates a randomUserIp. */

function generateRandomIp(){
    let userIp = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
    return userIp
}

console.log(generateRandomIp())

/* Write a function which generates a randomMacAddress*/

function generateMac(){
    var hexDigits = "0123456789ABCDEF";
    var macAddress = "";
    for (var i = 0; i < 6; i++) {
        macAddress+=hexDigits.charAt(Math.floor(Math.random() * hexDigits.length));
        macAddress+=hexDigits.charAt(Math.floor(Math.random() * hexDigits.length));
        if (i != 5) macAddress += ":";
    }

    return macAddress;
}

console.log(generateMac())

/* Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

console.log(randomHexaNumberGenerator());
'#ee33df'*/

let hexCharacters = "0123456789abcdef"
function randomHexaNumberGenerator(){
    randomHex = "#"
    for(i = 0; i < 6; i++){
        let index = Math.floor(Math.random()* hexCharacters.length)
        randomHex += hexCharacters[index]
    }
    return randomHex
}

console.log(randomHexaNumberGenerator())


/* Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

console.log(userIdGenerator());
41XTDbE*/

let characters = "0123456789abcdefghijklmnoöprstwyzxqABCDEFGHIJKLMNOPRSTVYZWQX"

function userIdGenerator(){
    let userId = ""
    for(i = 0; i<7; i++){
        let randomIndex = Math.floor(Math.random()* characters.length)
        userId += characters[randomIndex]
    }
    return userId
}
console.log(userIdGenerator())


//Exercises: Level 3

/*Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'
*/
// let idLength = parseInt(prompt("Enter the length you want to create an id"))
// let numberOfIds = parseInt(prompt("How many ids do you want to create?"))

/*function userIdGeneratedByUser(){
    let randomId = ""
    let idArray = []
    for(let j = 0; j < numberOfIds; j++){
        for(let i = 0; i < idLength; i++ ){
            let indexRandom = Math.floor(Math.random() * characters.length)
            randomId += characters[indexRandom]
        }  
        idArray.push(randomId)
        randomId = ""
    }
     return idArray.join().replaceAll("," , "\n")
}
console.log(userIdGeneratedByUser())*/


/* Write a function name rgbColorGenerator and it generates rgb colors.

rgbColorGenerator()
rgb(125,244,255)*/

function rgbColorGenerator(){
    let rgb = ""
    for(i = 0; i < 3; i++){
        let randomRgbNumber = Math.floor(Math.random() * 256)
        rgb += randomRgbNumber 
        if(i != 2){
            rgb += ","
        }
    }
    return `rgb(${rgb})`
}

console.log(rgbColorGenerator())

/*Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array. */

function arrayOfHexaColors(hex){

    checkHex = hex.match(/[ABCDEFabcdef0-9]{3,6}/g) 
    if(hex.length !== 6 && hex.length !== 3){
        throw "Only hex values with 3 or 6 digits allowed."
    }else if(checkHex === null || checkHex[0].length !== 3 && checkHex[0].length !== 6 ){
        throw "hex value out of bounds.";
    }
    
    if(hex.length === 3){
        hex = hex.replace(/.{1,1}/g, "$&$&");
    }
    let rgb = hex.match(/.{1,2}/g);


    let rgbArray = [
        parseInt(rgb[0], 16),
        parseInt(rgb[1], 16),
        parseInt(rgb[2], 16)
    ]
    return rgbArray
    
}

console.log(arrayOfHexaColors("ff0"))

/* Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color. */
function valueToHex(c) {

let hex = c.toString(16);
  
    return hex
}  

function convertRgbToHexa(r,g,b){

    return(valueToHex(r) + valueToHex(g) + valueToHex(b));
}

console.log(convertRgbToHexa(255,255, 255))
