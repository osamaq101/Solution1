
class Student {
    constructor(studentId) {
        this.studentId = studentId;
        this.answers = []; 
    }

   
    addAnswer(question) {
        this.answers.push(question); 
    }
}

class Question {
    constructor(qid, answer) {
        this.qid = qid; 
        this.answer = answer; 
    }

    
    checkAnswer(answer) {
        return this.answer === answer; 
    }
}


class Quiz {
    constructor(questions, students) {
    
        this.questions = new Map();
        questions.forEach((question) => {
            this.questions.set(question.qid, question.answer);
        });
        this.students = students; 
    }

  
    scoreStudentBySid(sid) {
        
        const student = this.students.find((student) => student.studentId === sid);
        if (!student) return 0; 

       
        let score = 0;
        student.answers.forEach((answer) => {
            const correctAnswer = this.questions.get(answer.qid); 
            if (answer.checkAnswer(correctAnswer)) {
                score++; 
            }
        });
        return score;
    }

 
    getAverageScore() {

        const totalScore = this.students.reduce((total, student) => {
            return total + this.scoreStudentBySid(student.studentId);
        }, 0);
    
        return totalScore / this.students.length;
    }
}
//q2


function Animal(name, speed) {
  this.name = name;
  this.speed = speed;
}


Animal.prototype.run = function(additionalSpeed) {
  this.speed += additionalSpeed;
  console.log(`${this.name} runs at speed ${this.speed}`);
};


Animal.compareBySpeed = function(a1, a2) {
  return a1.speed - a2.speed;
};


function Rabbit(name, speed) {
  Animal.call(this, name, speed); 
}


Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;


Rabbit.prototype.hide = function() {
  console.log(`${this.name} hides`);
};

let rabbit = new Rabbit("Bunny", 10);
rabbit.run(5); 
rabbit.hide(); 
