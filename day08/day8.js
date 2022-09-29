//Exercises: Level 1

/*
1-Create an empty object called dog
2-Print the the dog object on the console
3-Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
4-Get name, legs, color, age and bark value from the dog object
5-Set new properties the dog object: breed, getDogInfo */

let dog = {}
console.log(dog)

dog.name = "Karabaş"
dog.legs = 4
dog.age = 3
dog.bark = function(){
    return "Woof woof"
}

console.log(dog)

dog.breed = "Akita"
dog.getDogInfo = function(){
    let statement = `${this.name} is ${this.age} years old.`
    return statement
}
console.log(dog.getDogInfo())


//Exercises: Level 2

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },

    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },

    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },

    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// - Find the person who has many skills in the users object.

let winner = ""
let maxSkillsNumber = 0

for (const user in users) {
    if (users[user].skills.length > maxSkillsNumber) {
        maxSkillsNumber = users[user].skills.length
        winner = user
    }
}
console.log(winner)


/*-Count logged in users, count users having greater than equal to 50 points from the following object.*/

let countLoggedIn = 0

function areLoggedIn(){
  for(let user in users){
    if(users[user].isLoggedIn === true){
      countLoggedIn += 1
    }
  }
  return `${countLoggedIn} users are logged in`
}

console.log(areLoggedIn())


let count = 0
function countMoreThan50(){
  for(let user in users){
    if(users[user].points >= 50){
      count ++
    }
  }
  return `${count} user have 50 points or more.`
}

console.log(countMoreThan50())

/*Find people who are MERN stack developer from the users object*/ 
let mernDevs = []
function findMernDev(){
  for(let user in users){
    if(users[user].skills.includes('Express', 'MongoDB', 'React', 'Node')){
      mernDevs.push(user)
    }
  }
  return `${mernDevs} is/are MERN Stack Developer.`
}

console.log(findMernDev())

/*Set your name in the users object without modifying the original users object*/

const copyUsers = Object.assign({}, users)
copyUsers["name"] = "Elvan"

console.log(copyUsers)

/*Get all keys or properties of users object*/

console.log(Object.keys(users))

/*Get all the values of users object*/

console.log(Object.values(users))


//Exercises: Level 3

/*Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.*/


const personAccount = {
  firstName: "Cem",
  lastName: "Onaran",
  incomes: [10000, 500, 1500], 
  expenses: [2000, 7500, 350],

  totalIncome: function () {
    let sum = 0;
    for (let i = 0; i < this.incomes.length; i++) {
        sum += this.incomes[i] ;
    }
    return `${sum}`;
},

  totalExpenses: function () {
		let sum = 0;
		for (let i = 0; i < this.expenses.length; i++) {
			sum += this.expenses[i];
		}
		return `${sum}`;
	},

  accountInfo: function(){
    return `Accounts owner: ${this.firstName} ${this.lastName}, total expenses: ${this.totalExpenses()}`
  },

  addIncome: function(income){
    return this.incomes.push(income)
  },

  addExpenses: function(expense){
    return this.expenses.push(expense)
  },

  accountBalance: function(){
      return this.totalIncome() -  this.totalExpenses()
  }

}
console.log(personAccount.addExpenses(2000))
console.log(personAccount.addIncome(1000))
console.log(personAccount.accountInfo())
console.log(personAccount.accountBalance())

/* 2. **** Questions: 2, 3 and 4 are based on the following two arrays:users and products
I renamed users array to appUsers, because we alredy have an users array.*/

const newUsers = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];
  

const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]

// Imagine you are getting the above users collection from a MongoDB database.

// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

function signUp(username, email, password){
  let userExists = false
  for(let i = 0; i<newUsers.length; i++){
    if(newUsers[i].username == username && newUsers[i].email == email){
      console.log("User exists")
      userExists = true
    }
  }
    if(!userExists) {
      let id = []
      let chars =  "abcdefghiklmnopqrstuvwxyz"
      let date = new Date()
      for(let i = 0; i < 6; i++){
        id.push (chars[Math.floor(Math.random()* chars.length)])
       
      }
      id = id.join("");
      newUsers.push({
        _id: id,
        username: username,
        email: email,
        password: password,
        createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
        isLoggedIn: true
      })
      
		console.log(
			`User ${newUsers[newUsers.length - 1].username} created successfully.`)
    }
}

signUp("elvan", "elvan@elvan.com", "123456")
console.log(newUsers)

//b. Create a function called signIn which allows user to sign in to the application

function signIn(username, email, password){
  for(let i = 0; i < newUsers.length; i++){
    if((newUsers[i].username === username) &&(newUsers[i].email === email)  && (newUsers[i].password === password)){
      newUsers[i].isLoggedIn = true
      return `${newUsers[i].username} is logged in.`
    }
  }
}

console.log(signIn("elvan", "elvan@elvan.com", "123456"))


/*The products array has three elements and each of them has six properties. 

a. Create a function called rateProduct which rates the product */

function rateProduct(name, rate){


  for(let product of products){
    if(product.name.toLowerCase().includes(name)){
      let chars = '0123456789abcdefghijklmnopqrstuvwxyz';
      let id = [];
      for (let i = 0; i < 6; i++) {
          id.push(chars[Math.floor(Math.random() * chars.length)]);
      }
      id = id.join('');
      product.ratings.push({
          userId: id,
          rate: rate
      })
    }

    else{
      return `No product!`
    }
  }
}

rateProduct("laptop", 5)
console.log(products)



//b. Create a function called averageRating which calculate the average rating of a product 

function averageRating(name){
  let average = 0
  let count = 0
  for(let i = 0; i < products.length; i ++){
    if(name === products[i].name){
      for(let rating of products[i].ratings){
        count += 1
        average += rating.rate
      }
    }
  }
    return `${name} average ratings:  ${average / count}`

}

console.log(averageRating("mobile phone"))


