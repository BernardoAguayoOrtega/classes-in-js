// Classes
// 1. What are constructor functions?
/*Constructor functions provide a way 
of creating numerous objects of the same type. 
They're named after the data 
they create(starting with a capital letter).*/
function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;  
}

/* So now you can create different objects
with the same structure
*/
const student1 = new Student(1, 'Reed');
// should return a new Student
console.log(student1.name)
// therefore the console above returns Reed

/*And also we can add properties or methods 
to the objects created by the constructor
function via the prototype keyword*/

Student.prototype.addSubject = function (subject) {
  this.subjects = [...this.subjects, subject];  
}

//here the magic
student1.addSubject('random subject')
// should return ["random subject"]