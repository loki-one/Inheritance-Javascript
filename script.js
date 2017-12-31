var input = document.querySelector('input');
var btn = document.querySelector('button');
var para = document.querySelector('p');

function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

Person.prototype.bio = function () {
  var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old.';
  if (this.gender.toUpperCase() === 'MALE') {
      pronoun = ' He likes ';
  } else if (this.gender.toUpperCase() === 'FEMALE') {
    pronoun = ' She likes ';
  } else {
    pronoun = ' They ';
  }

  string += pronoun;

  if (this.interests.length === 1) {
    string += this.interests[0] + '.';
  } else if (this.interests.length === 2) {
    string += this.interests[0] + ' and ' + this.interests[1] + '.';
  } else {
    for (var i = 0; i < this.interests.length; i++){
      if (i === this.interests.length - 1) {
          string += 'and ' + this.interests[i] + '.';
      } else {
        string += this.interests[i] + ', ';
      }
    }
  }
  alert(string);
};


Person.prototype.greeting = function () {
  alert('Hi! I\'m ' + this.name.first + '.');
};

Person.prototype.farewell = function () {
    alert(this.name.first + ' has left the building. Bye for now!');
};

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

function Teacher (first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.constructor = Teacher;


Teacher.prototype.greeting = function() {
  var prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }

  alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};

var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');

//Student

function Student(first, last, age, gender, interests) {
    Person.call(this, first, last, age, gender, interests);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greeting = function() {
    alert('Yo! I\'m ' + this.name.first + '.');
};

var student1 = new Student('Liz', 'Sheppard', 17, 'female', ['ninjitsu', 'air cadets']);


btn.onclick = function () {
  var code = input.value;
  para.textContent = eval(code);
}
