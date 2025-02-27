"use strict";

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
  
}

Student.prototype.addMarks = function (...marks) { 
  if (!this.marks) {
    return;
  }
    this.marks.push(...marks);
  }
  

Student.prototype.getAverage = function () {
 if (!this.marks || !this.marks.length) {
  return 0;
 }
	let sum = this.marks.reduce ((acc, curr) => acc + curr);
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}



/*if ('marks' in Student) {  return sum;
} else {
	let sum = (this.marks.reduce((acc, item) => acc + item, 0)) / this.marks.length;
return sum;
} else { 
	return 0;return 0; 
}*/