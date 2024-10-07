
function Student(studentId) {
    this.studentId = studentId;
    this.answers = [];

   
    this.addAnswer = function (question) {
        this.answers.push(question);
    };
}


function Question(qid, answer) {
    this.qid = qid;
    this.answer = answer;


    this.checkAnswer = function (answer) {
        return this.answer === answer;
    };
}


function Quiz(questions, students) {

    this.questions = new Map(questions.map((question) => [question.qid, question.answer]));
    this.students = students;

    this.scoreStudentBySid = function (sid) {
 
        const student = this.students.find((student) => student.studentId === sid);
        if (!student) return 0; 

        
        let score = 0;
        student.answers.forEach((question) => {
            if (this.questions.get(question.qid) === question.answer) {
                score++;
            }
        });

        return score;
    };

    
    this.getAverageScore = function () {
        const totalScore = this.students.reduce((sum, student) => sum + this.scoreStudentBySid(student.studentId), 0);
        return totalScore / this.students.length;
    };
}

