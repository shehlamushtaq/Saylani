
// function humpty(){

// var d = document.getElementById("humpty");

//  var pCounter = 0;
//  for (var i = 0; i < d.childNodes.length; i++) {
//  if (d.childNodes[i].nodeType === 1 ) {
//  pCounter++;
//  }
//  if (pCounter === 2) {
//  d.childNodes[i].innerHTML = "All his men.";
//  break;
//  }
//  }
// }

// function toDo() {
//     // var task = prompt('Work to do')

//     var x = document.getElementById('works')

//     var li = document.createElement('li')
//     var textLi = document.createTextNode(x.value) 
//     li.appendChild(textLi)

//     var ul = document.getElementById('ul')
//     var newTask = ul.appendChild(li)
//     x.value = ' '

// }

// function add(para) {
//     var x = document.getElementById('myDiv')
//     var pa
// }

// Write a JavaScript program to list the properties of a JavaScript object.
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
 };

//     // Sample Output: name,sclass,rollno

    

// for (var key in student){
//     console.log(key)
//     console.log( key + " " +student[key])
// }
// ========================List all authors in the following code
// var authorname =[ {
//     title: 'Bill Gates',
//     author: 'The Road Ahead',
//     readingStatus: true
// },
//  {
//     title: 'Steve Jobs',
//     author: 'Walter Isaacson',
//     readingStatus: true
// },
//  {
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     author: 'Suzanne Collins',
//     readingStatus: false
// }] 
// for (var i= 0; i<authorname.length; i++){
//     console.log( authorname[i].author)
// }
//=========================Constructor=======================
function Employee(name,  salary, absents){
    this.name = name;
    this.salary = salary;
    this.absent = absents;
    this.deductSal = 0;
}
Employee.prototype.salaryCalc = function (){
    if(this.absent > 2){
        this.deductSal = this.salary-500;
        console.log('salary after deduction '+ this.deductSal)
    }
}

var emp1 = new Employee ('shehla', 10000 , 3);
var emp2 = new Employee ('hina', 20000 , 6  )
var emp3 = new Employee ('Aisha' , 50000 , 1)
var emp4 = new Employee ('noman' , 45000 , 2)


console.log(`orignal Salary of Employee ${emp1.name} =  ` + emp1.salary)
emp1.salaryCalc()

console.log(emp1 )
console.log(emp2 )
console.log(emp3 )
console.log(emp4 )


















