// "use stric"
// function my(){
//     console.log(this)
// }
// my()

// let button = document.querySelector('button')
// button.addEventListener('click', function(){
//     console.log(this)
// })
// function clickme(param){
//     console.log(param)
// }

// console.log(this)
// console.log(typeof this)

// function hello(name){
//     console.log(`hello ${name}`)
// }

// hello('avin')

// let hello = function(name){
//     console.log(`hello ${name}`)
// }
// hello('avin')

// let hello = (name)=> {
//     console.log(`hello ${name}`)
// }
// hello('avin')

// let hello = name =>  console.log(`hello ${name}`)
// hello('avin')

// let hello = function(name){
//     return `hello ${name}`
// }
// console.log(hello('avin'))

// let hello = name => `helooo ${name}`
// console.log(hello('avin'))

// let sum = function(num1 , num2){
//     return num1 + num2
// }
// console.log(sum(2,3))

// let sum = (num1 , num2) => num1+num2
// console.log(sum(10,10))

// let family = () => ({id:1 , firstName : 'avin'})
// console.log(family())

// let sum = function (...avin){
//     console.log(avin)
// }
// sum(1,2,'avines')

// let sum = (...avin) => console.log(avin)
// sum(1,2,3,4,5,'sali')

// let myfunc = function(a,b,...avin){
//     console.log(a,b,avin)
// }
// myfunc(80,90,100,12,1,3,1)

// let array1 = [1,2,3]
// let array2 = [10,20,30]
// let array3 = [array1 , array2]
// console.log(array3)

// let array1 = [1,2,3]
// let array2 = [10,20,30]
// let array3 = [...array1 , ...array2]
// console.log(array3)

// let object1 = {
//     id : '1',
//     name : 'avin'
// }
// let object2 = {
//     id : '2',
//     name : 'asalivin'
// }

// let object3 = {object1 , object2}
// console.log(object3)

// let object1 = {
//     id : 1,
//     name : 'avin'
// }
// let object2 = {
//     id2 : 2,
//     name2 : 'asalivin'
// }

// let object3 = {...object1 , ...object2}
// console.log(object3)

// let array = [1,2,3,4,5]
// let [item1, item2, item3] = array
// console.log(item1,item2,item3)

// let array = [1,2,3,4,5]
// let [item1, item2, , item3] = array
// console.log(item1,item2,item3)

// let array = [1,2,6]
// let [item1, item2, item3=5] = array
// console.log(item1,item2,item3)

// let array = [1,2,3,4,5]
// let [item1, item2, , ...item3] = array
// console.log(item1,item2,item3)

// let user = {
//     id : 1,
//     firstName : 'avin'
// }

// let id = user.id
// let firstName = user.firstName

// console.log(id, firstName)

// let user = {
//     id : 1,
//     firstName : 'avin'
// }

// let {id , firstName} = user
// console.log(id, firstName)

// let user = {
//     id : 1,
//     firstName : 'avin'
// }

// let {id , firstName: name} = user
// console.log(id, name)

// let numbers = [1,2,3,4,5]
// numbers.forEach(function(){
//     console.log('avin')
// })

// let numbers = [1,2,3,4,5]
// numbers.forEach(function(number){
//     console.log(number)
// })

// let numbers = [1,2,3,4,5]
// numbers.forEach(number=> console.log(number))

// let numbers = [1,2,3,4,5]
// numbers.forEach(number=> console.log(number*10))

// let numbers = [ 1 , 2, 3]
// numbers.map(function(number){
//     console.log(number*10)
// })

// let numbers = [ 1 , 2, 3]
// let newNums = numbers.map(function(number){
//     return number*10
// })
// console.log(newNums)

// let numbers = [1,2,3]
// let newNums = numbers.map(number => number*10)
// console.log(newNums)

// let numbers = [1,2,3,4,12,13,14,15]

// numbers.filter(function(number){
//     if (number>10){
//         console.log(number)
//     }
// })

// let newNums = numbers.filter(function(number){
//     if (number>10){
//         return number
//     }
// })
// console.log(newNums)

// let newNums = numbers.filter(function(number){
//     if (number>10){
//         return number
//     }
// })
// console.log(newNums)

// let newNums = numbers.filter(number => number %2 != 0)
// console.log(newNums)

// let numbers = [1,3,5,7,9]

// numbers.reduce(function(){
//     console.log('avin')
// })

// numbers.reduce(()=> console.log('avin'))

// let newNums = numbers.reduce(function(prevv, currentt){
//     return prevv+currentt
// })
// console.log(newNums)

// let newNums = numbers.reduce((prev,current)=>prev+current)
// console.log(newNums)

// let array = [
//     {
//         id: 1,
//         name : "avin",
//         income : 1.5
//     },
//     {
//         id: 2,
//         name : "sali",
//         income : 2.5
//     },
//     {
//         id: 3,
//         name : "suni",
//         income : 3.5
//     }
// ]

// let total = array.reduce((prev , current)=>{
//     if(prev.income){
//         return prev.income + current.income
//     }else{
//         return prev + current.income
//     }
// })
// console.log(total)

// function my(){
//     console.log(this)
// }
// my()

// let p = {
//     name : 'avin',
//     my2 : function(){
//         console.log(this)
//     }
// }
// p.my2()

let p = {
  name: "avin",
  family: "es",
  fullName: function () {
    console.log(this.name + " " + this.family);
  },
};

// let full = p.fullName
// let full = function(){
//     console.log(this.name + ' ' + this.family)
// }

let p1 = {
  name: "sali",
  family: "esp",
};
let p2 = {
  name: "suni",
  family: "es2",
};

let full = p.fullName.bind(p2);
full();
// console.log(full)
// console.log(full())
