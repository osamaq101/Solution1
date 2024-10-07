
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
