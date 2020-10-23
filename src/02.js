
/*Classes and construction functions are in many cases the same,
classes is just a simple way to make construction functions.*/

// classes === constructor functions
// classes - create objects with shared methods
/*To declare a class we use the keyword class 
with the first letter capitalizer.*/
//class Student {}
/* And as constructor function classes has curly braces
but not parenthesis.*/

//we have this special method for initialize values call constructor
class Student {
  constructor(id, name){
    this.id = id;
    this.name = name;
  }
}

/*In the classes you don't declare method with prototype like 
constructor function, you can add methods inside de curly braces of the class.*/
class Student {
  constructor(id, name){
    this.id = id;
    this.name = name;
  }

  getStudentName(){
    return `Name: ${this.name}`
  }
}

// function Student() {}

// class Student {
//   constructor(id, name, subjects = []) {
//     this.id = id;
//     this.name = name;
//     this.subjects = subjects;      
//   }  
    
//   getStudentName() {
//     return `Student: ${this.name}`  
//   }
    
//   addSubject() {}  
// }

// const student1 = new Student(1, 'Reed');
// console.log(student1.getStudentName());